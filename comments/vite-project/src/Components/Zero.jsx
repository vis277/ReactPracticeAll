import { useState } from "react";
import One from "./One";
import Three from "./Three";
import Two from "./Two";
import "./page.css";
const Zero = () => {
  const [page, setPage] = useState(1);

  const _handleClick = (e) => {
    if (page === 3) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };
  const _handleClickPrevious = () => {
    if (page === 1) {
      setPage(3);
    } else {
      setPage(page - 1);
    }
  };
  return (
    <>
      <div className="pageZero">
        <button id="prev" onClick={_handleClickPrevious}>
          previous
        </button>
        {page === 1 && <One></One>}
        {page === 2 && <Two></Two>}
        {page === 3 && <Three></Three>}
        <button id="next" onClick={_handleClick}>
          next
        </button>
      </div>
    </>
  );
};

export default Zero;
