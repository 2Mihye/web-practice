import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import NumberGuessingGameLimit from "./Game/NumberGuessingGameLimit";
import Home from "./Home";
import Quiz from "./Game/Quiz";

// bg : background 배경색
// expand : 화면 크기가 큰 곳에서는 네비게이션이 펼쳐지고, 모바일에서는 네비게이션이 축소되게 해줌.
// Navbar.Collapse : 화면이 모바일로 작아졌을 때를 대비해서 감싸주는 것
// aria-controls = "basic-navbar-nav" : 네이게이션에서 기본 메뉴를 나타냄
// as={Link} :  추후 App에서 전달받을 Router을 지원해준다는 의미
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      {" "}
      {/* div를 대체하는 녀석 */}
      <Container>
        <Navbar.Brand as={Link} to="/">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle arai-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav.Link as={Link} to={"/"}>
            Home |
          </Nav.Link>
          <Nav.Link as={Link} to={"/Movies"}>
            | Movies |
          </Nav.Link>
          <Nav.Link as={Link} to={"/TodoList"}>
            | Todo List |
          </Nav.Link>
          <Nav.Link as={Link} to={"/WeatherSearch"}>
            | WeatherSearch |
          </Nav.Link>
          <NavDropdown title="|  Games  |" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/NumberGuessingGameLimit">
              Number Guessing Game Limit
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Quiz">
              Quiz
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/FastClick">
              Fast Click
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
