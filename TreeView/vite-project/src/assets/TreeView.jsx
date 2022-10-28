import { useState } from "react";

const TreeView = ({ Data }) => {
  console.log(Data);
  const [expand, setExpand] = useState(false);
  if (Data.isFolder) {
    return (
      <>
        <span onClick={() => setExpand(!expand)}> {Data.name}</span> <br></br>
        <div style={{ display: expand ? "block" : "none" }}>
          {Data.items.map((item) => {
            return <> {<TreeView Data={item}></TreeView>} </>;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>{Data.name}</p>
      </>
    );
  }
};
export default TreeView;
