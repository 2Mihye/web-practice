// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cafes, setCafes] = useState([]);
  const [newCafe, setNewCafe] = useState({ name: "", price: "" });

  useEffect(() => {
    const timestamp = new Date().getTime();
    axios
      .get(`http://localhost:5003/api/cafes?timestamp=${timestamp}`)
      .then((response) => {
        console.log("Cafes Data:", response.data);
        setCafes(response.data);
      })
      .catch((error) => console.error("에러입니다.", error));
  }, []);

  const addCafe = () => {
    axios
      .post("http://localhost:5003/api/cafes", newCafe)
      .then(() => {
        // 동일한 값이 들어가서 전달하는게 잘못될 경우 값에 혼선이 올 수 있음.
        // 하여 업데이트 시간을 넣어서 localstorage에 넣어줄 때 처럼 임의로 임시 파일에 시간을 넣어서 값 문제가 없도록 해준 것
        const timestamp = new Date().getTime();
        axios
          .get(`http://localhost:5003/api/cafes?timestamp=${timestamp}`)
          .then((response) => {
            console.log("Cafes Data after addition:", response.data);
            setCafes(response.data);
            setNewCafe({ name: "", price: "" });
          })
          .catch((error) => console.error("에러입니다.", error));
      })
      .catch((error) => console.error("에러입니다.", error));
  };

  return (
    <div>
      <h1>카페 리스트</h1>

      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.ID}>
            {cafe.NAME} - {cafe.PRICE}원
          </li>
        ))}
      </ul>

      <h2>새로운 메뉴 추가</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={newCafe.name}
          onChange={(e) => setNewCafe({ ...newCafe, name: e.target.value })}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={newCafe.price}
          onChange={(e) => setNewCafe({ ...newCafe, price: e.target.value })}
        />
      </div>
      <button onClick={addCafe}>추가하기</button>
    </div>
  );
}

export default App;
