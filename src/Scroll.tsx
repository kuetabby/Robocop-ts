import React from "react";

const Scroll = (props: any) => {
  return (
    <div
      style={{ overflowY: "scroll", border: "solid black 5px", height: "800" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
