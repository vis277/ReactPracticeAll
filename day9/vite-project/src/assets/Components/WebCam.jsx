import React from "react";
import { useState, useRef } from "react";
import Webcam from "react-webcam";

import ButtonComponent from "./ButtonComponent";

const WebcamCapture = () => {
  const [webcamEnabled, setWebCamEnabled] = useState(false);
  const [screeShot, setScreenshot] = useState([]);

  const _handleButtonClickStart = () => {
    setWebCamEnabled("true");
  };

  if (webcamEnabled) {
    let videonow = navigator.mediaDevices.getDisplayMedia();
    setInterval(() => {
      const capture = async () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const video = document.createElement("video");

        try {
          const captureStream = await videonow;
          video.srcObject = captureStream;
          context.drawImage(video, 0, 0, window.width, window.height);
          const frame = canvas.toDataURL("image/jpeg");
          captureStream.getTracks().forEach((track) => track.stop());
          console.log(frame);
        } catch (err) {
          console.error("Error: " + err);
        }
      };

      capture();
    }, 5000);
  }

  const _handleButtonClickEnd = () => {
    setWebCamEnabled(false);
  };

  return (
    <>
      {/* <Webcam></Webcam> */}
      <ButtonComponent lable="Start" clickhandle={_handleButtonClickStart} />
      <div className="camera">
        {webcamEnabled ? <Webcam screenshotFormat="image/jpeg"></Webcam> : ""}
      </div>

      <ButtonComponent lable="End" clickhandle={_handleButtonClickEnd} />
    </>
  );
};

export default WebcamCapture;
