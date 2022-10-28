import { useRef, useState } from "react";

const InputComp = () => {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const handleClick = () => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push({ id: i, num: "" });
    }
    setData([...arr]);
  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    for (let i = 0; i < data.length; i++) {
      if (e.target.name == data[i].id) {
        console.log(data[i]);
        data[i].num = e.target.value;
      }
    }
    setData([...data]);
  };
  console.log("ln22", data);

  const showRef = () => {
    if (ref.current.value === "") {
      console.log("ln28 inside", ref.current.value);
      ref.current.style.backgroundColor = "red";
      document.title = "Vishal";
    }
    console.log("ln27", ref.current.value);
  };
  return (
    <>
      <p>Enter the number of component</p>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={handleClick}>Submit</button>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <input type="number" name={item.id} onChange={handleChange}></input>
          </div>
        );
      })}
      <p>
        Add :
        {data.length
          ? data.reduce((acc, curr) => {
              console.log("ln45", curr.num);
              return acc + +curr.num;
            }, 0)
          : ""}
      </p>
    </>
  );
};

export default InputComp;
