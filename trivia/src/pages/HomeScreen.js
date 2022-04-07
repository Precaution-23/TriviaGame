import React from "react";
import { Link } from "react-router-dom";
import MessageOutput1 from "../components/ScreeMessages/MessageOutput1";
import MessageOutput2 from "../components/ScreeMessages/MessageOutput2";
import MessageOutput3 from "../components/ScreeMessages/MessageOutput3";

function HomeScreen() {
  return (
    <div className="text-center">
      <MessageOutput1 message="Welcome To This Game." />
      <MessageOutput2 message="You Will Be Presented With 15 True Or False Questions." />
      <MessageOutput3 message="Can You Score 100%?" />

      <div>
        <Link to="/quiz">
          <button className="begin-button">BEGIN</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
