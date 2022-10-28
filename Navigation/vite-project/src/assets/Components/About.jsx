import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    console.log("About mounted");
    return () => {
      console.log("About unmounted");
    };
  }, []);
  return (
    <>
      <p>I am in About Page</p>
      <Link to={"./"}>Home</Link>
      <br></br>
      <Link to={"/ContactUs"}>ContactUs</Link>
    </>
  );
};

export default About;
