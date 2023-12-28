// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Movies from "./component/Movie/Movies";
import TodoList from "./component/Todo/TodoList";
import TodoNoCss from "./component/Todo/TodoNoCss";
import Todo from "./App";
import CreatePage from "./component/CreatePage";
import "./App.css";
import NumberGuessingGameLimit from "./component/Game/NumberGuessingGameLimit";
import Quiz from "./component/Game/Quiz";
import ListPage from "./component/ListPage";

// indexJS가 최상위 js이기 때문에 경로문제로 인해 제일 위에도 bootstrap을 넣어준다.
function App() {
  const [actions, setActions] = useState([]);
  const addAction = (newAction) => {
    setActions([...actions, newAction]);
  };
  const deleteAction = (id) => {
    setActions(actions.filter((action) => actions.id !== id));
  };

  return {
    /*
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
            <Route path="/Movies" element={<Movies />} />
            <Route
              path="/Todo"
              element={
                <ListPage actions={actions} deleteAction={deleteAction} />
              }
            />
            <Route
              path="/TodoCreate"
              element={<CreatePage action={addAction} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    */
  };
}
export default App;
