import { connect } from "react-redux";
import SearchBoxContainer from "./SearchBoxContainer";
import { actionCreators as contactActions } from "../../redux/modules/contact";

const mapStateToProps = (state) => {
  const {
    contact: { searchKeyword },
  } = state;

  return {
    searchKeyword,
  };
};

const mapDispatchToProps = (dispatch) => {
  const setSearchKeyword = (keyword) =>
    dispatch(contactActions.setSearchKeyword(keyword));

  return {
    setSearchKeyword,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
