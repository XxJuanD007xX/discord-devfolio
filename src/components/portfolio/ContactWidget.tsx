import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export const ContactWidget = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Message:', message);
    setMessage('');
  };

  return (
    <div className="widget scroll-widget">
      <div className="widget-header">
        <MessageCircle className="w-4 h-4 text-primary" />
        <span>Envíame un mensaje</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        ¿Tienes un proyecto en mente? ¡Me encantaría escucharte!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Tu email"
            className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        <div>
          <textarea
            placeholder="¿En qué puedo ayudarte?"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
        >
          <Send className="w-4 h-4" />
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
