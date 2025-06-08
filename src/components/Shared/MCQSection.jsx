import { useState } from "react";

const MCQSection = ({ title, questions }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = userAnswers.reduce((total, answer, idx) => {
    return answer === questions[idx].answer ? total + 1 : total;
  }, 0);

  return (
    <section className="mt-8 max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      {questions.map((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;

        return (
          <div key={index} className="mb-6">
            <p className="font-medium">{q.question}</p>

            {q.options.map((option) => {
              const isSelected = userAnswer === option;
              const isWrong = submitted && isSelected && !isCorrect;
              const isRight = submitted && option === q.answer;

              return (
                <label
                  key={option}
                  className={`block p-1 rounded ${
                    isRight ? "bg-green-200" : isWrong ? "bg-red-200" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleOptionChange(index, option)}
                    disabled={submitted}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              );
            })}
          </div>
        );
      })}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
        >
          Submit Answers
        </button>
      ) : (
        <p className="mt-4 font-bold">
          Your Score: {score} / {questions.length}
        </p>
      )}
    </section>
  );
};

export default MCQSection;
