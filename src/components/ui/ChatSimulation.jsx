import { useState, useEffect, useRef } from 'react';

const ChatSimulation = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const chatRef = useRef(null);

  // The script of your demo
  const script = [
    { role: 'user', text: "Who is the MRP controller for material 123455789?", delay: 1000 },
    { role: 'bot', text: "Missing Parts Agent...", type: 'thinking', delay: 2000 },
    { role: 'bot', text: "The MRP Controller for material 123456789 is AB12.", delay: 1500 },
    { role: 'user', text: "Give me a list of the materials for order status ready to firm for MRP Name John Doe", delay: 1000 },
    { role: 'bot', text: "Ready To Firm Agent...", type: 'thinking', delay: 2000 },
    { role: 'bot', text: "Here is a list of materials for orders with status Ready To Firm where the MRP Name is John Doe: LSKFI504HR, MCNFJDUR75K, MNDLSOEIR8, 30OLDKFYSB, LAMSNR7583, MNDKSLAOR95, MFLDORUYGV9", delay: 1500 },
    { role: 'user', text: "What is the order and requirment quantity for planned order 483920465?", delay: 2000 },
    { role: 'bot', text: "Missing Parts Agent...", type: 'thinking', delay: 2500 },
    { role: 'bot', text: "Here are the details for Plannned Order 483920465: Order Quantity = 1400000, Requirement Quantity = 1600000", delay: 1000 },
    { role: 'user', text: "How many orders are there in L42 for missing parts?", delay: 2000 },
    { role: 'bot', text: "Missing Parts Agent...", type: 'thinking', delay: 2500 },
    { role: 'bot', text: "I found 1483 orders for L42. Would you like me to extract them to a CSV or an Excel file?", delay: 1000 }
  ];

  useEffect(() => {
    if (step >= script.length) return;

    const currentAction = script[step];
    
    const timeout = setTimeout(() => {
      // If it's the user, add immediately
      if (currentAction.role === 'user') {
        setMessages(prev => [...prev, { role: 'user', text: currentAction.text }]);
        setStep(prev => prev + 1);
      } 
      // If it's the bot, show typing indicator first
      else {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, { role: 'bot', text: currentAction.text, type: currentAction.type }]);
          setStep(prev => prev + 1);
        }, 1500); // Bot "thinking" time
      }
    }, currentAction.delay);

    return () => clearTimeout(timeout);
  }, [step]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div className="chat-container">
      <style>{`
        .chat-container {
          background: #f5f5f5; /* Light bg like Teams/Copilot */
          border: 1px solid #ccc;
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
          height: 400px;
          display: flex;
          flex-direction: column;
          font-family: 'Segoe UI', sans-serif;
          margin: 2rem auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          overflow: hidden;
        }
        .chat-header {
          background: #464775; /* Teams Purple */
          color: white;
          padding: 10px 15px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .chat-body {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fff;
        }
        .message {
          max-width: 80%;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.4;
          animation: popIn 0.3s ease-out;
        }
        .user {
          align-self: flex-end;
          background: #e1eafc;
          color: #242424;
          border-bottom-right-radius: 2px;
        }
        .bot {
          align-self: flex-start;
          background: #f0f0f0;
          color: #242424;
          border-bottom-left-radius: 2px;
        }
        .thinking {
          font-style: italic;
          color: #666;
          font-size: 0.8rem;
          background: transparent;
        }
        .typing-indicator {
          align-self: flex-start;
          color: #888;
          font-size: 0.8rem;
          padding-left: 10px;
        }
        .chat-footer {
          padding: 10px;
          border-top: 1px solid #eee;
          background: #f9f9f9;
        }
        .fake-input {
          width: 100%;
          height: 30px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="chat-header">
        <div style={{ width: '10px', height: '10px', background: '#00ff00', borderRadius: '50%' }}></div>
        Copilot Planning Assistant
      </div>

      <div className="chat-body" ref={chatRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role} ${msg.type || ''}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="typing-indicator">Copilot is thinking...</div>}
      </div>

      <div className="chat-footer">
        <div className="fake-input"></div>
      </div>
    </div>
  );
};

export default ChatSimulation;