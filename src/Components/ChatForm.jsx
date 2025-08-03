import React, { useRef } from "react";
import { assests } from "../assets/assests";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "model", text: "Thinking..." },
    ]);

    inputRef.current.value = "";

    generateBotResponse([
      ...chatHistory,
      { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }
    ]);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        className="message-input"
        ref={inputRef}
      />
      <button className="send-btn" type="submit">
        <img src={assests.send} alt="send" />
      </button>
    </form>
  );
};

export default ChatForm;
