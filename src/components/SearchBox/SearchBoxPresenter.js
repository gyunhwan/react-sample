import React from "react";

const SearchBoxPresenter = (props) => {
  const { searchKeyword, handleChangeSearchKeyword } = props;

  return (
    <div>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleChangeSearchKeyword}
      />
    </div>
  );
};

export default SearchBoxPresenter;
