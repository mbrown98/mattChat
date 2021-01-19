import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Preview.css";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";

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

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

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
      <div className="preview__footer">
        <h2>Send Now</h2>
        <Send className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
