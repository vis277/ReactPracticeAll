import { useEffect } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    console.log("ContactUs mounted");
    return () => {
      console.log("ContactUs unmounted");
    };
  }, []);
  return (
    <>
      <p>I am in ContactUs Page</p>
      <Link to={"/"}>Home</Link>
      <br></br>
      <Link to={"/about"}>About</Link>
    </>
  );
};

export default ContactUs;
