import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ className }) => {
  return <Spinner className={className} animation="border" />;
};

export default Loader;
