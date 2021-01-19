import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Preview.css";
import { selectCameraImage } from "./features/cameraSlice";

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  const history = useHistory();

  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);

  return (
    <div className="preview">
      <h2>This is the preview</h2>
      <img src={cameraImage} alt="preview" />
    </div>
  );
};

export default Preview;
