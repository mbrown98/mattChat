import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Preview.css";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import CloseIcon from "@material-ui/icons/Close";

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
      <CloseIcon className="preview__close" onClick={closePreview} />
      <img src={cameraImage} alt="preview" />
    </div>
  );
};

export default Preview;
