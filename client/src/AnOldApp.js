import React, { useEffect, useState } from "react";
import axios from "axios";

// indexJS가 최상위 js이기 때문에 경로문제로 인해 제일 위에도 bootstrap을 넣어준다.
function AppCafe() {
  const [cafes, setCafes] = useState([]);
  const [newCafe, setNewCafe] = useState({ name: "", price: "" }); //json 형식으로 ''빈 공간 만들어주고 나중에 값을 넣어주겠다 처리

  const addCafe = () => {
    axios
      .post("http://localhost:5003/api/cafe", newCafe)
      .then((response) => {
        setCafes(response.data);
        setNewCafe({ name: "", price: "" }); // DB에 저장 후 초기화 해주는 것
      })
      .catch((error) => console.error("에러가 발생했습니다.", error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5003/api/cafe")
      .then((response) => setCafes(response.data))
      .catch((error) => console.error("에러입니다.", error));
  }, []);

  return (
    <div>
      <h1>Cafe Menu</h1>
      {/* key = {cafe[0]}  = key = {cafe.ID}*/}
      {/* {cafe[1]}  = cafe.NAME*/}
      {/* {cafe[2]}  = cafe.PRICE*/}
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.ID}>
            {cafe.NAME} : {cafe.PRICE} 원
          </li>
        ))}
      </ul>
      <h2>새로운 메뉴 추가</h2>
      <label>메뉴 이름 : </label>
      <input
        type="text"
        value={newCafe.name}
        onChange={(e) => setNewCafe({ ...newCafe, name: e.target.value })}
      />
      <label>가격 : </label>
      <input
        type="text"
        value={newCafe.price}
        onChange={(e) => setNewCafe({ ...newCafe, price: e.target.value })}
      />
      <button onClick={addCafe}>메뉴 추가</button>
    </div>
  );
}
export default AppCafe;
