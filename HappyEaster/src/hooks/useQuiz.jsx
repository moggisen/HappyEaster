import { useState } from "react";
import questions from "../data/questions";

export const useQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selected) => {
    if (selected === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return {
    currentQuestion,
    currentIndex,
    score,
    isFinished,
    totalQuestions: questions.length,
    handleAnswer,
    restart,
  };
};
