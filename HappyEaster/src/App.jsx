import "./styles/quiz.css";
import { useQuiz } from "./hooks/useQuiz";
import Question from "./components/Questions";
import Result from "./components/Result";

function App() {
const {
  currentQuestion, 
  score,
  isFinished,
  totalQuestions,
  handleAnswer,
  restart 
}  = useQuiz();

  return (
   <div className="quiz-container">
    <h1>🐣 PåskQuiz 🐣</h1>
    {isFinished} ? (
      <Result score={score} total={totalQuestions} onRestart={restart} />
    ) : (
      <Question 
      question={currentQuestion.question}
      options={currentQuestion.options}
      onAnswer={handleAnswer}
      />
    )
   </div>
  );
}

export default App;
