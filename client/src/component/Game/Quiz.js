import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz = () => {
  // Java 퀴즈를 10개 만들어보기
  const questions = [
    {
      id: 1,
      question: "React는 어떤 라이브러리인가요?",
      options: [
        "UI 라이브러리",
        "서버 사이드 렌더링 라이브러리",
        "데이터베이스 라이브러리",
        "모두",
      ],
      correctAnswer: "UI 라이브러리",
    },
    {
      id: 2,
      question: "JSX는 무엇인가요?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Syntax",
        "JavaScript eXtension",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      id: 3,
      question: "React Hook에서 상태를 어떻게 관리하나요?",
      options: ["useState", "useEffect", "useContext", "모두"],
      correctAnswer: "모두",
    },
    {
      id: 4,
      question: "React에서 컴포넌트 간의 통신을 위해 사용되는 속성은?",
      options: ["state", "props", "context", "event"],
      correctAnswer: "props",
    },
    {
      id: 5,
      question: "React에서 라우팅을 구현하기 위한 라이브러리는 무엇인가요?",
      options: [
        "React Router",
        "React Navigation",
        "React Route",
        "Routing React",
      ],
      correctAnswer: "React Router",
    },
    {
      id: 6,
      question: "React에서 Redux를 사용하기 위한 라이브러리는 무엇인가요?",
      options: ["react-redux", "redux-thunk", "redux-saga", "redux"],
      correctAnswer: "react-redux",
    },
    {
      id: 7,
      question:
        "React 컴포넌트의 생명주기 메서드 중 마운트 단계에서 호출되는 메서드는?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "render",
      ],
      correctAnswer: "componentDidMount",
    },
    {
      id: 8,
      question: "미혜가 키웠던 강아지들의 이름은?",
      options: ["다롱", "뽀롱", "초롱", "아롱"],
      correctAnswer: "다롱",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // 프로그래스바가 100% 되는 값을 넣어주는 함수 생성
  /* currentQuestion : 현재 사용자가 답한 질문의 번호를 나타내는 상태
    questions.length : 전체 질문의 갯수
    ex) currentQuestions 이 1이고, questions.length가 7이면 progress는 (1/7) * 100 으로 계산되어 약 14.29%가 됨. 15.29%는 사용자가 퀴즈를 14.29% 완료했음을 보여줄 수 있음.
  */
  const progress = (currentQuestion / questions.length) * 100;

  const AnswerButtonClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // 다시 시작하는 버튼을 누르면 점수와 퀴즈 상태 모두 처음으로 돌아가기
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className="container mt-5">
      {showScore ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
              점수 : {score} / {questions.length}
            </h2>
            <button className="btn btn-danger" onClick={restartQuiz}>
              다시시작
            </button>
          </div>
        </div>
      ) : (
        // card, card-body, card-title
        // toFixed는 소수점 2자리까지만 허용해준다는 뜻
        <div>
          <ProgressBar
            variant="warning"
            now={progress}
            style={{ height: "20px", borderRadius: "10px" }}
            label={`${progress.toFixed(2)} %`}
          />
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">질문 {currentQuestion + 1}</h2>
              <p className="card-text">{questions[currentQuestion].question}</p>
            </div>
          </div>
          <div>
            {questions[currentQuestion].options.map((option) => (
              <button
                className="btn btn-outline-danger mb-2"
                key={option}
                onClick={() => AnswerButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
