// import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import CodeBox from '../../components/Shared/CodeBox'
import { useState } from 'react';
// import StarryBackground from '../../components/StarryBackground'



const BubbleSort = () => {

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
    <div className='min-h-screen bg-gray-100 p-8 font-sans text-gray-800'>
      {/* Header Section */}
       <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Bubble Sort</h1>

       <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Bubble Sort</h2>
          <p className='mb-4 leading-relaxed'>
            <strong>Bubble Sort </strong> 
             is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.
          </p>
          <ul className='list-decimal list-inside space-y-2'>
            <li>
            We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same  way, after second pass, the second largest element goes to second last position and so on.
            </li>
            <li>
            In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.
            </li>
            <li>
            In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.
            </li>
          </ul>
          <div className="text-xl font-medium mt-6 mb-2">
            <p className='mb-4 leading-relaxed'>
              <strong>
                How does Bubble Sort work?
              </strong>
            </p>
            <ol className='list-decimal list-inside space-y-2'>
              <li>
                Go through the array, one value at a time.
              </li>
              <li>
                For each value, compare the value with the next value.
              </li>
              <li>
                If the value is higher than the next one, swap the values so that the highest value comes last.
              </li>
              <li>
                Go through the array as many times as there are values in the array.
              </li>
            </ol>
          </div>
          
          <hr />

          <h2 className='text-2xl font-semibold mb-4'>Manual Run Through</h2>
          <p>
          Before we implement the Bubble Sort algorithm in a programming language, let&apos;s manually run through a short array only one time, just to get the idea.
          </p>

          <p>
            <strong>
              Step 1:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-2"><strong>Initial Array:</strong> [8, 11, 6, 10, 2]</p>
            <p className="mb-2"><strong>Step 1:</strong> Compare 8 and 11 (No Swap)</p>
            <p className="mb-2"><strong>Step 2:</strong> Compare 11 and 6 → Swap → [8, 6, 11, 10, 2]</p>
            <p className="mb-2"><strong>Step 3:</strong> Compare 11 and 10 → Swap → [8, 6, 10, 11, 2]</p>
            <p className="mb-2"><strong>Step 4:</strong> Compare 11 and 2 → Swap → [8, 6, 10, 2, 11]</p>
            <p><strong>Result After One Pass:</strong> [8, 6, 10, 2, 11]</p>
        </div>
      
          <hr />
          <p>
            <strong>
              Step 2:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            <strong>
              Step 3:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            <strong>
              Step 4:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            <strong>
              Step 5:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            <strong>
              Step 6:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            <strong>
              Step 7:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            <strong>
              Step 8:
            </strong>
            We start with an unsorted array.
          </p>
          <div className="array-container">
            <div className="array">
              <span className="punctuation">[</span>
              <span className="punctuation">8</span>
              <span className="punctuation">,</span>
              <span className="punctuation">11</span>
              <span className="punctuation">,</span>
              <span className="punctuation">6</span>
              <span className="punctuation">,</span>
              <span className="punctuation">10</span>
              <span className="punctuation">,</span>
              <span className="punctuation">2</span>
              <span className="punctuation">]</span>
            </div>
          </div>
          <hr />
          <p>
            Run the simulation below to see the 8 steps above animated:
          </p>

          {/* Simulation Placeholder Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-4">Simulation (Coming Soon!)</h2>
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
              {array.map((num, index) => (
              <span
                key={index}
                className={`array-item ${highlighted.includes(index) ? 'highlight' : ''}`}
              >
                {num}
              </span>
              ))}
              <button onClick={simulateOnePass} className="simulate-button">Simulate One Pass</button>
            </div>
          </div>


          <p>We will now use what we have learned to implement the Bubble Sort algorithm in a programming language.</p>
          <hr />
          <h2>Bubble Sort Implementation</h2>
          <p>To implement the Bubble Sort algorithm in a programming language, we need:</p>
          <ol>
            <li>An array with values to sort.</li>
            <li>An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.</li>
            <li>An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.</li>
          </ol>
          <p>The resulting code looks like this:</p>
          
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
       </div>
    </div>
    // <SortingVisualizer />
    // Nunito, sans-serif 
    // font-size 18px
//     line-height
// 28.8px
// text-align
// justify
// letter-spacing
// 0.162px  

  ) 
}

export default BubbleSort


