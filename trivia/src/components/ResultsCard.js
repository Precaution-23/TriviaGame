import React from "react";
import CorrectIcon from "./Icons/CorrectIcon";
import WrongIcon from "./Icons/WrongIcon";

function ResultsCard({message}) {
  return (
    <div className="results-card">
      <div className="flex justify-between">
          <div className="results-message">{message}</div>
          <div><CorrectIcon /></div>  
      </div>
    </div>
  );
}

export default ResultsCard;
