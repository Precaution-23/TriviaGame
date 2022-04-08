import React, { useState, useEffect } from "react";
import MessageOutput3 from "./ScreeMessages/MessageOutput3";
import MessageOutput1 from "./ScreeMessages/MessageOutput1";
import { useNavigate } from "react-router-dom"

function QuestionCard() {
  let navigate = useNavigate();
  // declaring of states
  const [trueButton, settrueButton] = useState("True");
  const [falseButton, setfalseButton] = useState("False");
  const [userChoice, setuserChoice] = useState([])
  const [quizQuestions, setQuizQuestions] = useState(JSON.parse(localStorage.getItem("arrayQuizClone")))
  const [questionNumber, setquestionNumber] = useState(1)
  const [question, setquestion] = useState({})


  // function to fetch one question at a time
  const getCurrentQuestion = (questionNum = 1) => {
    const questionFind = quizQuestions.find(singleQuestion => singleQuestion.id === questionNum)
    setquestion(questionFind)
  }

    //  // check if quiz is empty and direct the to home
     if(quizQuestions.length === 0) navigate('/')

  // function to save answers to question
  const registerUserChoice = (questionId, choice) => {

    // fetching a signle quiz to update it with the user answer
    let newArrayClone = quizQuestions.find((quiz) => quiz.id === questionId)

        //declaring an array to hold answers choosen by user
        let updatedChoices = [
          ...userChoice,
          {
            id: newArrayClone.id,
            category: newArrayClone.category,
            correct_answer: newArrayClone.correct_answer,
            difficulty: newArrayClone.difficulty,
            question: newArrayClone.question,
            userChoice: choice
          }
        ];

    // updating the user choice state
    setuserChoice(updatedChoices)

    localStorage.setItem("arrayQuizClone", JSON.stringify(updatedChoices))

     // navigate to the results page after last question is answered
     if(question.id === 15)  navigate('/results')

    //updating the state of the question number
    setquestionNumber(questionNumber + 1)

  };

  useEffect(() => {
    getCurrentQuestion(questionNumber)
  }, [questionNumber])
  

  return (
    <div className="question-card">
          <div key={question?.id}>
            <div className="text-center mb-5">
              <MessageOutput1 message={question?.category} />
            </div>
            <div className="quiz-question">
              <span className="font-bold">Question:</span> {question?.question}
            </div>

            <div className="flex justify-end">
              <div>
                <button
                  className="boolean-buttons bg-cyan-500"
                  onClick={() => {
                    registerUserChoice(question?.id, trueButton);
                  }}
                >
                  {trueButton}
                </button>
              </div>
              <div>
                <button
                  className="boolean-buttons bg-slate-500"
                  onClick={() => {
                    registerUserChoice(question?.id, falseButton);
                  }}
                >
                  {falseButton}
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <MessageOutput3 message={question?.id + "/15"} />
            </div>
          </div>
    </div>
  );
}

export default QuestionCard;
