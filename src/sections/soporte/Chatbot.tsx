import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ─── Types ─── */
type Sender = 'bot' | 'user';

interface Message {
  id: number;
  text: string;
  sender: Sender;
}

interface QuickReply {
  label: string;
  value: string;
}

/* ─── Bot logic ─── */
const BOT_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ['producto', 'artículo', 'vende', 'tienen', 'stock', 'catálogo'],
    response: 'Tenemos lámparas, cojines, floreros y muebles en tonos rosa, carmín y púrpura. Podés explorar el catálogo completo desde el menú superior. ¿Hay algo en particular que estés buscando?',
  },
  {
    keywords: ['pago', 'pagar', 'tarjeta', 'mercadopago', 'naranja', 'mastercard', 'visa'],
    response: 'Aceptamos MercadoPago, Naranja X, Mastercard y Visa. También transferencia bancaria. ¿Necesitás más información sobre cuotas?',
  },
  {
    keywords: ['sucursal', 'local', 'dirección', 'donde', 'dónde', 'ubicación'],
    response: 'Estamos en Av. Rafael Nuñez 371, Cerro Las Rosas, Córdoba. También podés comprar por WhatsApp con envío a domicilio.',
  },
  {
    keywords: ['horario', 'hora', 'abren', 'cierran', 'abierto'],
    response: 'Abrimos de lunes a viernes de 9 a 20 hs, y los sábados de 9 a 14 hs. ¡Te esperamos!',
  },
  {
    keywords: ['envío', 'envio', 'mandan', 'despachan', 'delivery'],
    response: 'Sí, realizamos envíos a todo el país por Correo Argentino y OCA. El costo varía según destino. ¿Querés que te asesoremos?',
  },
  {
    keywords: ['precio', 'cuánto', 'cuanto', 'cuesta', 'vale'],
    response: 'Los precios van desde $899 para floreros hasta $8.999 para muebles. Todo está en el catálogo con precios actualizados.',
  },
  {
    keywords: ['hola', 'buenas', 'buendia', 'buenos'],
    response: '¡Hola! Qué bueno que estás acá 🌸 Contame, ¿en qué te puedo ayudar?',
  },
  {
    keywords: ['gracias', 'gracias!', 'muchas gracias'],
    response: '¡Con gusto! Si necesitás algo más, acá estoy. 🌷',
  },
];

const QUICK_REPLIES: QuickReply[] = [
  { label: 'Productos',  value: 'productos' },
  { label: 'Pagos',      value: 'pago' },
  { label: 'Sucursal',   value: 'sucursal' },
  { label: 'Horarios',   value: 'horario' },
  { label: 'Envíos',     value: 'envío' },
];

const getBotResponse = (input: string): string => {
  const lower = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  for (const { keywords, response } of BOT_RESPONSES) {
    if (keywords.some(k => lower.includes(k.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
      return response;
    }
  }
  return 'Podés preguntarme sobre productos, pagos, sucursal, horarios o envíos. ¡Estoy para ayudarte!';
};

/* ─── Typing indicator ─── */
const TypingIndicator: React.FC = () => (
  <div className="chat-typing">
    <div className="chat-typing-avatar">P</div>
    <div className="chat-typing-dots">
      <span /><span /><span />
    </div>
  </div>
);

/* ─── Send icon ─── */
const SendIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ─── Main Chatbot ─── */
const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: '¡Hola! Bienvenida a Palastra Deco, Soy tu asistente virtual. Podés preguntarme sobre productos, pagos, horarios o sucursales.',
      sender: 'bot',
    },
  ]);
  const [input, setInput]         = useState('');
  const [typing, setTyping]       = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLInputElement>(null);
  const idRef          = useRef(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages, typing]);

  const addMessage = useCallback((text: string, sender: Sender) => {
    setMessages(prev => [...prev, { id: idRef.current++, text, sender }]);
  }, []);

  const handleSend = useCallback((text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || typing) return;

    addMessage(msg, 'user');
    setInput('');
    setShowQuick(false);
    setTyping(true);

    const delay = 800 + Math.random() * 600;
    setTimeout(() => {
      setTyping(false);
      addMessage(getBotResponse(msg), 'bot');
    }, delay);
  }, [input, typing, addMessage]);

  const handleQuickReply = (qr: QuickReply) => {
    handleSend(qr.value);
  };

  return (
    <div className="cb-wrap">

      {/* Header */}
      <div className="cb-header">
        <div className="cb-header-left">
          <div className="cb-avatar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 2C6.48 2 2 5.92 2 10.72c0 2.93 1.56 5.54 4 7.28V22l4-2.5c.64.1 1.31.17 2 .17 5.52 0 10-3.92 10-8.72C22 5.92 17.52 2 12 2z"/>
            </svg>
          </div>
          <div className="cb-header-info">
            <span className="cb-header-name">Palastra Asistente</span>
            <span className="cb-header-status">
              <span className="cb-status-dot" />
              En línea
            </span>
          </div>
        </div>
        <div className="cb-header-brand">
          <span>PD</span>
        </div>
      </div>

      {/* Messages */}
      <div className="cb-messages">
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={`cb-message cb-message--${msg.sender}`}
            style={{
              animationDelay: `${i === messages.length - 1 ? 0 : 0}ms`,
            }}
          >
            {msg.sender === 'bot' && (
              <div className="cb-msg-avatar">P</div>
            )}
            <div className="cb-bubble">{msg.text}</div>
          </div>
        ))}

        {/* Typing indicator */}
        {typing && <TypingIndicator />}

        {/* Quick replies — shown after first bot message */}
        {showQuick && !typing && (
          <div className="cb-quick-replies">
            {QUICK_REPLIES.map(qr => (
              <button
                key={qr.value}
                className="cb-quick-btn"
                onClick={() => handleQuickReply(qr)}
              >
                {qr.label}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="cb-input-row">
        <input
          ref={inputRef}
          type="text"
          className="cb-input"
          placeholder="Escribí tu consulta…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          disabled={typing}
        />
        <button
          className="cb-send"
          onClick={() => handleSend()}
          disabled={!input.trim() || typing}
          aria-label="Enviar"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;