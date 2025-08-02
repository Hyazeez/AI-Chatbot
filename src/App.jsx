import React, { useState } from "react";
import { assests } from "./assets/assests";
import "./App.css";
import ChatForm from "./Components/ChatForm";
import ChatMessage from "./Components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* --ChatBot Header-- */}
        <div className="chat-header">
          <div className="header-info">
            <img src={assests.bot} alt="chatbot" className="chatbot-img" />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button className="btn">
            <img src={assests.arrow} alt="down-arrow" />
          </button>
        </div>

        {/* --Chat Body-- */}
        <div className="chat-body">
          <div className="position">
            <div className="bot-icon">
              <img
                src={assests.botnew}
                alt="chatbot"
                className="chatbot-img2"
              />
            </div>
            <div className="bot-message">
              <p className="message-text">
                Hey there 👋
                <br /> How can I help you?
              </p>
            </div>
          </div>

          {/* --Render the chat history dynamically-- */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat}/>
          ))}
        </div>

        {/* --Chat Footer-- */}
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;
