import { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Loader from "./Pages/Loader";
import Startscreen from "./Pages/Startscreen";
import Error from "./Pages/Error";
import Question from "./Pages/Queestion";

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUESTION":
      return { ...state, question: action.payload, status: "ready" };
    case "datanotfound":
      return { ...state, status: "error" };
    case "loading":
      return { ...state, status: "loading" };
    case "start":
      return { ...state, status: "activ" }; // Fixed typo here
    default:
      return state;
  }
}

const initialState = {
  question: [],
  status: "",
  index: 0,
};

function App() {
  const [{ status, question, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestion = question.length;

  useEffect(() => {
    dispatch({ type: "loading" });
    axios("http://localhost:8000/questions")
      .then((res) => {
        dispatch({ type: "SET_QUESTION", payload: res.data });
      })
      .catch(() => dispatch({ type: "datanotfound" }));
  }, []);

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <Startscreen dispatch={dispatch} numQuestion={numQuestion} />
      )}
      {status === "activ" && (
        <Question index={index} question={question} /> // Fixed status check
      )}
    </div>
  );
}

export default App;
