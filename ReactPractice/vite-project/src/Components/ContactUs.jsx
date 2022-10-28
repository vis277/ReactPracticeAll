import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [param, setParam] = useSearchParams();
  const query = param.get("q");
  return (
    <>
      <p>I am from Contact</p>
      {query}
    </>
  );
};

export default Contact;
