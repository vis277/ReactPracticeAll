import { Link, useParams, useSearchParams } from "react-router-dom";

const AboutDetails = () => {
  let { id } = useParams();
  const [searcParam] = useSearchParams();
  console.log(searcParam.get("q"));
  console.log(id);
  return (
    <>
      <p>I am from About Details</p>
      <Link to="/about">AboutDetails</Link>
      <br></br>
      <Link to="/Contact">Contact</Link>
      <Link to="/Contact?q=10">Contact 10</Link>
    </>
  );
};

export default AboutDetails;
