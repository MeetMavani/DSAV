import StaryBackground from './StarryBackground'
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <StaryBackground />
      <h1>DSAV</h1>
      <p>Visualize and understand data structures and algorithms in action!</p>
      
      <h3>What are Data Structures?</h3>
      <p>
        Data Structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently.
        They provide a means to manage large amounts of data for use in databases and internet indexing services. 
        Examples of data structures include arrays, linked lists, stacks, queues, trees, and graphs. 
        Each data structure has its own strengths and weaknesses, making them suitable for different types of tasks.
      </p>
      
      <h3>What are Algorithms?</h3>
      <p>
        Algorithms are step-by-step procedures or formulas for solving problems. 
        They are the heart of computer science, enabling computers to perform tasks ranging from simple calculations to complex operations. 
        Understanding algorithms is crucial because they define how data structures interact, and they help optimize performance. 
        Examples include sorting algorithms like Bubble Sort and Quick Sort, searching algorithms like Binary Search, and graph algorithms like Dijkstra’s algorithm.
      </p>

      <h3>Aim of the DSA Visualizer</h3>
      <p>
        The aim of this visualizer is to provide an interactive platform for users to visualize various data structures and algorithms in action. 
        By observing how these structures and algorithms work, users can gain a deeper understanding of their operations and performance.
        This tool serves as an educational resource for students and enthusiasts to enhance their learning experience and improve their coding skills.
      </p>
    </div>
  );
};

export default Home;
