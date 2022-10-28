import React from "react";

const ButtonComponent = ({ lable, clickhandle }) => {
  return (
    <>
      <button onClick={clickhandle}>{lable}</button>
    </>
  );
};

export default ButtonComponent;
