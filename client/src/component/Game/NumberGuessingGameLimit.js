import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NumberGuessingGame = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 50) + 1; // +1을 붙여주지 않으면 자리값이 0~49까지 되어버림.
  };

  const [targetNumber, setTargetNumber] = useState(randomNumber); // targetNumber에 랜덤으로 생성된 숫자값이 들어갈 수 있도록 설정
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");

  // 횟수제한
  const [attempts, setAttempts] = useState(5);
  // 작성한 숫자 기록
  const [guessHistory, setGuessHistory] = useState([]);

  // 숫자값이 들어올 때마다 숫자값 변경해주는 함수
  const inputChange = (event) => {
    setUserGuess(event.target.value);
  };

  // useEffect를 사용하여 게임 횟수 제한을 둘 예정
  useEffect(() => {
    // 만약 횟수가 끝났다면
    if (attempts === 0) {
      setMessage(`Game Over! 정답은 ${targetNumber} 입니다!`);
      setTargetNumber(randomNumber()); // 게임이 종료되었으므로 숫자를 랜덤으로 다시 생성
      setAttempts(5); // 횟수는 다시 5회로 만들어주고
      setGuessHistory([]); // 사용자가 작성한 기록은 모두 지움
    }
  }, [attempts, targetNumber]);

  // 숫자값 전달
  const inputSubmit = (event) => {
    event.preventDefault(); // 페이지가 다시 로딩되는 것을 방지. 페이지가 자동으로 새로고침 되는 것을 막아주는 역할.

    // 사용자가 입력한 값을 숫자로 변환해주는 역할
    const guess = parseInt(userGuess, 10); // 10진수 : 우리가 흔히 사용하는 0 ~ 9 숫자를 의미

    // NaN = Not a Number
    if (isNaN(guess)) {
      // isNaN : 주어진 값이 숫자가 맞는지 숫자가 아닌지 판별하는 역할.
      setMessage("숫자만 입력이 가능합니다!");
    } else {
      // 사용자가 작성한 숫자값을 기록하는 함수 생성
      const newGuessHistory = [...guessHistory, guess];
      setGuessHistory(newGuessHistory);

      if (guess === targetNumber) {
        setMessage(`정답입니다 ! 정답 숫자는 : ${targetNumber}`);
        // 숫자를 맞췄기 때문에 초기화 작업 진행
        setTargetNumber(randomNumber());
        setAttempts(5);
        setGuessHistory([]);
      } else {
        // 숫자가 틀렸을 때 횟수를 차감하는 함수 작성
        const remainAttempts = attempts - 1;
        setAttempts(remainAttempts);

        if (remainAttempts === 0) {
          setMessage(`Game Over ! 정답은 ${targetNumber} 입니다.`);
          setTargetNumber(randomNumber());
          setAttempts(5);
          setGuessHistory([]);
        } else {
          setMessage(
            guess < targetNumber
              ? "숫자가 정답보다 높습니다."
              : "숫자가 정답보다 낮습니다."
          );
        }
      }
      // input값 알아서 지워질 수 있도록 초기화 설정
      setUserGuess("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center"> 숫자 맞추기 게임 !</h1>
          <p className="card-text text-center">1부터 100 사이 숫자 맞추기</p>
          <form onSubmit={inputSubmit} className="text-center">
            <input
              type="number"
              value={userGuess}
              onChange={inputChange}
              placeholder="숫자를 입력하세요."
              min={1}
              max={100}
              required
            />
            <button type="submit" className="btn btn-warning">
              제출
            </button>
            <br />
          </form>
          <div className="mt-3 text-center">
            <p>남은 기회 : {attempts} </p>
            <p>입력한 숫자 : {guessHistory.join(",")}</p>
          </div>
        </div>
      </div>
      {message && <div>{message}</div>}
    </div>
  );
};
export default NumberGuessingGame;
