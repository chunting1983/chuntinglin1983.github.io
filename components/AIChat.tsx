import React, { useState, useRef, useEffect } from 'react';
import { Icons, PROFILE } from '../constants';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! I'm C.T. Lin's AI assistant. Feel free to ask me about his experience, IP services, or how to book a consultation.`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: modelMessageId,
      role: 'model',
      text: '',
      isStreaming: true
    }]);

    try {
      const stream = sendMessageToGemini(userMessage.text);
      let fullText = '';

      for await (const chunk of stream) {
         fullText += chunk;
         setMessages(prev => prev.map(msg => 
            msg.id === modelMessageId 
              ? { ...msg, text: fullText } 
              : msg
         ));
      }
      
      setMessages(prev => prev.map(msg => 
        msg.id === modelMessageId 
          ? { ...msg, isStreaming: false } 
          : msg
      ));

    } catch (error) {
       console.error(error);
       // Error handling implicitly covered by service yielding error text
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-400 to-primary-600 flex items-center justify-center text-sm font-bold">
                  AI
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
              </div>
              <div>
                <p className="font-bold text-sm">C.T. Lin Assistant</p>
                <p className="text-xs text-slate-400">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icons.Close />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  {msg.isStreaming && (
                     <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-primary-400 animate-pulse"></span>
                  )}
                </div>
              </div>
            ))}
             {/* Loading Indicator (before first chunk) */}
             {isLoading && messages[messages.length-1].role === 'user' && (
               <div className="flex justify-start">
                 <div className="bg-white text-slate-800 shadow-sm border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce-dot"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce-dot delay-100"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce-dot delay-200"></div>
                    </div>
                 </div>
               </div>
             )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-primary-100 focus-within:border-primary-400 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my services..."
                className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder-slate-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className={`p-2 rounded-full transition-all ${
                  inputValue.trim() && !isLoading
                    ? 'bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105 shadow-md' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Icons.Send />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        {isOpen ? <Icons.Close /> : <Icons.Chat />}
        
        {/* Tooltip for initial attention */}
        {!isOpen && messages.length === 1 && (
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-white text-slate-800 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap animate-bounce hidden md:block border border-slate-100">
                Ask me anything!
                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white transform -translate-y-1/2 rotate-45 border-t border-r border-slate-100"></div>
            </span>
        )}
      </button>

    </div>
  );
};

export default AIChat;