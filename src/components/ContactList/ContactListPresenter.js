import React from "react";

const ContactListPresenter = (props) => {
  const { contactList, searchKeyword } = props;

  return (
    <div>
      {/* {contactList.map((contact) => (
        <div key={contact.id}>{contact.name}</div>
      ))} */}
      {contactList
        ?.filter((contact) => {
          for (let value of Object.values(contact)) {
            if (String(value).includes(searchKeyword)) {
              return true;
            }
          }
          return false;
        })
        .map((contact) => (
          <div key={contact.id}>{contact.name}</div>
        ))}
    </div>
  );
};

export default ContactListPresenter;
