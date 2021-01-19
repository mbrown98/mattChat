import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Search, ChatBubble } from "@material-ui/icons";
import "./Chats.css";
import { db } from "./firebase";

const Chats = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
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
      <div className="chat__posts">{}</div>
    </div>
  );
};

export default Chats;
