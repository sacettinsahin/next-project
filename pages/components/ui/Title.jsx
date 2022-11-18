import React from "react";

const Title = ({ children, addClass }) => {
  return <div className={`${addClass}`}>{children}</div>;
};

export default Title;
