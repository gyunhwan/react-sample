import React, { PureComponent } from "react";
import SearchBoxPresenter from "./SearchBoxPresenter";

class SearchBoxContainer extends PureComponent {
  handleChangeSearchKeyword = (e) => {
    const { setSearchKeyword } = this.props;

    const value = e.target.value;
    setSearchKeyword(value);
  };

  render() {
    return (
      <SearchBoxPresenter
        {...this.props}
        handleChangeSearchKeyword={this.handleChangeSearchKeyword}
      />
    );
  }
}

export default SearchBoxContainer;
