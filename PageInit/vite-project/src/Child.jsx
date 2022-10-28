const Child = ({ data }) => {
  const _handleClick = () => {
    data("Hello Vishal");
  };
  return (
    <>
      <button onClick={_handleClick}> Child Click</button>
    </>
  );
};
export default Child;
