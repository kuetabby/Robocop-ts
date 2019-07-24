import React from "react";
import { render } from "@testing-library/react";
import SearchBox from "../SearchBox";

test("search without crash", () => {
  const search = jest.fn(e => e.target.value);
  const value = "lea";
  const { getByDisplayValue } = render(
    <SearchBox searchChange={search} values={value} />
  );

  expect(getByDisplayValue(/lea/i)).toBeDefined();
});
