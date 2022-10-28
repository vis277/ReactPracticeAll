import React from "react";

const DisplayFav = ({ data }) => {
  console.log("ln4", data);
  return (
    <>
      <ul>
        {data.map(() => {
          return <li>{data}</li>;
        })}
      </ul>
    </>
  );
};
export default DisplayFav;
