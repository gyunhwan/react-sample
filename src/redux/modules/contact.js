import { ContactAPI } from "../../api";

const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
export const EDIT_CONTACT = "EDIT_CONTACT";
const SET_CONTACT_LIST = "SET_CONTACT_LIST";
// const CREATE_CONTACT = "CREATE_CONTACT";
// const SET_LOADING = "SET_LOADING";
const initialState = {
  searchKeyword: "",
  contactList: [],
  edit: {
    id: undefined,
    name: "",
    phoneNumber: "",
    age: 0,
    email: "",
    description: "",
  },
  contactState: "LOADING",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return applySetSearchKeyword(state, action);
    case SET_CONTACT_LIST:
      return applySetContactList(state, action);
    case EDIT_CONTACT:
      return applySetEdit(state, action);
    default:
      return state;
  }
};

const applySetEdit = (state, action) => {
  const {
    edit: { name, value },
  } = action;

  return {
    ...state,
    edit: {
      ...state.edit,
      [name]: value,
    },
  };
};

const setEdit = (name, value) => {
  return {
    type: EDIT_CONTACT,
    edit: { name, value },
  };
};
const setSearchKeyword = (keyword) => {
  return {
    type: SET_SEARCH_KEYWORD,
    keyword,
  };
};

const applySetSearchKeyword = (state, action) => {
  const { keyword } = action;

  return {
    ...state,
    searchKeyword: keyword,
  };
};

const setContactList = (contactList) => {
  return {
    type: SET_CONTACT_LIST,
    contactList,
  };
};

const applySetContactList = (state, action) => {
  const { contactList } = action;

  return {
    ...state,
    contactList,
  };
};

const getContactList = async () => {
  const result = await ContactAPI.getContacts();
  const contactList = await result.json();
  // dispatch(setContactList(contactList));
  return setContactList(contactList);
};
const createContact = async (body) => {
  let temp = {
    name: body.name,
    age: Number(body.age),
    phoneNumber: body.phoneNumber,
    description: body.description,
    email: body.email,
  };
  const result = await ContactAPI.createContact(temp);
  const contact = await result.json();
  return setCreateContact(contact);
};
const setCreateContact = async (newContact) => {
  return { type: "" };
};

export default reducer;

export const actionCreators = {
  setSearchKeyword,
  setContactList,
  getContactList,
  createContact,
  setEdit,
};
