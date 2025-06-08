import { useEffect, useRef } from "react";
import gsap from "gsap";

const PointerStructure = () => {
  const nodeRefs = useRef([]);
  const timelineRef = useRef(null);

  const animatePointers = () => {
    const tl = gsap.timeline({ delay: 0.5 });
    timelineRef.current = tl;

    nodeRefs.current.forEach((node, i) => {
      const arrow = node.querySelector(".arrow");
      tl.to(arrow, {
        color: "#3b82f6",
        scale: 1.2,
        duration: 0.4,
      }).to(arrow, {
        color: "#6b7280",
        scale: 1,
        duration: 0.3,
        delay: 0.2,
      });
    });
  };

  const resetAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    nodeRefs.current.forEach((node) => {
      const arrow = node.querySelector(".arrow");
      if (arrow) {
        arrow.style.color = "#6b7280";
        arrow.style.transform = "scale(1)";
      }
    });

    animatePointers();
  };

  useEffect(() => {
    animatePointers();
  }, []);

  const nodeData = [10, 20, 30];

  return (
    <section className="my-12 px-4">
      <div className="flex justify-start items-center mb-4">
        <h3 className="text-xl font-semibold">🔹 Pointer Structure in Linked Lists</h3>
        <button
          onClick={resetAnimation}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded shadow"
        >
          🔄
        </button>
      </div>

      <p className="text-gray-700 mb-4">
        Each node in a linked list stores two parts: the data and a pointer to the next node. The last node's pointer is <code>null</code>.
      </p>

      <div className="flex items-center gap-4 overflow-x-auto">
        {nodeData.map((value, i) => (
          <div
            key={i}
            className="flex items-center gap-2"
            ref={(el) => (nodeRefs.current[i] = el)}
          >
            <div className="flex w-24 h-16 border rounded-md shadow bg-white">
              <div className="w-1/2 flex items-center justify-center border-r">
                <span className="font-bold text-gray-800">{value}</span>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <span className="text-sm text-gray-500">ptr</span>
              </div>
            </div>
            {i < nodeData.length - 1 ? (
              <span className="arrow text-2xl text-gray-500">→</span>
            ) : (
              <span className="arrow text-sm text-gray-500 italic">null</span>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-center mt-4 text-gray-500">
        Diagram: Each box holds <code>[data | pointer]</code> linking to the next node.
      </p>
    </section>
  );
};

export default PointerStructure;
