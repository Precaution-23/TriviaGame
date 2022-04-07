import React from "react";
import MessageOutput1 from "../components/ScreeMessages/MessageOutput1";
import ResultsCard from "../components/ResultsCard";

function ResultsScreen() {
  return (
    <div>
      <div className="text-center mb-5">
        <MessageOutput1 message="You Scored 6/15" />
      </div>

      <div className="flex justify-center">
        <ResultsCard message="Which singer starred in the 2000 romantic comedy. The Next Best Thing? Which singer starred in the 2000 romantic comedy. The Next Best Thing?" />
      </div>
    </div>
  );
}

export default ResultsScreen;
