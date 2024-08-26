import React from "react";
import clsx from "clsx";
import { IconPhotoPause } from "@tabler/icons-react";
interface Props {
  children?: any;
  className?: any;
  onClick?: any;
  type?: any;
}

const Button = (props: Props) => {
  let defaultValue = {
    className: "bg-blue-400 hover:bg-blue-300",
  };
  let className = props.className + " " + defaultValue.className;

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={clsx(
        className,
        "[&>svg]:h-5 [&>svg]:w-5 flex gap-1 items-center py-3 px-4 rounded-3xl font-medium"
      )}
    >
      {props.children}
    </button>
  );
};
export default Button;
