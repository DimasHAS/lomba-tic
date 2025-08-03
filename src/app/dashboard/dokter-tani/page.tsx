"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  time: string;
  image?: string; // For displaying sent images
}

// Helper function to convert a file to a base64 string
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // Return only the base64 part of the data URL
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = (error) => reject(error);
  });

const DokterTaniPage = () => {
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "Halo! Saya adalah Dokter Tani AI. Unggah foto tanaman Anda atau tanyakan masalah pertanian yang Anda alami.",
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit for Gemini
        alert("Ukuran file tidak boleh melebihi 4MB.");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove the selected image
  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle sending the message (text and/or image)
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!message.trim() && !imageFile) || isLoading) return;

    const userMessage: ChatMessage = {
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: imagePreview || undefined,
    };

    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      let imageData: string | null = null;
      let imageMimeType: string | null = null;

      if (imageFile) {
        imageData = await toBase64(imageFile);
        imageMimeType = imageFile.type;
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          image: imageData,
          imageMimeType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response from AI");
      }

      const aiMessage: ChatMessage = {
        sender: "ai",
        text: data.text,
        time: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        sender: "ai",
        text: `Maaf, terjadi kesalahan: ${error.message}`,
        time: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      removeImage();
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span
              className="material-icons text-green-500"
              style={{ fontSize: "32px" }}
            >
              psychology
            </span>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Dokter Tani AI
            </h2>
            <p className="text-sm text-gray-600">
              Chatbot Diagnosa Penyakit Tanaman
            </p>
          </div>
        </div>

        {/* Chat History */}
        <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${
                chat.sender === "user" ? "justify-end" : ""
              }`}
            >
              {chat.sender === "ai" && (
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="material-icons text-green-500 text-lg">
                    psychology
                  </span>
                </div>
              )}
              <div
                className={`rounded-lg p-3 max-w-lg ${
                  chat.sender === "ai"
                    ? "bg-gray-100 text-black"
                    : "bg-green-500 text-white"
                }`}
              >
                {chat.image && (
                  <Image
                    src={chat.image}
                    alt="User upload"
                    width={200}
                    height={200}
                    className="rounded-md mb-2"
                  />
                )}
                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{chat.text}</p>
                <p
                  className={`text-right text-xs mt-2 ${
                    chat.sender === "ai"
                      ? "text-gray-500"
                      : "text-green-200"
                  }`}
                >
                  {chat.time}
                </p>
              </div>
              {chat.sender === "user" && (
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center ml-3 flex-shrink-0 font-bold text-blue-800">
                  U
                </div>
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="flex items-start mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="material-icons text-green-500 text-lg">psychology</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-lg">
                            <p className="text-sm text-gray-800">Halo! Saya adalah Dokter Tani AI, asisten digital untuk diagnosa penyakit tanaman. Silakan upload foto tanaman Anda atau tanyakan masalah pertanian yang Anda alami.</p>
                            <p className="text-right text-xs text-gray-500 mt-2">18.41</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t">
                    <div className="relative">
                        <input className="w-full pl-10 pr-12 py-3 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Ketik pesan atau upload foto tanaman..." type="text" />
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">attach_file</span>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                            <span className="material-icons">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DokterTaniPage;