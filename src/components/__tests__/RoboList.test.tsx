import React from "react";
import { render } from "@testing-library/react";
import RoboList from "../RoboList";
import { robots } from "../robots";

test("render list robots without crash", () => {
  const { getByText } = render(<RoboList robots={robots} />);

  expect(getByText(/leanne graham/i)).toBeDefined();
  expect(getByText(/Sincere@april.biz/i)).toBeDefined();
});
