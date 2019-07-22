import React from "react";

interface SearchBoxProps {
  searchChange(e: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robot"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
