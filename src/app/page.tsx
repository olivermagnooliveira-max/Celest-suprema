'use client';

import React, { useState } from 'react';
import { Send, Brain, User } from 'lucide-react';

export default function Home() {
  const [messages, setMessages] = useState<{id: string, role: string, content: string}[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMsg = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    
    setTimeout(() => {
      const responseMsg = { 
        id: (Date.now() + 1).toString(), 
        role: 'celest', 
        content: 'Modo local carregado com sucesso. Como posso ajudar com seus comandos neurais hoje?' 
      };
      setMessages(prev => [...prev, responseMsg]);
    }, 1000);
  };

  return (
    <main className="h-screen w-screen flex flex-col bg-[#0a0a1a] text-white p-4 overflow-hidden">
      <header className="glass-panel p-4 rounded-xl flex justify-between items-center mb-4 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00f0ff] animate-pulse" />
          <h1 className="font-bold tracking-wider text-white">CELEST <span className="text-[#00f0ff]">SUPREMA</span></h1>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/50">v4.1</span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        {messages.length === 0 && (
          <div className="text-center my-auto">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#ff00ff] opacity-80 blur-sm animate-pulse mx-auto mb-6" />
            <p className="text-white/40 text-sm">Aguardando interação neural...</p>
          </div>
        )}

        {messages.length > 0 && (
          <div className="w-full flex-1 overflow-y-auto space-y-4 px-2 mb-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${msg.role === 'user' ? 'bg-[#12121f] border-[#00f0ff]/30' : 'bg-[#00f0ff]/20 border-[#00f0ff]'}`}>
                  {msg.role === 'user' ? <User size={14} /> : <Brain size={14} />}
                </div>
                <div className="glass-panel p-3 rounded-xl max-w-[80%] text-sm">
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="glass-panel p-2 rounded-xl flex gap-2 z-10">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Consulte a Celest..." 
          className="flex-1 bg-transparent px-3 py-2 outline-none text-sm placeholder:text-white/30"
        />
        <button onClick={handleSend} className="bg-gradient-to-r from-[#00f0ff] to-[#6d28d9] w-10 h-10 rounded-lg flex items-center justify-center active:scale-95 transition-transform">
          <Send size={16} className="text-black" />
        </button>
      </div>
    </main>
  );
}
