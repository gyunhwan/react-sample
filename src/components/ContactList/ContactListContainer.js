import React, { PureComponent } from "react";
import ContactListPresenter from "./ContactListPresenter";

class ContactListContainer extends PureComponent {
  componentDidMount() {
    this.getContactList();
  }

  getContactList = () => {
    const { getContactList } = this.props;
    getContactList();
  };

  render() {
    return <ContactListPresenter {...this.props} />;
  }
}

export default ContactListContainer;
