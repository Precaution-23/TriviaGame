import React from "react";
import CorrectIcon from "./Icons/CorrectIcon";
import WrongIcon from "./Icons/WrongIcon";

function ResultsCard({message}) {
  return (
    <div className="bg-slate-300 p-5 w-[50%] rounded-md">
      <div className="flex justify-between">
          <div>{message}</div>
          <div><WrongIcon /></div>
            
      </div>
    </div>
  );
}

export default ResultsCard;
