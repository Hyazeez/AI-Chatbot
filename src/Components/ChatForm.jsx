import React, { useRef } from "react";
import { assests } from "../assets/assests";

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Add user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    inputRef.current.value = "";

    // Add bot "Thinking..." message
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
    }, 500); // Optional delay
  };

  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="message"
          className="message-input"
          ref={inputRef}
          required
        />
        <button className="send-btn">
          <img src={assests.send} alt="send" />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
