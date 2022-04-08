import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";

function QuizScreen() {
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("arrayQuizClone")))

  return (
    <div>
      <div className="flex justify-center">
        
        <QuestionCard questions={questions} />
      </div>
    </div>
  );
}

export default QuizScreen;
