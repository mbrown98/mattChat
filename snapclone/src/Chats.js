import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Search, ChatBubble, RadioButtonUnchecked } from "@material-ui/icons";
import "./Chats.css";
import { auth, db } from "./firebase";
import Chat from "./Chat";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/appSlice";
import { useHistory } from "react-router-dom";

const Chats = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const takeSnap = () => {
    history.push("/");
  };

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
        <Avatar
          className="chats__avatar"
          src={user.profilePic}
          onClick={() => auth.signOut()}
        />
        <div className="chats__search">
          <Search className="chats__searchIcon" />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>
      <div className="chat__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
      <RadioButtonUnchecked
        className="chats__takePicIcon"
        onClick={takeSnap}
        fontSize="large"
      />
    </div>
  );
};

export default Chats;
