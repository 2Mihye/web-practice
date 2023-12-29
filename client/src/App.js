import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Movies from "./component/Movie/Movies";
import TodoList from "./component/TodoList";
import "./App.css";
import NumberGuessingGameLimit from "./component/Game/NumberGuessingGameLimit";
import Quiz from "./component/Game/Quiz";
import WeatherSearch from "./component/Weather/WeatherSearch";
import ListTodo from "./component/ListTodo";
import FastClick from "./component/Game/FastClick";

// indexJS가 최상위 js이기 때문에 경로문제로 인해 제일 위에도 bootstrap을 넣어준다.
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="conatainer mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route
              path="/NumberGuessingGameLimit"
              element={<NumberGuessingGameLimit />}
            />
            <Route path="/FastClick" element={<FastClick />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/WeatherSearch" element={<WeatherSearch />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
