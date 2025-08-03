import React from "react";
import { assests } from "../assets/assests";
import ProductCard from "./Productcard";

const ChatMessage = ({ chat }) => {
  // Single Product Card
  if (chat.type === "product_card") {
    return <ProductCard product={chat.data} />;
  }

  // Multiple Product Cards
  if (chat.type === "product_cards" && Array.isArray(chat.data)) {
    return (
      <div className="product-card-list">
        {chat.data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
  }

  // Standard Message
  return (
    !chat.hideInChat && (
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

        <div className={chat.role === "model" ? "bot-message" : "user-message"}>
          <p className="message-text">{chat.text}</p>
        </div>

        {chat.role === "user" && (
          <div className="user-icon">
            <img src={assests.user} alt="user" className="user-img" />
          </div>
        )}
      </div>
    )
  );
};

export default ChatMessage;
