import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
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
    if (isOpen) {
      // Small timeout to ensure the window has rendered before scrolling
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
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
      let hasReceivedData = false;

      for await (const chunk of stream) {
         hasReceivedData = true;
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
       setMessages(prev => prev.map(msg => 
        msg.id === modelMessageId 
          ? { ...msg, text: "I'm sorry, I encountered an error. Please try again later.", isStreaming: false } 
          : msg
      ));
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-sm font-bold">
                AI
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
                  className={`max-w-[85%] rounded px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-slate-800 border border-slate-100'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}
             {isLoading && messages[messages.length-1].role === 'user' && (
               <div className="flex justify-start">
                 <div className="bg-white text-slate-800 shadow-sm border border-slate-100 rounded px-4 py-3">
                    <div className="flex space-x-1 items-center h-4">
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                 </div>
               </div>
             )}
            <div ref={messagesEndRef} className="h-2" />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded px-3 py-2">
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
                className={`p-2 rounded text-white transition-all ${
                  inputValue.trim() && !isLoading
                    ? 'bg-primary-600 hover:bg-primary-700' 
                    : 'bg-slate-300 cursor-not-allowed'
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
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 ${
          isOpen ? 'bg-navy-900 text-white' : 'bg-primary-600 text-white'
        }`}
      >
        {isOpen ? <Icons.Close /> : <Icons.Chat />}
      </button>

    </div>
  );
};

export default AIChat;