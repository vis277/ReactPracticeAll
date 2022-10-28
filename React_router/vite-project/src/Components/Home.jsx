import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>I am from Home</p>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/Contact">Contact</Link>
    </>
  );
};

export default Home;
