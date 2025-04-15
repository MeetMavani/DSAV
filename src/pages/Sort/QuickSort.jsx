import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import { quickSort, QuickSortCodeSnippets } from '../../utils/sortingAlgorithms'
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';


const QuickSort = () => {


  const questions = [
    {
      question: "What is the average-case time complexity of Quick Sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      answer: "O(n log n)",
    },
    {
      question: "What is the worst-case scenario for Quick Sort?",
      options: [
        "When the pivot is the median",
        "When the array is already sorted",
        "When all elements are equal",
        "When the pivot is always the smallest or largest element",
      ],
      answer: "When the pivot is always the smallest or largest element",
    },
    {
      question: "Which approach does Quick Sort use?",
      options: ["Dynamic Programming", "Backtracking", "Divide and Conquer", "Greedy"],
      answer: "Divide and Conquer",
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
    <section className="flex flex-col max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-24 bg-blue-100">
      {/* Big Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Quick Sort</h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
        <strong>Quick Sort</strong> is a highly efficient, divide-and-conquer sorting algorithm. 
        It works by selecting a <strong>pivot</strong> element, partitioning the array around the pivot, 
        and then recursively sorting the subarrays. It performs well on large datasets and is often faster than other O(n log n) algorithms.
      </p>

      {/* Key Points */}
      <ul className="list-disc text-gray-600 space-y-4 text-left">
        <li>
          Quick Sort uses the <strong>divide-and-conquer</strong> strategy by selecting a pivot element and partitioning the array into two subarrays.
        </li>
        <li>
          Elements less than the pivot are moved to the left, and elements greater than the pivot are moved to the right — this process is called <strong>partitioning</strong>.
        </li>
        <li>
          The pivot ends up in its correct sorted position, and the same process is recursively applied to the left and right subarrays.
        </li>
      </ul>
        
      {/* How it works */}  
      <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How does Quick Sort work?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Choose a pivot element from the array (commonly the last or a random element).</li>
            <li>Rearrange the elements so that those less than the pivot come before it, and those greater come after it — this is called partitioning.</li>
            <li>Recursively apply the above steps to the subarrays formed by partitioning.</li>
            <li>Continue until the base case is reached (arrays of size 0 or 1), which are inherently sorted.</li>
          </ol>
      </section>

      <hr />

      {/* Manual Run Through */}
      <section className="mt-8">

        <h2 className="text-2xl font-bold mb-4">Manual Run Through</h2>
        <p className="mb-6">
          Before diving into the code, let&apos;s manually walk through Quick Sort with an example to understand how it works step by step.
        </p>

        <div className="mb-4">
          <strong>Step 1:</strong> Start with an unsorted array:
          <div className="mt-2 font-mono tracking-wide bg-blue-100 w-fit">[7, 2, 1, 6, 8, 5, 3, 4]</div>
        </div>

        <div className="mb-4">
          <strong>Step 2:</strong> Choose the last element as the pivot → <span className="text-red-500 font-semibold">4</span>.
        </div>

        <div className="mb-4">
          <strong>Step 3:</strong> Partition the array:
          <div className="mt-2 font-mono tracking-wide">
            Elements &lt; 4: <span className="text-green-500 font-semibold">[2, 1, 3]</span>, 
            Pivot: <span className="text-red-500 font-semibold">4</span>, 
            Elements &gt; 4: <span className="text-purple-500 font-semibold">[7, 6, 8, 5]</span>
          </div>
        </div>

        <div className="mb-4">
          <strong>Step 4:</strong> Place pivot <span className="text-red-500 font-semibold">4</span> in its correct position:
          <div className="mt-2 font-mono tracking-wide">[2, 1, 3, <span className="text-red-500 font-semibold">4</span>, 7, 6, 8, 5]</div>
        </div>

        <div className="mb-4">
          <strong>Step 5:</strong> Recursively apply Quick Sort on left [2, 1, 3] and right [7, 6, 8, 5] subarrays.
        </div>

        <p className="mt-6">
          🎯 With each recursion, elements are placed in their correct sorted position until the full array is sorted.
        </p>
      </section>

      <hr />

      <SortingVisualizer title="Quick" algorithmFn={quickSort}/>
                      
      <hr />
        
      {/* Implementation */}
      <section className="mt-8">
        <p className="mb-4">
          Now that we understand how Quick Sort works, let&apos;s look at how we can implement it in code.
        </p>

        <h2 className="text-2xl font-bold mb-4">Quick Sort Implementation</h2>

        <p className="mb-4">
          Quick Sort is a recursive algorithm that sorts an array by dividing it around a pivot element. Here&apos;s how it works:
        </p>

        <ol className="list-decimal list-inside space-y-3">
          <li>
            **Choose a Pivot**: Select an element from the array. Common choices are the first, last, or middle element.
          </li>

          <li>
            **Partitioning**: Rearrange the array so that all elements smaller than the pivot go to its left, and all larger ones go to its right.
          </li>

          <li>
            **Recursive Sorting**: Recursively apply the same process to the left and right sub-arrays.
          </li>
        </ol>

        <p className="mt-6">
          Here&apos;s a quick breakdown:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <p>
            🛠️ For an array <code>[5, 3, 8, 4, 2]</code> with pivot = <code>5</code>:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Partition the array: [3, 4, 2], 5, [8]</li>
            <li>Recursively sort the left and right partitions</li>
            <li>Combine sorted sub-arrays and pivot to get the final sorted array</li>
          </ul>
        </div>
      </section>

      <CodeBox codeSnippets={QuickSortCodeSnippets} />;

      {/* Complexity */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity Analysis of Quick Sort:</h2>

        <p className="mb-4">
          <strong>Time Complexity:</strong> 
          <span>
            Best & Average: O(n log n), Worst: O(n<sup>2</sup>) (when pivot selection is poor)
          </span>
        </p>

        <p className="mb-4">
          <strong>Space Complexity:</strong> 
          <span>O(log n) – due to recursive calls on the stack</span>
        </p>

        <p>
          For a deeper dive, please refer to the{" "}
          <a
            href="https://www.geeksforgeeks.org/quick-sort/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Complexity Analysis of Quick Sort
          </a>.
        </p>
      </section>
 
      {/* Exercise */}
      <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">🧠 Quick Sort Exercises</h2>

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



