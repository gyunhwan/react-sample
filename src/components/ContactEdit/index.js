import { connect } from "react-redux";
import { actionCreators } from "../../redux/modules/contact";
import ContactEditContainer from "./ContactEditContainer";

const mapStateToProps = (state) => {
  const {
    contact: { edit },
  } = state;
  return {
    edit,
  };
};

const mapDispatchToProps = (dispatch) => {
  const createContact = async (contact) =>
    dispatch(await actionCreators.createContact(contact));
  const setEdit = (name, value) => {
    dispatch(actionCreators.setEdit(name, value));
  };
  // const modifyContact = async (contact) => {
  //   dispatch(await actionCreators.modifyContact(contact));
  // };
  return {
    createContact,
    setEdit,
    // modifyContact,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactEditContainer);
