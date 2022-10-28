const DisplayList = ({ data, func }) => {
  return data.map((item) => {
    return (
      <span style={{ border: "1px solid green", margin: "1px" }} key={item.id}>
        {item.name}
        <button onClick={() => func(item.id)}>"x"</button>
      </span>
    );
  });
};
export default DisplayList;
