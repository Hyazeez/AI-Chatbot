import React from "react";
import { assests } from "../assets/assests";
import Chatboticon from "./Chatboticon";

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`position2 ${
        chat.role === "user" ? "user-align" : "bot-align"
      }`}
    >
      {chat.role === "model" && (
        <div className="bot-icon">
          <img src={assests.botnew} alt="bot" className="chatbot-img2" />
        </div>
      )}

      <div className={`${chat.role === "model" ? "bot-message" : "user-message"}`}>
        <p className="message-text">{chat.text}</p>
      </div>

      {chat.role === "user" && (
        <div className="user-icon">
          <img src={assests.user} alt="user" className="user-img" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
