import LinearSearchVisualizer from "./LinearSearchVisualizer";
import { useState } from 'react';

const LinearSearch = () => {

  const questions = [
  {
    question: "What is the best-case time complexity of Linear Search?",
    options: ["O(n)", "O(n log n)", "O(1)", "O(n²)"],
    answer: "O(1)",
  },
  {
    question: "What is the worst-case time complexity of Linear Search?",
    options: ["O(n)", "O(n log n)", "O(1)", "O(log n)"],
    answer: "O(n)",
  },
  {
    question: "Which condition is best for Linear Search?",
    options: [
      "The target is at the end of the array",
      "The array is unsorted",
      "The array is sorted in ascending order",
      "There are duplicate values",
    ],
    answer: "The array is unsorted",
  },
];


  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleOptionChange = (index, option) => {
    setUserAnswers({ ...userAnswers, [index]: option });
  };
  
  const handleSubmit = () => {
      let newScore = 0;
      questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
          newScore++;
        }
      });
      setScore(newScore);
      setSubmitted(true);
  };


  return (
    <>
      {/* Section 1: Intro */}
      <section className="bg-blue-50 px-6 py-12 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-800 mb-6">
          Linear Search
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          Linear Search is the simplest searching technique. Start at the beginning, and look at each element until you find what you're looking for.
        </p>
      </section>

      {/* Section 2: Real-Life Analogy */}
      <section className="bg-white px-6 py-10 md:px-20">
        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-md shadow-sm">
          <p className="text-gray-800 text-lg">
            <strong>🔍 Analogy:</strong> Imagine you're looking for your friend's roll number in a physical attendance register. You start from the top and check each entry until you find it. That’s linear search.
          </p>
        </div>
      </section>

      {/* Section 3: Step-by-Step Walkthrough */}
      <section className="bg-gray-50 px-6 py-12 md:px-20 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Explanation */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Start at index 0</li>
            <li>Compare each element with the target</li>
            <li>If found, return the index</li>
            <li>If not, move to the next index</li>
            <li>If the end is reached, return -1 (not found)</li>
          </ul>
        </div>

        {/* Right: Sample Static Walkthrough */}
        <div className="md:w-1/2">
          <div className="flex space-x-4 justify-center">
            {[12, 25, 34, 45, 67].map((num, index) => (
              <div
                key={index}
                className="w-16 h-16 flex flex-col items-center justify-center bg-white border border-gray-400 rounded-md shadow-sm"
              >
                <span className="text-lg font-bold">{num}</span>
                <span className="text-xs text-gray-500">Index {index}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Searching for <code>45</code>... Found at index <strong>3</strong> ✅
          </p>
        </div>
      </section>

      {/* Section 4: Code Example */}
      <section className="bg-white px-6 py-12 md:px-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Code Example (Java)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800 shadow-inner">
<code>{`int[] arr = {12, 25, 34, 45, 67};
int target = 45;

for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        System.out.println("Found at index " + i);
        break;
    }
}`}</code>
        </pre>
      </section>

      {/* Section 5: Key Notes */}
      <section className="bg-gray-50 px-6 py-10 md:px-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">🔑 Key Notes</h3>
        <ul className="list-disc text-gray-700 space-y-3 pl-6">
          <li>Works on both sorted and unsorted arrays.</li>
          <li>Time Complexity: <code>O(n)</code></li>
          <li>Space Complexity: <code>O(1)</code></li>
          <li>Simple but inefficient for large datasets.</li>
        </ul>
      </section>

      {/* Section 6: Visualizer */}
      <section className="bg-white px-6 py-14 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🎥 Visualize Linear Search in Action
        </h2>
        <LinearSearchVisualizer />
      </section>

      {/* Exercise */}
      <section className="mt-8 max-w-7xl py-8 md:px-12 lg:px-24">
          <h2 className="text-2xl font-semibold mb-4">🧠 Insertion Sort Exercises</h2>

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

    </>
  );
};

export default LinearSearch;
