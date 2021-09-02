import React, { PureComponent } from "react";
import ContactEditPresenter from "./ContactEditPresenter";

class ContactEditContainer extends PureComponent {
  handleEdit = ({ target: { value, name } }) => {
    const { setEdit } = this.props;
    setEdit(name, value);
  };
  handleCreate = async () => {
    const result = await this.props.createContact(this.props.edit);
    console.log(result);
  };
  render() {
    return (
      <ContactEditPresenter
        {...this.props}
        handleEdit={this.handleEdit}
        handleCreate={this.handleCreate}
      ></ContactEditPresenter>
    );
  }
}

export default ContactEditContainer;
