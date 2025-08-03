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
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are an AI assistant called Dokter Tani. You specialize in agriculture, providing advice on planting, pest control, and crop diseases. Your tone should be helpful and professional.' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Tentu, saya Dokter Tani. Ada yang bisa saya bantu seputar pertanian?' }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
