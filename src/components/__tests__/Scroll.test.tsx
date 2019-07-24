import React from "react";
import { render } from "@testing-library/react";
import Scroll from "../Scroll";

test("render children without crash", () => {
  const mltr = "Sleeping Child";
  const { getByText } = render(<Scroll>{mltr}</Scroll>);
  expect(getByText(/sleeping child/i)).toBeDefined();
});
