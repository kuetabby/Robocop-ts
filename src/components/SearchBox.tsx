import React from "react";

interface SearchBoxProps {
  searchChange(e: React.SyntheticEvent<HTMLInputElement>): void;
  values: string;
}

const SearchBox = ({ searchChange, values }: SearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        type="search"
        data-testid="search"
        placeholder="Search Robot"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
        value={values}
      />
    </div>
  );
};

export default SearchBox;
