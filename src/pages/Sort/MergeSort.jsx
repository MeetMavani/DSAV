import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import { mergeSort, MergeSortCodeSnippets } from '../../utils/sortingAlgorithms'
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';


const MergeSort = () => {


  const questions = [
    {
      question: "What is the time complexity of Merge Sort in the worst case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      answer: "O(n log n)",
    },
    {
      question: "Why does Merge Sort require O(n) space?",
      options: [
        "Because it uses a stack",
        "Because it modifies the original array",
        "Because it creates temporary arrays during merging",
        "Because it uses recursion",
      ],
      answer: "Because it creates temporary arrays during merging",
    },
    {
      question: "Which of the following is true about Merge Sort?",
      options: [
        "It is an in-place algorithm",
        "It is not stable",
        "It uses a divide and conquer strategy",
        "It performs poorly on large arrays",
      ],
      answer: "It uses a divide and conquer strategy",
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
    <section className="flex flex-col max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-24 bg-red-100">
      {/* Big Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Merge Sort</h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
        <strong>Merge Sort</strong> is a highly efficient, comparison-based sorting algorithm that follows the Divide and Conquer paradigm.
        It recursively splits the array into halves, sorts them, and merges them back together. It is very effective for large datasets.
      </p>

      {/* Key Points */}
      <ul className="list-disc text-gray-600 space-y-4 text-left">
        <li>
          Merge Sort is a <strong>divide-and-conquer</strong> algorithm that splits the array into halves recursively until each subarray has one element.
        </li>
        <li>
          It then <strong>merges</strong> the sorted subarrays step by step, comparing elements and building a sorted array.
        </li>
        <li>
          It has a consistent time complexity of <strong>O(n log n)</strong> and is stable, but requires additional memory space for merging.
        </li>
      </ul>

        
      {/* How it works */}  
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How does Merge Sort work?
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Divide the unsorted array into two roughly equal halves.</li>
          <li>Recursively repeat the process for each half until each subarray contains a single element.</li>
          <li>Merge the sorted subarrays back together to form a sorted array.</li>
        </ol>
      </section>

      <hr />

      {/* Manual Run Through */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Manual Run Through</h2>
        <p className="mb-6">
          Before diving into the code, let&apos;s manually walk through Merge Sort with an example to understand how it works step by step.
        </p>

        <div className="mb-4">
          <strong>Step 1:</strong> Start with an unsorted array:
          <div className="mt-2 font-mono tracking-wide bg-blue-200 w-fit">[5, 3, 8, 6, 2]</div>
        </div>

        <div className="mb-4">
          <strong>Step 2:</strong> Divide it into two halves → [5, 3] and [8, 6, 2]
        </div>

        <div className="mb-4">
          <strong>Step 3:</strong> Recursively split until each subarray has one element → [5], [3], [8], [6], [2]
        </div>

        <div className="mb-4">
          <strong>Step 4:</strong> Merge [5] and [3] → [3, 5]; Merge [6] and [2] → [2, 6]
        </div>

        <div className="mb-4">
          <strong>Step 5:</strong> Merge [8] and [2, 6] → [2, 6, 8]; Merge [3, 5] and [2, 6, 8] → [2, 3, 5, 6, 8]
          <div className="mt-2 font-mono tracking-wide">[<span className="text-green-500 font-semibold">2, 3, 5, 6, 8</span>]</div>
        </div>

        <p className="mt-6">
          ✅ At each stage, smaller sorted arrays are merged to form a completely sorted array.
        </p>
      </section>

      <hr />

      <SortingVisualizer title="Merge" algorithmFn={mergeSort}/>
                      
      <hr />
        
      {/* Implementation */}
      <section className="mt-8">
        <p className="mb-4">
          Now that we understand how Merge Sort works, let&apos;s look at how we can implement it in code.
        </p>

        <h2 className="text-2xl font-bold mb-4">Merge Sort Implementation</h2>

        <p className="mb-4">
          Merge Sort is a recursive algorithm that breaks down arrays and merges them in sorted order. Here&apos;s how it works:
        </p>

        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>Divide</strong>: Recursively split the array into halves until each subarray has one element.
          </li>

          <li>
            <strong>Merge</strong>: Combine two sorted subarrays into one sorted array.
          </li>

          <li>
            <strong>Repeat</strong>: Continue merging until the entire array is sorted.
          </li>
        </ol>

        <p className="mt-6">
          Here&apos;s a quick breakdown:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <p>
            🛠️ For an array <code>[5, 3, 8, 4, 2]</code>:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Split → [5, 3, 8] and [4, 2]</li>
            <li>Split further → [5], [3, 8], [4], [2]</li>
            <li>Merge → [3, 5, 8], [2, 4]</li>
            <li>Final merge → [2, 3, 4, 5, 8]</li>
          </ul>
        </div>
      </section>


      <CodeBox codeSnippets={MergeSortCodeSnippets} />;

      {/* Complexity */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis of Merge Sort:</h2>

        <p className="mb-4">
          <strong>Time Complexity:</strong>
          <span>Best, Average & Worst: O(n log n)</span>
        </p>

        <p className="mb-4">
          <strong>Space Complexity:</strong>
          <span>O(n) – Due to the use of temporary arrays during merging</span>
        </p>

        <p>
          For a deeper dive, please refer to the{" "}
          <a
            href="https://www.geeksforgeeks.org/merge-sort/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Complexity Analysis of Merge Sort
          </a>.
        </p>
      </section>

      {/* Exercise */}
      <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">🧠 Merge Sort Exercises</h2>

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

export default MergeSort



