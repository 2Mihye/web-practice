import React, { useState } from "react";

const CreatePage = ({ addAction }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  // 추가했을 때 작동할 버튼에 대한 함수 생성
  const handleSubmit = (e) => {
    e.preventDefault();

    // 추가한 내용 넣어주기
    const newAction = { id, title, genre, date };
    addAction(newAction);

    // 내용 넣어주고나서 초기화 시키고 싶다면 초기화해주는 set 작성
    setId(""); // Id값 초기화
    setTitle(""); // 이런식으로 초기화를 시키지만 필수는 아님
    setGenre("");
    setDate("");
  };

  return (
    <div>
      <h2>Create Page</h2>
      <form onSubmit={handleSubmit}>
        <label>ID : </label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <label>Title : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Content : </label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label>Date : </label>
        <input
          type="text"
          value={date}
          onChange={(e) => date(e.target.value)}
        />
        <br />
        <button type="submit">ADD Todo</button>
      </form>
    </div>
  );
};
export default CreatePage;
