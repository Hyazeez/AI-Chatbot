import React from "react";
import { assests } from "../assets/assests";

const ChatMessage = () => {
  return (
    <div>
      <div className="position2">
        <div className="user-message">
          <p className="message-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            illum rerum asperiores reprehenderit, quis molestias quae. Facilis
            mollitia voluptas
          </p>
        </div>
        <div className="user-icon">
          <img src={assests.user} alt="" className="user-img" />
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
