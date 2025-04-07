import { useEffect, useRef } from "react";
import gsap from "gsap";

const ArrayVisualization = () => {
  const traversalRef = useRef();
  const accessingRef = useRef();
  const searchingRef = useRef();
  const updatingRef = useRef();
  const insertionRef = useRef();
  const deletionRef = useRef();

  const array = [10, 20, 30, 40, 50];
  const accessedIndex = 2;
  const searchedValue = 40;
  const updatedIndex = 1;
  const updatedValue = 99;
  const insertIndex = 2;
  const insertValue = 25;
  const deleteIndex = 2;

  useEffect(() => {
    const tl = gsap.timeline();

    const traversalBoxes = traversalRef.current.children;
    const accessingBoxes = accessingRef.current.children;
    const searchingBoxes = searchingRef.current.children;
    const updatingBoxes = updatingRef.current.children;
    const insertionBoxes = insertionRef.current.children;
    const deletionBoxes = deletionRef.current.children;

    // Traversal animation
    Array.from(traversalBoxes).forEach((box, index) => {
      tl.to(box, {
        backgroundColor: "#facc15",
        color: "#000",
        duration: 0.4,
      }).to(box, {
        backgroundColor: "#fff",
        color: "#000",
        duration: 0.3,
        delay: 0.2,
      });
    });

    // Accessing animation
    const targetBox = accessingBoxes[accessedIndex];
    tl.to(targetBox, {
      backgroundColor: "#60a5fa",
      color: "#fff",
      boxShadow: "0 0 10px #60a5fa",
      duration: 0.6,
      repeat: 1,
      yoyo: true,
      delay: 1,
    });

    // Searching animation
    Array.from(searchingBoxes).forEach((box) => {
      const value = parseInt(box.children[0].textContent);
      tl.to(box, {
        backgroundColor: "#facc15",
        duration: 0.4,
      });
      if (value === searchedValue) {
        tl.to(box, {
          backgroundColor: "#4ade80",
          duration: 0.5,
        });
      } else {
        tl.to(box, {
          backgroundColor: "#fff",
          duration: 0.3,
        });
      }
    });

    // Updating animation
    const targetUpdateBox = updatingBoxes[updatedIndex];
    const valueSpan = targetUpdateBox.querySelector("span:first-child");
    tl.to(targetUpdateBox, {
      backgroundColor: "#fb923c",
      duration: 1,
      onStart: () => {
        valueSpan.textContent = updatedValue;
      },
    }).to(targetUpdateBox, {
      backgroundColor: "#fff",
      duration: 1,
    });

    // Insertion animation
    for (let i = array.length - 1; i >= insertIndex; i--) {
      const currentBox = insertionBoxes[i];
      const nextBox = insertionBoxes[i + 1];
      const span = nextBox.querySelector("span:first-child");
      tl.to(nextBox, {
        backgroundColor: "#38bdf8",
        duration: 0.4,
        onStart: () => {
          span.textContent = array[i];
        },
      }).to(nextBox, {
        backgroundColor: "#fff",
        duration: 0.2,
      });
    }
    const insertBox = insertionBoxes[insertIndex];
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

    // Deletion animation
    const deleteBox = deletionBoxes[deleteIndex];
    const deleteSpan = deleteBox.querySelector("span:first-child");
    tl.to(deleteBox, {
      backgroundColor: "#f87171",
      duration: 0.5,
      onStart: () => {
        deleteSpan.textContent = "";
      },
    });
    for (let i = deleteIndex + 1; i < array.length; i++) {
      const box = deletionBoxes[i];
      const prevBox = deletionBoxes[i - 1];
      const span = prevBox.querySelector("span:first-child");
      tl.to(prevBox, {
        backgroundColor: "#a78bfa",
        duration: 0.4,
        onStart: () => {
          span.textContent = array[i];
        },
      }).to(prevBox, {
        backgroundColor: "#fff",
        duration: 0.2,
      });
    }
    const lastBox = deletionBoxes[deletionBoxes.length - 1];
    tl.to(lastBox, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      onComplete: () => {
        lastBox.style.display = "none";
      }
    });
  }, []);

  const renderBoxes = (ref, values) => (
    <div ref={ref} className="flex justify-center items-center gap-4 mt-4">
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
    <>
      {/* Traversal */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">🔹 Traversal</h3>
        <p className="text-gray-700 mb-4">
          Traversal means visiting every element in the array one by one using a for loop. Time complexity of <code>O(n)</code>.
        </p>
        {renderBoxes(traversalRef, array)}
        <p className="text-sm text-gray-500 mt-2 text-center">
        Watch how each element is visited sequentially — just like in a loop.
      </p>
      </div>

      {/* Accessing */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Accessing</h3>
        <p className="text-gray-600 mb-4">
          Accessing an element by index takes <code>O(1)</code> time. For example, <code>arr[2]</code> returns the value at index 2.
        </p>
        {renderBoxes(accessingRef, array)}
        <p className="text-center text-gray-600 mt-2">
        We're accessing the element at index <strong>{accessedIndex}</strong> → value <strong>{array[accessedIndex]}</strong> gets highlighted.
      </p>
      </div>

      {/* Searching */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Searching</h3>
        <p className="text-gray-600 mb-4">
          In a <strong>linear search</strong>, we check each element one by one until we find a match. Time complexity is <code>O(n)</code>.
        </p>
        {renderBoxes(searchingRef, array)}
        <p className="text-sm text-gray-600 mt-2 text-center">
        Searching for value <strong>{searchedValue}</strong> — each element is checked until it's found.
      </p>
      </div>

      {/* Updating */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Updating</h3>
        <p className="text-gray-600 mb-4">
          Updating means changing the value at a specific index. Since we know the index, this also takes <code>O(1)</code> time.
        </p>
        {renderBoxes(updatingRef, array)}
        
      </div>

      {/* Insertion */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Insertion</h3>
        <p className="text-gray-600 mb-4">
          Inserting at index <strong>{insertIndex}</strong> means shifting elements to the right to make space. Time complexity is <code>O(n)</code>.
          <br />
          <span className="italic text-sm">👇 See how we need to shift elements for insertion? This makes arrays inefficient for frequent inserts — which is where Linked Lists shine!</span>
        </p>
        {renderBoxes(insertionRef, [...array, null])}
      </div>

      {/* Deletion */}
      <div className="mt-10 mb-20">
        <h3 className="text-xl font-semibold mb-2">🔹 Deletion</h3>
        <p className="text-gray-600 mb-4">
          Deleting at index <strong>{deleteIndex}</strong> requires shifting elements to the left. Time complexity is <code>O(n)</code>.
          <br />
          <span className="italic text-sm">⚠️ See how deletion causes a gap, which we fill by shifting? Arrays aren't ideal for frequent deletions either.</span>
        </p>
        {renderBoxes(deletionRef, array)}
      </div>
    </>
  );
};

export default ArrayVisualization;
