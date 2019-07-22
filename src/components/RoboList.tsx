import React from "react";
import Robo from "./Robo";

interface robotProps {
  robots: Array<{ id: number; name: string; username: string; email: string }>;
}

const RoboList = ({ robots }: robotProps) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Robo
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default RoboList;
