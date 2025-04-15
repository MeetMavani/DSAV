import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import { insertionSort, InsertionSortCodeSnippets } from "../../utils/sortingAlgorithms";
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';


const InsertionSort = () => {


  const questions = [
    {
      question: "What is the best-case time complexity of Insertion Sort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"],
      answer: "O(n)",
    },
    {
      question: "When does Insertion Sort perform best?",
      options: [
        "When the array is in reverse order",
        "When all elements are the same",
        "When the array is already sorted",
        "When the array has negative numbers",
      ],
      answer: "When the array is already sorted",
    },
    {
      question: "Which sorting algorithm is stable and sorts in-place?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"],
      answer: "Insertion Sort",
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
    <section className="flex flex-col max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-24 bg-yellow-100">
      {/* Big Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Insertion Sort</h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
        <strong>Insertion Sort</strong> is a simple sorting algorithm that builds the final sorted array one item at a time.
        It is much like the way you sort playing cards in your hands.
      </p>

      {/* Key Points */}
      <ul className="list-disc text-gray-600 space-y-4 text-left">
        <li>
          Insertion Sort builds the final sorted array one element at a time by repeatedly inserting the current element into its correct position.
        </li>
        <li>
          It assumes that the first element is already sorted, and then compares the next element with the sorted part, shifting elements if necessary.
        </li>
        <li>
          It is efficient for small datasets and is adaptive, meaning it performs well on nearly sorted arrays.
        </li>
      </ul>

      {/* How it works */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How does Insertion Sort work?
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Start from the second element, compare it with the first, and insert it in the correct position.</li>
          <li>Repeat the process for each element in the array.</li>
          <li>Each time, the left part of the array is sorted and expands one element at a time.</li>
        </ol>
      </section>

      <hr />

      {/* Manual Run Through */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Manual Run Through</h2>
        <p className="mb-6">
          Let&apos;s walk through Insertion Sort manually with an example to see how it works step-by-step.
        </p>

        <div className="mb-4">
          <strong>Step 1:</strong> Start with an array:
          <div className="mt-2 font-mono tracking-wide bg-yellow-200 w-fit">[5, 3, 8, 6, 2]</div>
        </div>

        <div className="mb-4">
          <strong>Step 2:</strong> Compare 3 with 5 and insert before → [3, 5, 8, 6, 2]
        </div>

        <div className="mb-4">
          <strong>Step 3:</strong> 8 is in correct place → [3, 5, 8, 6, 2]
        </div>

        <div className="mb-4">
          <strong>Step 4:</strong> Insert 6 between 5 and 8 → [3, 5, 6, 8, 2]
        </div>

        <div className="mb-4">
          <strong>Step 5:</strong> Insert 2 at the beginning → [2, 3, 5, 6, 8]
        </div>

        <p className="mt-6">
          ✅ You now have a fully sorted array using Insertion Sort!
        </p>
      </section>

      <hr />

      <SortingVisualizer title="Insertion" algorithmFn={insertionSort}/>
                      
      <hr />
        
      {/* Implementation */}
      <section className="mt-8">
        <p className="mb-4">
          Now that we understand how Insertion Sort works, let&apos;s look at how we can implement it in code.
        </p>

        <h2 className="text-2xl font-bold mb-4">Insertion Sort Implementation</h2>

        <p className="mb-4">
          Insertion Sort works by gradually building a sorted portion of the array. Here&apos;s how it works step-by-step:
        </p>

        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Start from the second element</strong>: Compare it with the elements before it.
          </li>

          <li>
            <strong>Shift elements</strong>: If the previous element is larger, shift it to the right.
          </li>

          <li>
            <strong>Insert the current element</strong>: Place it in the correct position in the sorted part of the array.
          </li>
        </ol>

        <p className="mt-6">
          Here&apos;s a quick breakdown:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <p>
            🛠️ For an array <code>[5, 3, 8, 4, 2]</code>, after a few steps:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Compare 3 with 5 → insert 3 before 5 → [3, 5, 8, 4, 2]</li>
            <li>8 is in place → no changes</li>
            <li>4 is compared and placed between 3 and 5 → [3, 4, 5, 8, 2]</li>
            <li>Repeat the process for 2</li>
          </ul>
        </div>
      </section>


      <CodeBox codeSnippets={InsertionSortCodeSnippets} />;

      {/* Complexity */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis of Insertion Sort:</h2>

        <p className="mb-4">
          <strong>Time Complexity:</strong>
          <span>
            Best: O(n) (when array is already sorted), Average & Worst: O(n<sup>2</sup>)
          </span>
        </p>

        <p className="mb-4">
          <strong>Space Complexity:</strong>
          <span>O(1) – In-place sorting algorithm</span>
        </p>

        <p>
          For a deeper dive, please refer to the{" "}
          <a
            href="https://www.geeksforgeeks.org/insertion-sort/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Complexity Analysis of Insertion Sort
          </a>.
        </p>
      </section>

      {/* Exercise */}
      <section className="mt-8">
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

    </section>
  )
}

export default InsertionSort



