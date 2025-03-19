import './new.css'
// import StarryBackground from '../../components/StarryBackground'
// import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';


const QuickSort = () => {


  const questions = [
    {
      question: "What is the best-case time complexity of Bubble Sort?",
      options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
      answer: "O(n)",
    },
    {
      question: "After the first pass, which element is in the correct position?",
      options: ["Smallest", "Largest", "Middle", "None"],
      answer: "Largest",
    },
    {
      question: "What is the output of Bubble Sort on [3, 1, 2]?",
      options: ["[1, 2, 3]", "[3, 1, 2]", "[1, 3, 2]", "[2, 1, 3]"],
      answer: "[1, 2, 3]",
    },
  ];

  const initialArray = [8, 11, 6, 10, 2];
  const [array, setArray] = useState(initialArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = () => {
    setIsRunning(true);
    setCurrentIndex(0);
    simulatePass();
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setArray(initialArray);
    setCurrentIndex(0);
  };

  const simulatePass = () => {
    if (currentIndex >= array.length - 1) {
      setIsRunning(false);
      return;
    }

    setTimeout(() => {
      setArray((prevArray) => {
        const newArray = [...prevArray];
        if (newArray[currentIndex] > newArray[currentIndex + 1]) {
          [newArray[currentIndex], newArray[currentIndex + 1]] = [
            newArray[currentIndex + 1],
            newArray[currentIndex],
          ];
        }
        return newArray;
      });

      setCurrentIndex((prevIndex) => prevIndex + 1);
      simulatePass();
    }, 800);
  };

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
    <section className="flex flex-col items-center px-4 py-8 md:px-12 lg:px-24">
      {/* Big Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Bubble Sort</h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl text-center">
        <strong>Bubble Sort</strong> is a simple sorting algorithm that repeatedly
        swaps adjacent elements if they are in the wrong order. It’s not suitable for
        large datasets due to its high average and worst-case time complexity.
      </p>

      {/* Key Points */}
      <ul className="list-disc text-gray-600 space-y-4 max-w-3xl text-left">
        <li>
          We sort the array using multiple passes. After the first pass, the
          maximum element moves to the end (its correct position). This process
          repeats for subsequent largest elements.
        </li>
        <li>
          With each pass, we only process elements not already in their correct
          positions. After <code>k</code> passes, the largest <code>k</code> elements
          occupy the last <code>k</code> positions.
        </li>
        <li>
          In each pass, we compare adjacent elements and swap if necessary. This
          ensures the largest remaining element reaches its correct position.
        </li>
      </ul>

      
        
        {/* How it works */}  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How does Bubble Sort work?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Go through the array, one value at a time.</li>
            <li>For each value, compare it with the next value.</li>
            <li>If the value is higher than the next one, swap the values so that the highest value comes last.</li>
            <li>Repeat this process as many times as there are values in the array.</li>
          </ol>
        </section>

        <hr />

        {/* Manual Run through */}
        <section className="mt-8">

          <h2 className="text-2xl font-bold mb-4">Manual Run Through</h2>
          <p className="mb-6">
            Before diving into the code, let&apos;s manually walk through Bubble Sort with a new example to understand how the algorithm works step by step.
          </p>

          <div className="mb-4">
            <strong>Step 1:</strong> Start with an unsorted array:  
            <div className="mt-2 font-mono tracking-wide bg-blue-100 w-fit">[5, 3, 8, 4, 2]</div>
          </div>

          <div className="mb-4">
            <strong>Step 2:</strong> Compare <span className="text-red-500 font-semibold">5</span> and <span className="text-red-500 font-semibold">3</span>. Since 5 is larger, we swap them:  
            <div className="mt-2 font-mono tracking-wide">[<span className="text-green-500 font-semibold">3</span>, <span className="text-green-500 font-semibold">5</span>, 8, 4, 2]</div>
          </div>

          <div className="mb-4">
            <strong>Step 3:</strong> Move to the next pair (<span className="text-red-500 font-semibold">5</span> and <span className="text-red-500 font-semibold">8</span>). No swap is needed. 
            <div className="mt-2 font-mono tracking-wide">[3, <span className='text-blue-500 font-semibold'>5</span>, <span className='text-blue-500 font-semibold'>8</span>, 4, 2]</div>
          </div>

          <div className="mb-4">
            <strong>Step 4:</strong> Compare <span className="text-red-500 font-semibold">8</span> and <span className="text-red-500 font-semibold">4</span>. Since 5 is larger, we swap them:  
            <div className="mt-2 font-mono tracking-wide">[3, 5, <span className="text-purple-500 font-semibold">8</span>, <span className="text-purple-500 font-semibold">4</span>, 2]</div>
          </div>

          <div className="mb-4">
            <strong>Step 5:</strong> Compare <span className="text-red-500 font-semibold">8</span> and <span className="text-red-500 font-semibold">2</span>. Since 8 is larger, we swap them:  
            <div className="mt-2 font-mono tracking-wide">[3, 5, 4, <span className="text-yellow-500 font-semibold">8</span>, <span className="text-yellow-500 font-semibold">2</span>]</div>
          </div>

          <p className="mt-6">
            🎯 After one full pass, the largest value (<strong>8</strong>) has bubbled to the correct position.
          </p>
        </section>

        <hr />

        {/* Simulation */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">🔍 Bubble Sort Simulation (One Pass)</h2>
          <div className="flex space-x-4 mb-6">
            {array.map((num, index) => (
              <div
                key={index}
                className={`array-box ${
                  isRunning && (index === currentIndex || index === currentIndex + 1)
                    ? "highlight"
                    : ""
                }`}
              >
                {num}
              </div>
            ))}
          </div>

          <button
            onClick={startSimulation}
            disabled={isRunning}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
          >
            Start Simulation
          </button>
          <button
            onClick={resetSimulation}
            className="ml-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800"
          >
            Reset
          </button>
        </section>
                      
        <hr />
        
        {/* Implementation */}
        <section className="mt-8">
          <p className="mb-4">
            Now that we understand how Bubble Sort works, let's dive into the actual implementation in a programming language.
          </p>

          <h2 className="text-2xl font-bold mb-4">Bubble Sort Implementation</h2>

          <p className="mb-4">
            To implement Bubble Sort, we need to follow these core steps:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              **Initialize an array** with the values we want to sort.
            </li>

            <li>
              **Inner Loop**: Compare each pair of adjacent elements and swap if the first is greater than the second.  
              ✅ With each outer pass, the largest value moves to the correct position, so the inner loop processes fewer elements.
            </li>

            <li>
              **Outer Loop**: Repeat the process until the entire array is sorted.  
              ✅ For an array of length <code>n</code>, the loop runs <code>n - 1</code> times.
            </li>
          </ol>

          <p className="mt-6">
            Here's a simple breakdown:
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <p>
              🛠️ For an array <code>[5, 3, 8, 4, 2]</code>:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>1st Pass: Largest value moves to the last position.</li>
              <li>2nd Pass: Second-largest value moves to the second-last position.</li>
              <li>Repeat until the array is fully sorted.</li>
            </ul>
          </div>
        </section>

          
        <CodeBox />

        {/* Complexity */}
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Complexity Analysis of Bubble Sort:</h2>

            <p className="mb-4">
              <strong>Time Complexity:</strong> <span>O(n<sup>2</sup>)</span>
            </p>

            <p className="mb-4">
              <strong>Space Complexity:</strong> <span>O(1)</span>
            </p>

            <p>
              For a deeper dive, please refer to the{" "}
              <a
                href="https://www.geeksforgeeks.org/bubble-sort/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Complexity Analysis of Bubble Sort
              </a>.
            </p>
        </section>
            
        {/* Exercise */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">🧠 Bubble Sort Exercises</h2>

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

    </section>
  )
}

export default QuickSort



