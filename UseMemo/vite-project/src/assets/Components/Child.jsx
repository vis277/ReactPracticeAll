import { useEffect, useState } from "react";

const Child = ({ handleclick, counter }) => {
  console.log("");
  const [childCount, setChildCount] = useState(counter);
  const _handleChildClick = () => {
    setChildCount(childCount + 1);
  };
  useEffect(() => {
    const currentVal = counter === 0 ? 0 : childCount + 1;
    setChildCount(currentVal);
  }, [counter]);
  return (
    <>
      <button onClick={_handleChildClick}>Child Button</button>
      <p>{childCount}</p>
    </>
  );
};

export default Child;
