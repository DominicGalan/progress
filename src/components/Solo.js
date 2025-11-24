import React, { useState } from "react";
import "./Solo.css";

const questions = [
  {
    question: "What is the time complexity of a binary search algorithm?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n",
  },
  {
    question: "Which of the following is a primary key in a database?",
    options: ["Unique identifier", "Foreign key", "Index", "Trigger"],
    answer: "Unique identifier",
  },
  {
    question: "What does the acronym CPU stand for?",
    options: ["Central Processing Unit", "Computer Power Unit", "Control Processing Unit", "Central Programming Unit"],
    answer: "Central Processing Unit",
  },
  {
    question: "Which data structure is used for Depth First Search (DFS)?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What is the purpose of a compiler?",
    options: ["To execute code", "To translate code into machine language", "To debug code", "To store code"],
    answer: "To translate code into machine language",
  },
];

const Solo = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 10); // Increment score for correct answer
      alert("Correct! +10 points");
    } else {
      alert("Incorrect! The correct answer is: " + questions[currentQuestionIndex].answer);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setIsAnswered(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // Move to the next question
  };

  return (
    <div className="solo-container">
      <h1>Solo Mode</h1>
      <p>Score: {score}</p>
      <div className="question-card">
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedOption === option ? "selected" : ""}`}
              onClick={() => handleOptionSelect(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
        {!isAnswered ? (
          <button className="submit-btn" onClick={handleSubmitAnswer} disabled={!selectedOption}>
            Submit Answer
          </button>
        ) : (
          <button className="next-btn" onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Solo;