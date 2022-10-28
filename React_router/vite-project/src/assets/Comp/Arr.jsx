import { useState } from "react";

const Arr = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20,
  ];
  const [count, SetCOunt] = useState(4);
  const [visible, setVisible] = useState(true);
  const _handleChange = () => {
    setVisible(false);
    SetCOunt(arr.length);
  };
  return (
    <>
      {arr.map((item, index) => {
        return (
          <div style={{ display: index < count ? "block" : "none" }}>
            {item}
          </div>
        );
      })}
      <div
        style={{ display: visible ? "block" : "none" }}
        onClick={_handleChange}
      >
        +{arr.length - count}
      </div>
    </>
  );
};
export default Arr;
