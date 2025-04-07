import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import { SelectionSortSnippets } from "../../utils/sortingAlgorithms";
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';


const QuickSort = () => {


    const questions = [
        {
          question: "What is the time complexity of Selection Sort in the worst case?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          answer: "O(n²)",
        },
        {
          question: "How does Selection Sort find the correct element for each position?",
          options: [
            "By swapping adjacent elements",
            "By selecting the smallest remaining element",
            "By dividing the array into halves",
            "By using recursion",
          ],
          answer: "By selecting the smallest remaining element",
        },
        {
          question: "Which of the following is true about Selection Sort?",
          options: [
            "It is a stable sorting algorithm",
            "It uses extra space",
            "It always makes n-1 swaps",
            "It is a recursive algorithm",
          ],
          answer: "It always makes n-1 swaps",
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
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Selection Sort</h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
        <strong>Selection Sort</strong> is a simple comparison-based algorithm. 
        It works by repeatedly selecting the <strong>smallest (or largest)</strong> element from the unsorted portion 
        and placing it at the correct position. Although easy to implement, it's inefficient on large datasets.
        </p>

        {/* Key Points */}
        <ul className="list-disc text-gray-600 space-y-4 text-left">
        <li>
            Selection Sort divides the array into a sorted and an unsorted region. In each iteration, it selects the <strong>minimum element</strong> from the unsorted region.
        </li>
        <li>
            The selected minimum is <strong>swapped</strong> with the first unsorted element, expanding the sorted region by one.
        </li>
        <li>
            It performs <code>n - 1</code> passes for an array of size <code>n</code>, as each pass places one element in its final position.
        </li>
        </ul>
        
        {/* How it works */}  
        <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How does Selection Sort work?
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Start from the beginning of the array and search the entire array for the smallest element.</li>
            <li>Swap the smallest element with the first unsorted element.</li>
            <li>Move the boundary of the sorted section one step forward.</li>
            <li>Repeat the process until all elements are sorted and in place.</li>
        </ol>
        </section>

        <hr />

        {/* Manual Run Through */}
        <section className="mt-8">

            <h2 className="text-2xl font-bold mb-4">Manual Run Through</h2>
            <p className="mb-6">
            Before diving into the code, let&apos;s manually walk through Selection Sort with an example to understand how it works step by step.
            </p>

            <div className="mb-4">
            <strong>Step 1:</strong> Start with an unsorted array:  
            <div className="mt-2 font-mono tracking-wide bg-blue-100 w-fit">[29, 10, 14, 37, 13]</div>
            </div>

            <div className="mb-4">
            <strong>Step 2:</strong> Find the smallest value in the array → <span className="text-red-500 font-semibold">10</span>.  
            Swap it with the first element (<span className="text-green-500 font-semibold">29</span>):
            <div className="mt-2 font-mono tracking-wide">[<span className="text-green-500 font-semibold">10</span>, 29, 14, 37, 13]</div>
            </div>

            <div className="mb-4">
            <strong>Step 3:</strong> From index 1 to end, smallest is <span className="text-red-500 font-semibold">13</span>.  
            Swap it with <span className="text-blue-500 font-semibold">29</span>:
            <div className="mt-2 font-mono tracking-wide">[10, <span className="text-blue-500 font-semibold">13</span>, 14, 37, 29]</div>
            </div>

            <div className="mb-4">
            <strong>Step 4:</strong> Continue finding and swapping the next smallest values...
            </div>

            <p className="mt-6">
            🎯 With each pass, the smallest remaining element is placed in its correct position.
            </p>
        </section>

        <hr />

        <SortingVisualizer/>
                      
        <hr />
        
        {/* Implementation */}
        <section className="mt-8">
            <p className="mb-4">
                Now that we know how Selection Sort works, let&apos;s explore its implementation step by step.
            </p>

            <h2 className="text-2xl font-bold mb-4">Selection Sort Implementation</h2>

            <p className="mb-4">
                Selection Sort works by repeatedly finding the minimum element and moving it to the front. Here's how:
            </p>

            <ol className="list-decimal list-inside space-y-3">
                <li>
                **Start from the first element** and assume it's the minimum.
                </li>

                <li>
                **Scan the rest of the array** to find the actual minimum element.
                </li>

                <li>
                **Swap** the found minimum with the first element.
                </li>

                <li>
                Move to the next element and repeat until the entire array is sorted.
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
                <li>Find the smallest element → 2 → swap with 5</li>
                <li>Next pass: find the smallest in remaining sub-array</li>
                <li>Repeat until the array is sorted</li>
                </ul>
            </div>
        </section>
         
        <CodeBox codeSnippets={SelectionSortSnippets}/>

        {/* Complexity */}
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Complexity Analysis of Selection Sort:</h2>

            <p className="mb-4">
                <strong>Time Complexity:</strong> 
                <span>O(n<sup>2</sup>) – for all cases (best, average, worst)</span>
            </p>

            <p className="mb-4">
                <strong>Space Complexity:</strong> 
                <span>O(1)</span>
            </p>

            <p>
                For a deeper dive, please refer to the{" "}
                <a
                href="https://www.geeksforgeeks.org/selection-sort/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                >
                Complexity Analysis of Selection Sort
                </a>.
            </p>
        </section>

            
        {/* Exercise */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">🧠 Selection Sort Exercises</h2>

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



