import React from "react";

const ContactEditPresenter = (props) => {
  const { edit, handleEdit, handleCreate } = props;

  return edit?.id ? (
    <>
      <label>이름</label>
      <input name="name" value={edit.value}></input>
    </>
  ) : (
    <>
      <label value="name" onChange={handleEdit}>
        이름
      </label>
      <input name="name" value={edit.name} onChange={handleEdit}></input>
      <br></br>
      <label value="email">이메일</label>
      <input name="email" value={edit.email} onChange={handleEdit}></input>
      <br></br>
      <label value="phoneNumber">전화번호</label>
      <input
        name="phoneNumber"
        value={edit.phoneNumber}
        onChange={handleEdit}
      ></input>
      <br></br>
      <label value="age">나이</label>
      <input
        type="number"
        name="age"
        value={edit.age}
        onChange={handleEdit}
      ></input>
      <br></br>
      <label value="description">설명</label>
      <input
        name="description"
        value={edit.description}
        onChange={handleEdit}
      ></input>
      <br></br>
      <button onClick={handleCreate}>제출</button>
    </>
  );
};

export default ContactEditPresenter;
