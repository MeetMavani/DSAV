import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";



const CodeBox = ({ codeSnippets }) => {
  const [selectedLang, setSelectedLang] = useState(Object.keys(codeSnippets)[0]);
  // const [selectedLang, setSelectedLang] = useState("JavaScript");

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
