import { connect } from "react-redux";
import ContactListContainer from "./ContactListContainer";
import { actionCreators as contactActions } from "../../redux/modules/contact";

const mapStateToProps = (state) => {
  const {
    contact: { contactList, searchKeyword },
  } = state;

  return {
    contactList,
    searchKeyword,
  };
};

const mapDispatchToProps = (dispatch) => {
  const getContactList = async () =>
    dispatch(await contactActions.getContactList());

  return {
    getContactList,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListContainer);
