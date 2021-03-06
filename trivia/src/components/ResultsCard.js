import React from "react";
import CorrectIcon from "./Icons/CorrectIcon";
import WrongIcon from "./Icons/WrongIcon";
import parse from 'html-react-parser';

function ResultsCard({ quizResults }) {
  return (
      <div>
        {quizResults.map((quizResult, index) => {
          return (
            <div className="results-card" key={index}>
              <div className="flex justify-between items-center">
                <div className="results-message"> Q: {parse(`${quizResult.question}`)}</div>
                <div>
                  {quizResult.correct_answer === quizResult.userChoice ? (
                    <CorrectIcon />
                  ) : (
                    <WrongIcon />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default ResultsCard;
