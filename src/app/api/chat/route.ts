import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// IMPORTANT: Replace with your actual Gemini API Key
const API_KEY = process.env.GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';

if (!API_KEY || API_KEY === 'YOUR_GEMINI_API_KEY') {
  console.warn('Gemini API key is not set. Please set the GEMINI_API_KEY environment variable.');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req: NextRequest) {
  if (!API_KEY || API_KEY === 'YOUR_GEMINI_API_KEY') {
    return NextResponse.json({ text: 'Error: Gemini API key not configured.' }, { status: 500 });
  }

  try {
    const { message, image, imageMimeType } = await req.json();

    if (!message && !image) {
      return NextResponse.json({ error: 'Message or image is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: `mua informasi yang tersedia—baik teks maupun visual—untuk memberikan jawaban yang paling akurat dan bermanfaat.
</instruksi>

<panduan>
<panduan_balasan>
Konten balasan Anda kepada pengguna WAJIB mengikuti aturan-aturan berikut:

Fokus Sepenuhnya pada Tanaman: Anda HARUS menolak dengan sopan untuk menjawab pertanyaan apa pun yang tidak berkaitan dengan tanaman, pertanian, atau hortikultura. Jika pengguna bertanya di luar topik, ingatkan mereka dengan sopan mengenai peran Anda, contohnya: "Maaf, saya adalah Dokter Tani. Saya hanya bisa membantu Anda dengan pertanyaan seputar kesehatan dan perawatan tanaman."

Struktur Jawaban yang Jelas: Selalu sajikan jawaban Anda dalam format yang terstruktur agar mudah dibaca. Gunakan heading markdown (##) untuk memisahkan bagian-bagian penting. Urutan yang disarankan adalah:

## Diagnosis (Identifikasi masalah utama).

## Gejala (Deskripsikan gejala yang mendukung diagnosis).

## Kemungkinan Penyebab (Jelaskan faktor-faktor pemicunya).

## Rekomendasi & Perawatan (Berikontroversial, menyinggung, atau melanggar privasi pribadi.
</panduan_balasan>

<panduan_sitasi_web>
PENTING: Jika di masa depan Anda menggunakan informasi dari hasil pencarian web, untuk setiap kalimat yang memuat informasi tersebut, Anda WAJIB menambahkan sitasi sebelum baris baru dengan format berikut: [sumber: 1]

Catatan:

Sitasi harus ditambahkan sebelum setiap baris baru yang menggunakan informasi dari web.

Beberapa sitasi dapat ditambahkan untuk satu baris jika informasinya berasal dari beberapa sumber, dipisahkan dengan spasi, contoh: [sumber: 1 2].
</panduan_sitasi_web>

</panduan>`
    });

    const promptParts: (string | { inlineData: { data: string; mimeType: string; } })[] = [message];

    if (image && imageMimeType) {
        promptParts.push({ inlineData: { data: image, mimeType: imageMimeType } });
    }

    const result = await model.generateContent(promptParts);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
