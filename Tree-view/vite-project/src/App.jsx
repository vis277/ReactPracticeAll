import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Folder from "./assets/Components/Folder";
import TotalData from "./assets/FolderData/Data";
function App() {
  const TotalData = {
    name: "root",
    isFolder: true,
    items: [
      {
        name: "Public",
        isFolder: true,
        items: [
          {
            name: "PublicOne",
            isFolder: true,
            items: [
              {
                name: "indexOne.js",
                isFolder: false,
              },
              {
                name: "indexOne.js",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        name: "src",
        isFolder: true,
        items: [
          {
            name: "srcOne",
            isFolder: true,
            items: [
              {
                name: "srcOne.js",
                isFolder: false,
              },
              {
                name: "srcTwo.js",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        name: "srcTwo",
        isFolder: true,
        items: [
          {
            name: "srcOne",
            isFolder: true,
            items: [
              {
                name: "srcOne.js",
                isFolder: false,
              },
              {
                name: "srcTwo.js",
                isFolder: false,
              },
            ],
          },
        ],
      },
    ],
  };
  return (
    <>
      <Folder data={TotalData}></Folder>
    </>
  );
}

export default App;
