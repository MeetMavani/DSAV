import { useEffect, useRef } from "react";
import gsap from "gsap";

const LinkedListVisualization = () => {
  const traversalRef = useRef();
  const accessingRef = useRef();
  const insertingRef = useRef();
  const deletingRef = useRef();

  const list = [10, 20, 30, 40];
  const accessIndex = 2;
  const insertIndex = 2;
  const insertValue = 25;
  const deleteIndex = 1;

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Traversal
    const traversalBoxes = traversalRef.current.children;
    Array.from(traversalBoxes).forEach((box) => {
      tl.to(box, {
        backgroundColor: "#facc15",
        color: "#000",
        scale: 1.1,
        boxShadow: "0 0 20px #facc15",
        duration: 0.4,
      }).to(box, {
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        scale: 1,
        duration: 0.3,
        delay: 0.2,
      });
    });

    // Accessing
    const accessBox = accessingRef.current.children[accessIndex];
    tl.to(accessBox, {
      backgroundColor: "#60a5fa",
      color: "#fff",
      boxShadow: "0 0 20px #60a5fa",
      scale: 1.1,
      duration: 0.6,
      repeat: 1,
      yoyo: true,
      delay: 0.5,
    });

    // Insertion
    const insertBoxes = insertingRef.current.children;
    for (let i = list.length - 1; i >= insertIndex; i--) {
      const currentBox = insertBoxes[i];
      const nextBox = insertBoxes[i + 1];
      const span = nextBox.querySelector("span:first-child");
      tl.to(nextBox, {
        backgroundColor: "#38bdf8",
        duration: 0.4,
        onStart: () => {
          span.textContent = list[i];
        },
      }).to(nextBox, {
        backgroundColor: "#fff",
        duration: 0.2,
      });
    }
    const insertBox = insertBoxes[insertIndex];
    const insertSpan = insertBox.querySelector("span:first-child");
    tl.to(insertBox, {
      backgroundColor: "#4ade80",
      duration: 0.5,
      onStart: () => {
        insertSpan.textContent = insertValue;
      },
    }).to(insertBox, {
      backgroundColor: "#fff",
      duration: 0.5,
    });

    // Deletion
    const deleteBoxes = deletingRef.current.children;
    const deleteBox = deleteBoxes[deleteIndex];
    const deleteSpan = deleteBox.querySelector("span:first-child");
    tl.to(deleteBox, {
      backgroundColor: "#f87171",
      duration: 0.5,
      onStart: () => {
        deleteSpan.textContent = "";
      },
    });
    for (let i = deleteIndex + 1; i < list.length; i++) {
      const box = deleteBoxes[i];
      const prevBox = deleteBoxes[i - 1];
      const span = prevBox.querySelector("span:first-child");
      tl.to(prevBox, {
        backgroundColor: "#a78bfa",
        duration: 0.4,
        onStart: () => {
          span.textContent = list[i];
        },
      }).to(prevBox, {
        backgroundColor: "#fff",
        duration: 0.2,
      });
    }
    const lastBox = deleteBoxes[deleteBoxes.length - 1];
    tl.to(lastBox, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      onComplete: () => {
        lastBox.style.display = "none";
      },
    });
  }, []);

  const renderBoxes = (ref, values) => (
    <div ref={ref} className="flex justify-center items-center gap-4 mt-4 flex-wrap">
      {values.map((value, index) => (
        <div
          key={index}
          className="w-16 h-16 flex flex-col items-center justify-center border border-gray-700 bg-white rounded-md shadow-md"
        >
          <span className="text-lg font-bold">{value}</span>
          <span className="text-xs text-gray-500">Index {index}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Traversal */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">🔹 Traversal</h3>
        <p className="text-gray-700 mb-4">
          In linked lists, traversal is done node by node using next pointers. It takes <code>O(n)</code> time.
        </p>
        {renderBoxes(traversalRef, list)}
        <p className="text-sm text-gray-500 mt-2 text-center">
          Watch each node visited one-by-one — unlike arrays, we can't directly access index.
        </p>
      </div>

      {/* Accessing */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Accessing</h3>
        <p className="text-gray-600 mb-4">
          In a linked list, accessing a value at index <strong>{accessIndex}</strong> takes <code>O(n)</code> time since we must traverse from the head.
        </p>
        {renderBoxes(accessingRef, list)}
      </div>

      {/* Insertion */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Insertion</h3>
        <p className="text-gray-600 mb-4">
          Inserting a node at index <strong>{insertIndex}</strong> requires updating pointers. Time complexity is <code>O(n)</code> for locating the index.
        </p>
        {renderBoxes(insertingRef, [...list, null])}
      </div>

      {/* Deletion */}
      <div className="mt-10 mb-20">
        <h3 className="text-xl font-semibold mb-2">🔹 Deletion</h3>
        <p className="text-gray-600 mb-4">
          Deleting a node at index <strong>{deleteIndex}</strong> involves skipping the node using pointers. Time complexity is <code>O(n)</code>.
        </p>
        {renderBoxes(deletingRef, list)}
      </div>
    </div>
  );
};

export default LinkedListVisualization;