import { useState } from "react";
import DisplayComments from "./DisplayComments";
import { v4 as uuidv4 } from "uuid";
const Comments = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const _handleClick = () => {
    const payLoad = {
      id: uuidv4(),
      text: input,
    };
    setData([...data, payLoad]);
    setInput("");
  };

  const _handleComments = (item) => {};
  return (
    <>
      <p>Input your comments</p>
      <input
        type="text"
        placeholder="Enter your comment"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={_handleClick}>Post comment</button>
      {data.map((item) => {
        return (
          <p key={item.id}>
            {item.text}
            <button onClick={() => _handleComments(item)}>reply</button>
          </p>
        );
      })}
    </>
  );
};

export default Comments;
