import React from "react";
import MessageOutput3 from "./ScreeMessages/MessageOutput3";

function QuestionCard({ message }) {
  return (
    <div className="question-card">
      <div className="quiz-question">
        <span className="font-bold">Question:</span> {message}
      </div>

      <div className="flex justify-end">
        <div>
          <button className="boolean-buttons bg-cyan-500">True</button>
        </div>
        <div>
          <button className="boolean-buttons bg-slate-500">False</button>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <MessageOutput3 message="2/15" />
      </div>
    </div>
  );
}

export default QuestionCard;
