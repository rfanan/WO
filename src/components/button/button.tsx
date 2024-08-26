import clsx from "clsx";
import React from "react";

interface Props {
  children?: any;
  className?: any;
  onClick?: any;
  type?: any;
}

const Button = (props: Props) => {
  let defaultValue = {
    className: "bg-[#CCDBB1] rounded-full",
  };

  let className = props.className + " " + defaultValue.className;

  return (
    <button
      {...props}
      className={clsx(
        className,
        "[&>svg]:h-5 [&>svg]:w-5 gap-2 px-3 py-2 flex items-center"
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
