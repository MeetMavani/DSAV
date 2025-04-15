import BinarySearchVisualizer from "./BinarySearchVisualizer";
import { useState } from "react";

const BinarySearch = () => {
  const questions = [
    {
      question: "What is the best-case time complexity of Binary Search?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(1)",
    },
    {
      question: "What is the requirement for applying Binary Search?",
      options: [
        "Array should be reversed",
        "Array should contain only integers",
        "Array should be sorted",
        "Array should have unique elements",
      ],
      answer: "Array should be sorted",
    },
    {
      question: "What happens if the middle element is not the target?",
      options: [
        "We search in both halves",
        "We continue linearly",
        "We eliminate half of the array",
        "We sort the array again",
      ],
      answer: "We eliminate half of the array",
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
          Binary Search
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          Binary Search is a fast searching algorithm that repeatedly divides the search interval in half. Works only on sorted arrays.
        </p>
      </section>

      {/* Section 2: Real-Life Analogy */}
      <section className="bg-white px-6 py-10 md:px-20">
        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-md shadow-sm">
          <p className="text-gray-800 text-lg">
            <strong>📘 Analogy:</strong> Imagine searching for a word in a dictionary. Instead of checking each word, you open it in the middle, decide whether to go left or right — that’s Binary Search!
          </p>
        </div>
      </section>

      {/* Section 3: Step-by-Step Walkthrough */}
      <section className="bg-gray-50 px-6 py-12 md:px-20 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Explanation */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Start with the middle element</li>
            <li>If it matches the target, return its index</li>
            <li>If the target is smaller, search the left half</li>
            <li>If the target is larger, search the right half</li>
            <li>Repeat until the element is found or range becomes empty</li>
          </ul>
        </div>

        {/* Right: Static Walkthrough */}
        <div className="md:w-1/2">
          <div className="flex space-x-4 justify-center">
            {[10, 20, 30, 40, 50, 60, 70].map((num, index) => (
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
            Searching for <code>60</code>... Found at index <strong>5</strong> ✅
          </p>
        </div>
      </section>

      {/* Section 4: Code Example */}
      <section className="bg-white px-6 py-12 md:px-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Code Example (Java)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-800 shadow-inner">
<code>{`int[] arr = {10, 20, 30, 40, 50, 60, 70};
int target = 60;
int low = 0, high = arr.length - 1;

while (low <= high) {
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
        System.out.println("Found at index " + mid);
        break;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}`}</code>
        </pre>
      </section>

      {/* Section 5: Key Notes */}
      <section className="bg-gray-50 px-6 py-10 md:px-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">🔑 Key Notes</h3>
        <ul className="list-disc text-gray-700 space-y-3 pl-6">
          <li>Requires sorted array to work correctly</li>
          <li>Time Complexity: <code>O(log n)</code></li>
          <li>Space Complexity: <code>O(1)</code> (iterative version)</li>
          <li>Much faster than Linear Search on large arrays</li>
        </ul>
      </section>

      {/* Section 6: Visualizer */}
      <section className="bg-white px-6 py-14 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🎥 Visualize Binary Search in Action
        </h2>
        <BinarySearchVisualizer />
      </section>

      {/* Section 7: Exercises */}
      <section className="mt-8 max-w-7xl py-8 md:px-12 lg:px-24">
        <h2 className="text-2xl font-semibold mb-4">🧠 Binary Search Exercises</h2>

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

export default BinarySearch;
