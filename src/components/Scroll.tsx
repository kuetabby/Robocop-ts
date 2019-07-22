import React from "react";

type Props = {
  children?: JSX.Element;
};

const Scroll = (props: Props) => {
  return (
    <div
      style={{ overflowY: "scroll", border: "solid black 5px", height: "800" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
