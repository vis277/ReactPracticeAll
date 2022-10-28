import { useState } from "react";
import { memo } from "react";

const ChildV2 = ({ message, counter }) => {
  console.log("ChildV2 Rendered");
  const [num, setNum] = useState(10);

  return (
    <>
      <p>{message}</p>
      <p>{num}</p>
    </>
  );
};
export default memo(ChildV2);
