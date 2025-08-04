import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET() {
  try {
    // Path ke file JSON
    const jsonFilePath = path.join(process.cwd(), 'src', 'app', 'dashboard', 'komunitani', 'coba', 'harga_pangan.json');
    
    // Baca file JSON
    const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
    
    // Parse content sebagai JSON
    const jsonData = JSON.parse(fileContent);

    // Transform the object of objects into a single flat array with the correct keys
    const transformedData = Object.values(jsonData).map((item: any) => ({
      komoditas: item.name, // Map 'name' to 'komoditas'
      harga: item.nilai,      // Map 'nilai' to 'harga'
      perubahan: item.percentage, // Map 'percentage' to 'perubahan'
      lokasi: item.name,      // Use 'name' as 'lokasi'
      waktu: item.Tanggal,    // Map 'Tanggal' to 'waktu'
      icon: 'public'       // Generic icon
    }));
    
    // Kirim data sebagai response
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("Gagal membaca data harga pangan:", error);
    return NextResponse.json({ message: "Gagal mengambil data." }, { status: 500 });
  }
}
