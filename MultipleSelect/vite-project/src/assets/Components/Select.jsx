import { useState } from "react";
import Data from "./Data/Data";
import DisplayList from "./DisplayList";
const Select = () => {
  const [list, setList] = useState(Data);
  const [displayList, setDisplayList] = useState([]); //

  const [borderColor, setBorderColor] = useState("");

  const _handleInputClick = (item) => {
    //onCityOptionClick
    console.log("ln19", item);
    // for (let i = 0; i < displayList.length; i++) {
    //   if (item.id === displayList[i].id) {
    //     return;
    //   }
    // }
    setList(
      list.filter((elm) => {
        if (item.id !== elm.id) {
          return elm;
        }
      })
    );

    setDisplayList([item, ...displayList]); //previous state
  };
  console.log(borderColor);
  const _handleDelete = (id) => {
    let currentElm = {};
    const filteredList = displayList.filter((item) => {
      if (item.id != id) {
        return item;
      }
      currentElm = item;
    });
    setDisplayList(filteredList);
    setList((prevState) => {
      return [...prevState, currentElm];
    });
  };
  return (
    <>
      <div
        style={{
          height: "30px",
          width: "500px",
          backgroundColor: "lightcoral",
          border: borderColor ? borderColor : "",
        }}
      >
        <DisplayList data={displayList} func={_handleDelete}></DisplayList>
      </div>
      <div>
        {list.map((item) => {
          return (
            <p key={item.id} onClick={() => _handleInputClick(item)}>
              {item.name}
            </p>
          );
        })}
      </div>
    </>
  );
};
export default Select;
