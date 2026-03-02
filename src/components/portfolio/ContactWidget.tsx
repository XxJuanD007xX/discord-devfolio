import { Hash, Send, Paperclip, PlusCircle, Smile } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser'; // Descomentar al configurar EmailJS
import { toast } from 'sonner';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export const ContactWidget = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola! ¿Tienes un proyecto en mente? Déjame tu nombre, tu correo y un mensaje, y te responderé lo antes posible. 🚀',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isSending]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !name.trim() || !email.trim()) {
      toast.error('Por favor completa todos los campos para enviarme el mensaje.');
      return;
    }

    const newMessageText = `De: ${name} (${email})\n\nMensaje: ${message}`;

    setChatHistory(prev => [...prev, {
      id: Date.now().toString(),
      sender: 'user',
      text: newMessageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    setMessage('');
    setIsSending(true);

    try {
      // Configuracion para EmailJS.
      // Por favor reemplaza YOUR_SERVICE_ID, YOUR_TEMPLATE_ID y YOUR_PUBLIC_KEY con tus propias credenciales.
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulando delay de respuesta
      await new Promise(resolve => setTimeout(resolve, 1500));

      setChatHistory(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `¡Gracias por tu mensaje, ${name}! Te he enviado una confirmación a ${email} y me pondré en contacto contigo muy pronto. ✨`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);

      toast.success('¡Mensaje enviado correctamente!');
      setName('');
      setEmail('');
    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="discord-card overflow-hidden flex flex-col h-[500px]">
      {/* Channel Header */}
      <div className="h-12 border-b flex items-center px-4 shrink-0 shadow-sm z-10" style={{ borderColor: 'var(--border-palette, #3f4147)', backgroundColor: 'var(--bg-secondary, #2b2d31)' }}>
        <Hash className="w-5 h-5 text-[var(--fg-muted,#949ba4)] mr-2" />
        <h3 className="font-bold text-[var(--fg-main,#dbdee1)]">contacto</h3>
        <div className="mx-3 w-px h-5 bg-[var(--border-palette,#3f4147)]" />
        <span className="text-sm font-medium text-[var(--fg-muted,#949ba4)] truncate">Envíame un mensaje para colaborar</span>
      </div>

      {/* Chat History */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
        style={{ backgroundColor: 'var(--bg-main, #1e1f22)' }}
      >
        {chatHistory.map((chat) => (
          <div key={chat.id} className="flex gap-4 animate-message-appear mt-4 hover:bg-white/5 p-1 -mx-2 px-2 rounded transition-colors group">
            <div className="shrink-0 pt-0.5">
              {chat.sender === 'bot' ? (
                <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shadow-lg shadow-[var(--primary-glow)]/20">
                  <span className="font-bold text-sm">JD</span>
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary,#232428)] border border-[var(--border-palette,#3f4147)] flex items-center justify-center text-[var(--fg-main,#dbdee1)]">
                  <span className="font-bold text-sm">{name ? name.substring(0, 2).toUpperCase() : 'TÚ'}</span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-base text-[var(--fg-main,#dbdee1)] hover:underline cursor-pointer">
                  {chat.sender === 'bot' ? 'Juan Diego' : (name || 'Visitante')}
                </span>
                {chat.sender === 'bot' && (
                  <span className="bg-[#5865F2] text-white text-[10px] uppercase font-bold px-1 rounded flex items-center h-4 pb-[1px]">
                    <svg className="w-3 h-3 mr-0.5" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    BOT
                  </span>
                )}
                <span className="text-xs font-medium text-[var(--fg-muted,#949ba4)]">{chat.time}</span>
              </div>
              <p className="text-[15px] text-[var(--fg-main,#dbdee1)] mt-0.5 leading-relaxed whitespace-pre-wrap">
                {chat.text}
              </p>
            </div>
          </div>
        ))}
        {isSending && (
          <div className="flex items-center gap-2 text-[var(--fg-muted,#949ba4)] font-medium text-sm animate-pulse ml-14 mt-2">
            <span className="flex gap-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
            </span>
            <span>Juan Diego está escribiendo...</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 shrink-0 bg-[var(--bg-main,#1e1f22)]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* Informacion Extra */}
          <div className="flex gap-2 mb-1">
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded bg-[var(--bg-tertiary,#383a40)] text-sm text-[var(--fg-main,#dbdee1)] placeholder-[var(--fg-muted,#949ba4)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-shadow"
            />
            <input
              type="email"
              placeholder="Tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded bg-[var(--bg-tertiary,#383a40)] text-sm text-[var(--fg-main,#dbdee1)] placeholder-[var(--fg-muted,#949ba4)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-shadow"
            />
          </div>

          <div className="relative flex items-center bg-[var(--bg-tertiary,#383a40)] rounded-lg px-4 py-2 group focus-within:ring-1 focus-within:ring-[var(--primary)] transition-shadow">
            <button type="button" className="p-1 mr-2 text-[var(--fg-muted,#949ba4)] hover:text-[var(--fg-main,#dbdee1)] transition-colors rounded-full hover:bg-[var(--bg-secondary,#2b2d31)]">
              <PlusCircle className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Enviar mensaje a #contacto"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
              className="flex-1 bg-transparent text-[var(--fg-main,#dbdee1)] placeholder-[var(--fg-muted,#949ba4)] focus:outline-none py-1.5 min-w-0 text-[15px] disabled:opacity-50"
            />
            <div className="flex items-center gap-1 ml-2">
              <button type="button" className="p-1 text-[var(--fg-muted,#949ba4)] hover:text-[var(--fg-main,#dbdee1)] transition-colors rounded hover:bg-[var(--bg-secondary,#2b2d31)] hidden sm:block">
                <Smile className="w-5 h-5" />
              </button>
              <button
                type="submit"
                disabled={!message.trim() || !name.trim() || !email.trim() || isSending}
                className="p-1.5 ml-1 text-[var(--primary)] hover:text-white hover:bg-[var(--primary)] transition-all rounded disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[var(--primary)]"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
