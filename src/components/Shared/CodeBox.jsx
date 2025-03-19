import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = {
  JavaScript: `function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
  Python: `def bubble_sort(arr):
  n = len(arr)
  for i in range(n - 1):
    for j in range(n - 1 - i):
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
  return arr`,
  Java: `public class BubbleSort {
  static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
}`,
};

const CodeBox = () => {
  const [selectedLang, setSelectedLang] = useState("JavaScript");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang]);
    alert(`${selectedLang} code copied!`);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-8 w-3xl">
      <h3 className="text-xl font-semibold mb-4 text-white">Algorithm Code</h3>

      {/* Language Selector */}
      <div className="flex justify-between items-center mb-4">
        <select
          onChange={(e) => setSelectedLang(e.target.value)}
          value={selectedLang}
          className="p-2 bg-gray-800 text-white rounded-md"
        >
          {Object.keys(codeSnippets).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <button
          onClick={copyToClipboard}
          className="p-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition"
        >
          📋 Copy
        </button>
      </div>

      {/* Code Display */}
      <SyntaxHighlighter language={selectedLang.toLowerCase()} style={dracula}>
        {codeSnippets[selectedLang]}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
