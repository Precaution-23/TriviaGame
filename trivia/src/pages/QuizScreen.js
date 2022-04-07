import React from "react";
import QuestionCard from "../components/QuestionCard";
import MessageOutput1 from "../components/ScreeMessages/MessageOutput1";

function QuizScreen() {
  return (
    <div>
        <div className="text-center mb-5">
        <MessageOutput1 message="Category : Science" />
        </div>

        <div className="flex justify-center">
            <QuestionCard message="Which singer starred in the 2000 romantic comedy. The Next Best Thing? Which singer starred in the 2000 romantic comedy. The Next Best Thing?" />
        </div>
      
      
    </div>
  );
}

export default QuizScreen;
