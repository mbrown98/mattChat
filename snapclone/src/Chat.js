import React from "react";
import { Avatar } from "@material-ui/core";
import { StopRounded } from "@material-ui/icons";
import ReactTimeago from "react-timeago";
import "./Chat.css";

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  return (
    <div className="chat">
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          Tap to view -{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
