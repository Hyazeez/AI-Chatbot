import React, { useEffect, useRef, useState } from "react";
import { assests } from "./assets/assests";
import "./App.css";
import ChatForm from "./Components/ChatForm";
import ChatMessage from "./Components/ChatMessage";
import Chatboticon from "./Components/Chatboticon";
import { companyInfo } from "./Components/Companyinfo";

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    {
    hideInChat: true,
    role: "model",
    text: JSON.stringify(companyInfo)
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to bottom when chat updates
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const generateBotResponse = async (history) => {
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "API error");

      const botReply = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      setChatHistory((history) => [
        ...history.slice(0, -1), // remove temporary "Thinking..." message
        { role: "model", text: botReply },
      ]);
    } catch (error) {
      console.log(error);
      setChatHistory((history) => [
        ...history.slice(0, -1),
        { role: "model", text: "❌ Failed to get response." },
      ]);
    }
  };

  return (
    <div className="container">
      <button className="chatbot-toggler" onClick={toggleChat}>
        {isOpen ? (
          <span>
            <img
              src={assests.close}
              alt="chat"
              className="toggler"
              width={30}
              height={30}
            />
          </span>
        ) : (
          <span>
            <img
              src={assests.chat}
              alt="close"
              className="toggler"
              width={30}
              height={30}
            />
          </span>
        )}
      </button>

      {isOpen && (
        <div className={isOpen ? "chatbot-popup" : "chatbot-popup hidden"}>
          <div className="chat-header">
            <div className="header-info">
              <img src={assests.bot} alt="chatbot" className="chatbot-img" />
              <h2 className="logo-text">ChatBot</h2>
            </div>
            <button className="btn">
              <img src={assests.arrow} alt="down-arrow" />
            </button>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            <div className="position">
              <Chatboticon />
              <div className="bot-message">
                <p className="message-text">
                  Hey there 👋
                  <br />
                  How can I help you?
                </p>
              </div>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="chat-footer">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
