import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FastClick = () => {
  const [numbers, setNumbers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetchGame();
  }, []);

  // 마우스 클릭 함수
  const mouseClick = (number) => {
    if (!gameOver && number === score + 1) {
      setScore(score + 1);
      if (score + 1 === 50) {
        setGameOver(true);
      }
    }
  };

  // 게임 초기화
  const fetchGame = () => {
    // 새로운 번호를 생성하는 데 번호가 랜덤으로 자리에 들어갈 수 있도록 설정
    // Array.from({length:10}, (_, index) => index + 1)
    // === 길이가 10인 배열을 만들고 각 숫자가 0부터 시작하기 때문에 1부터 시작할 수 있도록 +1 해준 것
    // .sort(() => Math.random() === sort가 정렬을 할 때 랜덤으로 정렬할 수 있도록 Math.random()을 이용
    // - 0.5 === sort를 이용할 때 보통 0부터 정렬되기 때문에 0이 아니라 -0.5를 해주어 무작위로 정렬이 될 수 있도록 해주는 것
    const newNumbers = Array.from({ length: 50 }, (_, index) => index + 1).sort(
      () => Math.random() - 0.5
    ); // 1부터 시작해야하기 때문에 +1 안그러면 인덱스틑 0부터 시작
    // 게임 재시작할 경우 새로운 번호 생성 점수 0으로 초기화 게임 오버를 아님으로 설정
    setNumbers(newNumbers);
    setScore(0);
    setGameOver(false);
  };
  return (
    <Container className="mt-5">
      <h1 className="text-center">1부터 10까지 숫자 맞추기</h1>
      {gameOver ? (
        <div className="text-center">
          <Alert variant="success">
            <p className="lead text-center">Finish! Score : {score}</p>{" "}
            {/* 글자를 조화롭게 나오게 해줌 */}
            <Button variant="primary" size="lg" block onClick={fetchGame}>
              Restart
            </Button>
          </Alert>
        </div>
      ) : (
        <div>
          <p className="lead text-center">Score : {score} </p>
          <Row className="justify-content-center">
            {numbers.map((number) => (
              <Col key={number} xs={2} className="mb-3">
                <Button
                  variant="dark"
                  size="lg"
                  block
                  onClick={() => mouseClick(number)}
                >
                  {number}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default FastClick;
