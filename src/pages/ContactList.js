import React from "react";
import SearchBox from "../components/SearchBox";
import Contacts from "../components/ContactList";

const ContactList = (props) => {
  return (
    <div>
      <SearchBox />
      <Contacts />
    </div>
  );
};

export default ContactList;
