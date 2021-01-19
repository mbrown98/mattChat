import React from "react";
import { Avatar } from "@material-ui/core";
import { Search, ChatBubble } from "@material-ui/icons";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <Search />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>
    </div>
  );
};

export default Chats;
