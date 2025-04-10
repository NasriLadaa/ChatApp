import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import "../css/ChatComponent.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How are you?",
      sent: false,
      time: new Date(Date.now() - 60000),
    },
    {
      id: 2,
      text: "I'm doing great! Thanks for asking. This is a longer message to test message wrapping and container responsiveness.",
      sent: true,
      time: new Date(Date.now() - 30000),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: newMessage,
      sent: true,
      time: new Date(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");

    // Simulate response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thanks for your message!",
          sent: false,
          time: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Messenger</div>

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-bubble ${message.sent ? "sent" : "received"}`}
          >
            <div>{message.text}</div>
            <div className={`timestamp ${message.sent ? "sent" : "received"}`}>
              {format(message.time, "h:mm a")}
              {message.sent}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Message..."
        />
        <button className="send-button" onClick={handleSend}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3.4 20.4L22 12 3.4 3.6 3 11l13.4 1L3 13l.4 7.4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
