import React from "react";
const Child = (props) => {
  return (
    <>
      <h1>Child</h1>
      <button onClick={() => props.changeWord("GrandParent")}>
        Change Words
      </button>
    </>
  );
};

export default Child;
