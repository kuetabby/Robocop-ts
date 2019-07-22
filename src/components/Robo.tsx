import React from "react";

interface RoboProps {
  id: number;
  name: string;
  email: string;
}

const Robo = ({ id, name, email }: RoboProps) => {
  return (
    <div className="bg-light-blue dib br2 pa3 ma2 grow ">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Robo;
