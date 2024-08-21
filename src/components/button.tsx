import React from "react";

export default function Button({ children }: any) {
  const { className = "bg-red", type = "submit" } = children;

  return (
    <>
      <div className="text-red-400">halo ini dari button Component</div>
      <button
        {...children}
        type={type}
        className="bg-blue-400 px-5 rounded py-5"
      >
        {children}
      </button>
    </>
  );
}
