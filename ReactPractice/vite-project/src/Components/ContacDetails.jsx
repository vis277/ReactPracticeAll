import { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { data } from "../App";
const ContactDetails = () => {
  const dataName = useContext(data);
  console.log(dataName);
  const [param, setParam] = useSearchParams();
  const { id } = useParams();
  const query = param.get("q");
  return (
    <>
      <p>I am from ContactDetails</p>
      {query}
      {id}
      {dataName}
    </>
  );
};

export default ContactDetails;
