import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Preview.css";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import { v4 as uuid } from "uuid";
import firebase from "firebase";
import {
  TextFields,
  Close,
  Create,
  Note,
  MusicNote,
  AttachFile,
  Crop,
  Timer,
  Send,
} from "@material-ui/icons";
import { db, storage } from "./firebase";
import { selectUser } from "./features/appSlice";

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url");
    // loading func, error func, success func
    uploadTask.on(
      "state_changed",
      null,
      (err) => {
        console.log(err);
      },
      () => {
        // on complete
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              username: "Matt",
              read: false,

              profilePic: user.profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace("/chats");
          });
      }
    );
  };

  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);

  const closePreview = () => {
    dispatch(resetCameraImage());
    // history.replace("/")
  };

  return (
    <div className="preview">
      <Close className="preview__close" onClick={closePreview} />
      <div className="preview__toolbarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImage} alt="preview" />
      <div className="preview__footer" onClick={sendPost}>
        <h2>Send Now</h2>
        <Send className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
