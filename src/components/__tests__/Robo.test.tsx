import React from "react";
import { render } from "@testing-library/react";
import Robo from "../Robo";

test("robot without crash", () => {
  const props = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz"
  };
  const { getByText, getByAltText } = render(<Robo {...props} />);

  expect(getByAltText(/robots/i)).toBeTruthy();
  expect(getByText(/leanne graham/i)).toBeDefined();
  expect(getByText(/Sincere@april.biz/i)).toBeDefined();
});
