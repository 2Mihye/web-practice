import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";

const Home = () => {
  return (
    <Container>
      <Row className="text-center mb-5 border-none">
        <Card className="mb-5">
          <Card.Body>
            <h1 className="card-title">Mihye's Website</h1>
            <p className="card-text">
              {" "}
              React와 Bootstrap을 활용한 Mihye's WebSite
            </p>
          </Card.Body>
        </Card>
        <div className="text-center mb-5">
          <img
            className="img-fluid rounded-circle"
            src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F6479216%2Fattach%2F0c414f75df714ecc80ba444af45f8722"
          />
        </div>
      </Row>
      <Row>
        <Emoji />
      </Row>
      <Row>
        <div className="col-3 text-center">
          <h2>Movies</h2>
          <p>여러 영화의 포스터와 평점 !</p>
          <Link to="/Movies">
            <Button variant="primary">Movies</Button>
          </Link>
        </div>
        <div className="col-3 text-center">
          <h2>To Do</h2>
          <p>할 일을 기록하고 갓생살기 !</p>
          <Link to="/TodoList">
            <Button variant="warning">Todo List</Button>
          </Link>
        </div>
        <div className="col-3 text-center">
          <h2>Blog</h2>
          <p>사람은 추억을 먹고산다. 일상 기록하기 :3</p>
          <Link to="/Blog">
            <Button variant="success">My Blog</Button>
          </Link>
        </div>
        <div className="col-3 text-center">
          <h2>Games</h2>
          <p>나름 중독적인 번호 맞추기 게임 한 판 !</p>
          <Link to="/NumberGuessingGameLimit">
            <Button variant="danger">Game</Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
};
export default Home;
