import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";

const Home = () => {
  useEffect(() => {
    console.log("Home mounted");
    return () => {
      console.log("Home unmounted");
    };
  }, []);
  return (
    <>
      <p>I am in home Page</p>
      <br></br>
      <Link to={"/about"}>About</Link>
      <br></br>
      <Link to={"/ContactUs"}>ContactUs</Link>
    </>
  );
};

export default Home;
