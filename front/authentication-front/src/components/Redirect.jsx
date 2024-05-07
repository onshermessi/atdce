import { useEffect } from "react";

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.href = "/dashboard";
  }, [to]);

  return null;
};

export default Redirect;
