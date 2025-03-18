import './new.css'
// import StarryBackground from '../../components/StarryBackground'
// import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';


const QuickSort = () => {

  const [array, setArray] = useState([5, 3, 8, 4, 2]);
  const [highlighted, setHighlighted] = useState([]);

  const simulateOnePass = () => {
    let newArray = [...array];
    let newHighlighted = [];

    for (let i = 0; i < newArray.length - 1; i++) {
      newHighlighted.push(i);
      if (newArray[i] > newArray[i + 1]) {
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
      }
    }

    setArray(newArray);
    setHighlighted(newHighlighted);

    setTimeout(() => setHighlighted([]), 1000); // Clear highlights after 1 second
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

        <section className='max-w-3xl mx-auto mb-12 mt-8'>
            <h2 className="text-2xl text-center font-semibold mb-4"> Run the simulation below to see the 8 steps above animated:</h2>
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
              {array.map((num, index) => (
              <span
                key={index}
                className={`array-item ${highlighted.includes(index) ? 'highlight' : ''}`}
              >
                {num}
              </span>
              ))}
              <button onClick={simulateOnePass} className="simulate-button bg-blue-200 rounded-3xl p-2 ml-2">Simulate One Pass</button>
            </div>
        </section>
                      
        <hr />
        
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

          <h2>
            <span>Complexity Analysis of Bubble Sort:</span>
          </h2>
          <p>
            <b>
              <strong>Time Complexity:</strong>
            </b>
            <span>O(n</span>
            <sup>2</sup>
            <span>)</span>
            <br />
            <b>
              <strong>Time Complexity:</strong>
            </b>
            <span>O(1)</span>
            <br />
            <span>Please refer </span>
            <a href="">
              <span>Complexity Analysis of Bubble Sort </span>
            </a>
            <span>for details.</span>
          </p>

          <div className='Exercise'>
              <h2>DSA Exercises</h2>
              <form action="">
                <h2>Test Yourself With Exercises</h2>
                <div className='exercisewindow'>
                  <h2>Exercise:</h2>
                  <p>Using Bubble Sort on this array:</p>
                  <code>[7,14,11,8,9]</code>
                  <p>To sort the values from left to right in an increasing (ascending) order.</p>
                  <p>How does the array look like after the FIRST run through?</p>
                  <div className='exercisecontainer'>
                    <pre>
                      [
                      <input name="box1" maxLength="2"  type="text" />
                      ,
                      <input name="box2" maxLength="2"  type="text" />
                      ,
                      <input name="box3" maxLength="2"  type="text" />
                      ,
                      <input name="box4" maxLength="2"  type="text" />
                      ,
                      <input name="box5" maxLength="2"  type="text" />
                      ]
                    </pre>
                  </div>
                  <br />
                  <button>Submit Answer</button>
                </div>
              </form>
           </div>
    </section>
  )
}

export default QuickSort



