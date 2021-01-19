import React from "react";
import { useSelector } from "react-redux";
import "./Preview.css";
import { selectCameraImage } from "./features/cameraSlice";

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  return (
    <div className="preview">
      <h2>This is the preview</h2>
      <img src={cameraImage} alt="preview" />
    </div>
  );
};

export default Preview;
