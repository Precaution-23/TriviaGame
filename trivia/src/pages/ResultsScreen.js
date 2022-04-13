import React, {useState, useEffect} from "react";
import MessageOutput1 from "../components/ScreeMessages/MessageOutput1";
import ResultsCard from "../components/ResultsCard";

function ResultsScreen() {
  const [quizResults, setQuizResults] = useState(JSON.parse(localStorage.getItem("arrayQuizClone")))

  //function to calculate the number of correct answers
  const getCorrectAnswers = () => {
    const filterAnswers = quizResults.filter(item => item.correct_answer === item.userChoice)
    return filterAnswers.length
  }

  useEffect(() => {
    getCorrectAnswers()
  }, [])
  
  return (
    <div>
      <div className="text-center mb-5">
        <MessageOutput1 message={`You Scored ` + getCorrectAnswers() + "/" + quizResults.length} />
      </div>

      <div className="">
        <ResultsCard quizResults={quizResults}/>
      </div>
    </div>
  );
}

export default ResultsScreen;
