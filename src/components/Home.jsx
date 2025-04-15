import StaryBackground from './StarryBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen  text-white overflow-hidden">
      <StaryBackground />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
          DSAV
        </h1>
        <p className="text-lg max-w-2xl text-gray-300">
          Visualize and understand Data Structures and Algorithms in action!
        </p>
      </div>

      {/* Info Sections */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-16 pb-20">

        <section>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">📦 What are Data Structures?</h3>
          <p className="text-gray-300 leading-relaxed">
            Data Structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently.
            They provide a means to manage large amounts of data for use in databases and internet indexing services.
            Examples of data structures include arrays, linked lists, stacks, queues, trees, and graphs.
            Each data structure has its own strengths and weaknesses, making them suitable for different types of tasks.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-green-400">🧠 What are Algorithms?</h3>
          <p className="text-gray-300 leading-relaxed">
            Algorithms are step-by-step procedures or formulas for solving problems.
            They are the heart of computer science, enabling computers to perform tasks ranging from simple calculations to complex operations.
            Understanding algorithms is crucial because they define how data structures interact, and they help optimize performance.
            Examples include sorting algorithms like Bubble Sort and Quick Sort, searching algorithms like Binary Search, and graph algorithms like Dijkstra’s algorithm.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-purple-400">🎯 Aim of the DSA Visualizer</h3>
          <p className="text-gray-300 leading-relaxed">
            The aim of this visualizer is to provide an interactive platform for users to visualize various data structures and algorithms in action.
            By observing how these structures and algorithms work, users can gain a deeper understanding of their operations and performance.
            This tool serves as an educational resource for students and enthusiasts to enhance their learning experience and improve their coding skills.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
