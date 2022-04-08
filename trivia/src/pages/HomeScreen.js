import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import MessageOutput1 from "../components/ScreeMessages/MessageOutput1";
import MessageOutput2 from "../components/ScreeMessages/MessageOutput2";
import MessageOutput3 from "../components/ScreeMessages/MessageOutput3";

function HomeScreen() {
    let navigate = useNavigate();
     // declaring of states
    const [loading, setloading] = useState(false)

    // declaring of an array to store the quizzes
    let arrayQuizClone = []

    // fetching of quiz question
    const getQuizQuestions = async() => {
        try {
            setloading(true)
            const response = await axios.get("https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean")
            arrayQuizClone = response.data.results.map((obj, index) => ({ ...obj, id: index+1, userChoice: null }))
            localStorage.setItem("arrayQuizClone", JSON.stringify(arrayQuizClone))
            setloading(false)
            navigate('/quiz')
        }catch(error) {
            console.log(error)
        }
    }

  return (
    <div className="text-center">
      <MessageOutput1 message="Welcome To This Game." />
      <MessageOutput2 message="You Will Be Presented With 15 True Or False Questions." />
      <MessageOutput3 message="Can You Score 100%?" />

      <div>
          <button className="begin-button" onClick={getQuizQuestions}>
              {
                  loading ? `LOADING..` : `BEGIN`
              }
              
          </button>
      </div>
      
    </div>
  );
}

export default HomeScreen;
