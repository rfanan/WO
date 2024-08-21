import React from "react";

interface Props {
  children?: any;
  className?: any;
}

const ButtonTest = (props: Props) => {
  let defaultValue = {
    className: "bg-blue-400",
  };

  let className = props.className + " " + defaultValue.className;

  return <button className={className}>{props.children}</button>;
};

export default ButtonTest;
