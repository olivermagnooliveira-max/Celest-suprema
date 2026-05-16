'use client';

import React, { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<{id: string, role: string, content: string}[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    setTimeout(() => {
      const responseMsg = { 
        id: (Date.now() + 1).toString(), 
        role: 'celest', 
        content: 'Modo local carregado com sucesso. Como posso ajudar com seus comandos neurais hoje?' 
      };
      setMessages(prev => [...prev, responseMsg]);
    }, 800);
  };

  return (
    <main className="fixed inset-0 flex flex-col bg-[#0a0a1a] text-white p-4 font-sans select-none overflow-hidden">
      {/* Topo Premium */}
      <header className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center mb-4 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse" />
          <h1 className="font-bold tracking-widest text-sm text-white">CELEST <span className="text-[#00f0ff]">SUPREMA</span></h1>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/40">v4.1</span>
      </header>

      {/* Área Central de Mensagens */}
      <div className="flex-1 flex flex-col justify-between min-h-0">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#ff00ff] opacity-60 blur-md animate-pulse mb-4" />
            <p className="text-white/30 text-xs tracking-wider font-mono">AGUARDANDO INTERAÇÃO NEURAL...</p>
          </div>
        ) : (
          <div className="w-full flex-1 overflow-y-auto space-y-3 pr-1 mb-4 custom-scroll">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] text-sm border shadow-md backdrop-blur-md ${
                  msg.role === 'user' 
                    ? 'bg-white/10 border-white/20 rounded-tr-none text-white' 
                    : 'bg-[#00f0ff]/10 border-[#00f0ff]/30 rounded-tl-none text-[#00f0ff]'
                }`}>
                  <p className="leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Campo de Texto Estilo Computador de Bordo */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-2 rounded-xl flex gap-2 items-center mb-2 shadow-2xl">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Consulte a Celest..." 
            className="flex-1 bg-transparent px-3 py-2 outline-none text-sm placeholder:text-white/20 text-white w-full"
          />
          <button 
            onClick={handleSend} 
            type="button"
            className="bg-gradient-to-r from-[#00f0ff] to-[#6d28d9] text-black font-bold text-xs px-4 h-9 rounded-lg active:scale-95 transition-transform flex items-center justify-center tracking-wider"
          >
            ENVIAR
          </button>
        </div>
      </div>
    </main>
  );
}

