'use client';

import { useState, useEffect, useRef } from 'react';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: "Dokter Tani - TaniMaju",
//     description: "Dokter Tani for TaniMaju",
// };

interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
    time: string;
}

const DokterTaniPage = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
        {
            sender: 'ai',
            text: 'Halo! Saya adalah Dokter Tani AI, asisten digital untuk diagnosa penyakit tanaman. Silakan tanyakan masalah pertanian yang Anda alami.',
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            sender: 'user',
            text: message,
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };

        setChatHistory(prev => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get response from AI');
            }

            const aiMessage: ChatMessage = {
                sender: 'ai',
                text: data.text,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setChatHistory(prev => [...prev, aiMessage]);

        } catch (error: any) {
            console.error("Error sending message:", error);
            const errorMessage: ChatMessage = {
                sender: 'ai',
                text: `Maaf, terjadi kesalahan: ${error.message}`,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex-1 p-6">
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                <div className="p-4 border-b flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="material-icons text-green-500" style={{ fontSize: '32px' }}>psychology</span>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold text-gray-800">Dokter Tani AI</h2>
                        <p className="text-sm text-gray-600">Chatbot Diagnosa Penyakit Tanaman</p>
                    </div>
                </div>
                <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`flex items-start mb-4 ${chat.sender === 'user' ? 'justify-end' : ''}`}>
                            {chat.sender === 'ai' && (
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="material-icons text-green-500 text-lg">psychology</span>
                                </div>
                            )}
                            <div className={`${chat.sender === 'ai' ? 'bg-gray-100 text-black' : 'bg-green-500 text-white'} rounded-lg p-3 max-w-lg`}>
                                <p className="text-sm">{chat.text}</p>
                                <p className={`text-right text-xs mt-2 ${chat.sender === 'ai' ? 'text-gray-500' : 'text-green-200'}`}>{chat.time}</p>
                            </div>
                             {chat.sender === 'user' && (
                                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center ml-3 flex-shrink-0 font-bold text-blue-800">
                                    U
                                </div>
                            )}
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-start mb-4">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="material-icons text-green-500 text-lg">psychology</span>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 max-w-lg">
                                <p className="text-sm text-gray-800">Dokter Tani AI sedang mengetik...</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="relative">
                        <input
                            className="w-full pl-4 pr-12 py-3 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                            placeholder="Ketik pesan..."
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-600 disabled:bg-green-300"
                            disabled={isLoading}
                        >
                            <span className="material-icons">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DokterTaniPage;
