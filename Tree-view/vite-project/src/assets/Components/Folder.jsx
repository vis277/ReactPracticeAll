import { useState } from "react";

const Folder = ({ data }) => {
  console.log(data);
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <>
        <span onClick={() => setExpand(!expand)}>{data.name}</span>
        <br />
        <div
          style={{
            marginLeft: "105px",

            display: expand ? "block" : "none",
          }}
        >
          {data.items.map((item) => {
            return (
              <div>
                {<Folder data={item}></Folder>}
                <br></br>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <>{data.name}</>;
  }
};
export default Folder;
