import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const StackVisualization = () => {
  const pushRef = useRef();
  const popRef = useRef();
  const peekRef = useRef();
  const isEmptyRef = useRef();
  const timelineRef = useRef(null);
  
  const initialStack = [10, 20, 30];
  const pushValue = 40;
  const [currentOperation, setCurrentOperation] = useState("");

  const runAnimation = () => {
    const tl = gsap.timeline({ delay: 0.5 });
    timelineRef.current = tl;

    // Push Operation Animation
    const pushBoxes = pushRef.current.children;
    const pushContainer = pushRef.current;
    
    tl.addLabel("pushStart")
      .call(() => setCurrentOperation("Starting PUSH operation..."))
      .to(pushContainer, {
        borderColor: "#10b981",
        borderWidth: "3px",
        duration: 0.3
      })
      .fromTo(pushBoxes[3], {
        y: -50,
        opacity: 0,
        scale: 0.5,
        backgroundColor: "#10b981"
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "bounce.out",
        onStart: () => {
          pushBoxes[3].querySelector("span:first-child").textContent = pushValue;
          pushBoxes[3].querySelector("span:last-child").textContent = "← TOP";
        }
      })
      .to(pushBoxes[2].querySelector("span:last-child"), {
        opacity: 0,
        duration: 0.2
      })
      .to(pushBoxes[3], {
        backgroundColor: "#fbbf24",
        duration: 0.3,
        repeat: 1,
        yoyo: true
      })
      .to(pushBoxes[3], {
        backgroundColor: "#f3f4f6",
        duration: 0.5
      })
      .to(pushContainer, {
        borderColor: "#d1d5db",
        borderWidth: "1px",
        duration: 0.3
      })
      .call(() => setCurrentOperation("PUSH completed! New element added to top."))

    // Pop Operation Animation
    .addLabel("popStart", "+=1")
      .call(() => setCurrentOperation("Starting POP operation..."))
      .to(popRef.current, {
        borderColor: "#ef4444",
        borderWidth: "3px",
        duration: 0.3
      })
      .to(popRef.current.children[2], {
        backgroundColor: "#ef4444",
        scale: 1.1,
        duration: 0.4,
        onStart: () => {
          popRef.current.children[2].querySelector("span:last-child").textContent = "← POPPING";
        }
      })
      .to(popRef.current.children[2], {
        y: -30,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "power2.in"
      })
      .to(popRef.current.children[1].querySelector("span:last-child"), {
        opacity: 1,
        duration: 0.2,
        onStart: () => {
          popRef.current.children[1].querySelector("span:last-child").textContent = "← TOP";
        }
      })
      .to(popRef.current.children[1], {
        backgroundColor: "#fbbf24",
        duration: 0.3,
        repeat: 1,
        yoyo: true
      })
      .to(popRef.current, {
        borderColor: "#d1d5db",
        borderWidth: "1px",
        duration: 0.3
      })
      .call(() => setCurrentOperation("POP completed! Top element removed."))

    // Peek Operation Animation
    .addLabel("peekStart", "+=1")
      .call(() => setCurrentOperation("Starting PEEK operation..."))
      .to(peekRef.current, {
        borderColor: "#3b82f6",
        borderWidth: "3px",
        duration: 0.3
      })
      .to(peekRef.current.children[1], {
        backgroundColor: "#3b82f6",
        color: "#ffffff",
        scale: 1.15,
        boxShadow: "0 0 20px #3b82f6",
        duration: 0.6,
        onStart: () => {
          peekRef.current.children[1].querySelector("span:last-child").textContent = "← PEEKING";
        }
      })
      .to(peekRef.current.children[1], {
        scale: 1,
        backgroundColor: "#dbeafe",
        color: "#1f2937",
        boxShadow: "none",
        duration: 0.4,
        onComplete: () => {
          peekRef.current.children[1].querySelector("span:last-child").textContent = "← TOP";
        }
      })
      .to(peekRef.current, {
        borderColor: "#d1d5db",
        borderWidth: "1px",
        duration: 0.3
      })
      .call(() => setCurrentOperation("PEEK completed! Top element viewed without removal."))

    // isEmpty Check Animation
    .addLabel("isEmptyStart", "+=1")
      .call(() => setCurrentOperation("Checking if stack isEmpty()..."))
      .to(isEmptyRef.current, {
        borderColor: "#8b5cf6",
        borderWidth: "3px",
        duration: 0.3
      })
      .to([...isEmptyRef.current.children], {
        backgroundColor: "#c4b5fd",
        duration: 0.3,
        stagger: 0.1
      })
      .to([...isEmptyRef.current.children], {
        backgroundColor: "#f3f4f6",
        duration: 0.3,
        stagger: 0.1,
        delay: 0.5
      })
      .to(isEmptyRef.current, {
        borderColor: "#d1d5db",
        borderWidth: "1px",
        duration: 0.3
      })
      .call(() => setCurrentOperation("isEmpty() returned FALSE - Stack has elements!"))
      
    .addLabel("complete", "+=1")
      .call(() => setCurrentOperation("All stack operations completed! 🎉"));

    return tl;
  };

  const resetAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    setCurrentOperation("Ready to demonstrate stack operations...");

    // Reset all containers
    [pushRef, popRef, peekRef, isEmptyRef].forEach(ref => {
      if (ref.current) {
        ref.current.style.borderColor = "#d1d5db";
        ref.current.style.borderWidth = "1px";
      }
    });

    // Reset Push section
    [...pushRef.current.children].forEach((box, i) => {
      gsap.set(box, { clearProps: "all" });
      if (i < initialStack.length) {
        box.querySelector("span:first-child").textContent = initialStack[i];
        box.querySelector("span:last-child").textContent = i === initialStack.length - 1 ? "← TOP" : "";
      } else {
        box.querySelector("span:first-child").textContent = "";
        box.querySelector("span:last-child").textContent = "";
        box.style.opacity = "0.3";
        box.style.backgroundColor = "#f9fafb";
      }
    });

    // Reset Pop section
    [...popRef.current.children].forEach((box, i) => {
      gsap.set(box, { clearProps: "all" });
      box.querySelector("span:first-child").textContent = initialStack[i];
      box.querySelector("span:last-child").textContent = i === initialStack.length - 1 ? "← TOP" : "";
    });

    // Reset Peek section
    [...peekRef.current.children].forEach((box, i) => {
      gsap.set(box, { clearProps: "all" });
      box.querySelector("span:first-child").textContent = initialStack[i];
      box.querySelector("span:last-child").textContent = i === initialStack.length - 1 ? "← TOP" : "";
    });

    // Reset isEmpty section
    [...isEmptyRef.current.children].forEach((box, i) => {
      gsap.set(box, { clearProps: "all" });
      box.querySelector("span:first-child").textContent = initialStack[i];
      box.querySelector("span:last-child").textContent = i === initialStack.length - 1 ? "← TOP" : "";
    });

    runAnimation();
  };

  useEffect(() => {
    resetAnimation();
  }, []);

  const renderStackBoxes = (ref, values, extraSlot = false) => (
    <div 
      ref={ref} 
      className="flex flex-col-reverse items-center gap-2 p-4 border border-gray-300 rounded-lg bg-gray-50 min-h-[280px] justify-end"
    >
      {extraSlot && (
        <div className="w-20 h-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 rounded-md opacity-30">
          <span className="text-sm font-bold"></span>
          <span className="text-xs text-gray-500"></span>
        </div>
      )}
      {values.map((value, index) => (
        <div
          key={index}
          className="w-20 h-12 flex flex-col items-center justify-center border-2 border-gray-400 bg-gray-100 rounded-md shadow-sm transition-all duration-200"
        >
          <span className="text-sm font-bold">{value}</span>
          <span className="text-xs text-gray-500">{index === values.length - 1 ? "← TOP" : ""}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Stack Operations Visualization 🥞</h2>
        <button
          onClick={resetAnimation}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          🔄 Reset & Replay
        </button>
      </div>

      {/* Operation Status */}
      <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
        <div className="flex items-center">
          <div className="text-blue-600 font-semibold mr-2">Status:</div>
          <div className="text-blue-800">{currentOperation}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Push Operation */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-green-700">🔺 PUSH Operation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Adding element <strong>{pushValue}</strong> to the top of stack
          </p>
          {renderStackBoxes(pushRef, initialStack, true)}
          <div className="mt-3 p-2 bg-green-50 rounded-md">
            <div className="text-xs text-green-700 font-medium">Time: O(1)</div>
            <div className="text-xs text-green-600">Adds to top only</div>
          </div>
        </div>

        {/* Pop Operation */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-red-700">🔻 POP Operation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Removing top element <strong>{initialStack[initialStack.length - 1]}</strong> from stack
          </p>
          {renderStackBoxes(popRef, initialStack)}
          <div className="mt-3 p-2 bg-red-50 rounded-md">
            <div className="text-xs text-red-700 font-medium">Time: O(1)</div>
            <div className="text-xs text-red-600">Removes from top only</div>
          </div>
        </div>

        {/* Peek Operation */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">👁️ PEEK Operation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Viewing top element <strong>{initialStack[initialStack.length - 1]}</strong> without removal
          </p>
          {renderStackBoxes(peekRef, initialStack)}
          <div className="mt-3 p-2 bg-blue-50 rounded-md">
            <div className="text-xs text-blue-700 font-medium">Time: O(1)</div>
            <div className="text-xs text-blue-600">View only, no change</div>
          </div>
        </div>

        {/* isEmpty Check */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-purple-700">❓ isEmpty() Check</h3>
          <p className="text-sm text-gray-600 mb-4">
            Checking if stack has any elements
          </p>
          {renderStackBoxes(isEmptyRef, initialStack)}
          <div className="mt-3 p-2 bg-purple-50 rounded-md">
            <div className="text-xs text-purple-700 font-medium">Time: O(1)</div>
            <div className="text-xs text-purple-600">Returns boolean</div>
          </div>
        </div>
      </div>

      {/* LIFO Principle Explanation */}
      <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
          🔄 LIFO Principle (Last In, First Out)
        </h3>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">📥</div>
            <div className="text-sm font-medium text-gray-700">Last In</div>
            <div className="text-xs text-gray-500">Most recent element</div>
          </div>
          <div className="text-4xl text-gray-400">→</div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">📤</div>
            <div className="text-sm font-medium text-gray-700">First Out</div>
            <div className="text-xs text-gray-500">Gets removed first</div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Just like a stack of plates - you can only add or remove from the top!
        </p>
      </div>

      {/* Operation Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { op: "PUSH", desc: "Add to top", time: "O(1)", color: "green" },
          { op: "POP", desc: "Remove from top", time: "O(1)", color: "red" },
          { op: "PEEK", desc: "View top element", time: "O(1)", color: "blue" },
          { op: "isEmpty", desc: "Check if empty", time: "O(1)", color: "purple" }
        ].map(({ op, desc, time, color }) => (
          <div key={op} className={`p-3 rounded-lg border-2 border-${color}-200 bg-${color}-50`}>
            <div className={`text-sm font-bold text-${color}-700`}>{op}</div>
            <div className="text-xs text-gray-600">{desc}</div>
            <div className={`text-xs font-mono text-${color}-600`}>{time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackVisualization;