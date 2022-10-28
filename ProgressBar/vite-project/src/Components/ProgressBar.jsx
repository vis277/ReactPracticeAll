import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(60);
  return (
    <>
      <div style={{ display: "flex", gap: "2em" }}>
        <div
          style={{
            height: "10px",
            width: "100px",
            backgroundColor: "aqua",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              height: "10px",
              width: progress > 33.34 ? "100px" : (progress / 100) * 300,
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "10px",
            width: "100px",
            backgroundColor: "aqua",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              height: "10px",
              width:
                progress >= 66.68
                  ? "100px"
                  : progress < 33.34
                  ? "0px"
                  : (progress / 100) * 300 - 100,
              backgroundColor: "yellow",
              borderRadius: "20px",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "10px",
            width: "100px",

            backgroundColor: "aqua",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              height: "10px",
              width:
                progress >= 100
                  ? "100px"
                  : progress < 66.68
                  ? "0px"
                  : (progress / 100) * 300 - 200,
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
