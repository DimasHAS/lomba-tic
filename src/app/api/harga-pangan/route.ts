import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const getTransformedData = async () => {
  const jsonFilePath = path.join(process.cwd(), 'src', 'app', 'dashboard', 'komunitani', 'coba', 'harga_pangan.json');
  const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
  const jsonData = JSON.parse(fileContent);

  const transformedData = Object.values(jsonData).map((item: any) => ({
    komoditas: item.name,
    harga: item.nilai,
    perubahan: item.percentage,
    lokasi: item.name,
    waktu: item.Tanggal,
    icon: 'public'
  }));
  return transformedData;
};

export async function GET() {
  try {
    const transformedData = await getTransformedData();
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("Gagal membaca data harga pangan:", error);
    return NextResponse.json({ message: "Gagal mengambil data." }, { status: 500 });
  }
}

export async function POST() {
  try {
    const pythonScriptPath = path.join(process.cwd(), 'src', 'app', 'dashboard', 'komunitani', 'coba', 'main.py');
    console.log(`Executing python script: python ${pythonScriptPath}`);
    const { stdout, stderr } = await execPromise(`python "${pythonScriptPath}"`);
    console.log(`Python stdout: ${stdout}`);
    if (stderr) {
      console.error(`Python stderr: ${stderr}`);
    }

    const transformedData = await getTransformedData();
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("Gagal melakukan scraping atau membaca data:", error);
    return NextResponse.json({ message: "Gagal memperbarui data harga pangan." }, { status: 500 });
  }
}
