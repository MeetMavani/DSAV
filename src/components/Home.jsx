import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import StaryBackground from './StarryBackground';
import Login from '../pages/Login';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        setShowLogin(false); // Close login modal if user is authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <StaryBackground />

      {/* Navigation Bar */}
      <nav className="relative z-20 flex justify-between items-center px-6 py-4">
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-green-400 font-extrabold text-sm">
                Welcome, {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#00ffff] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00cccc] transition-colors duration-200"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* User Status Indicator */}
      {user && (
        <div className="relative z-10 text-center py-2">
          <div className="inline-flex items-center gap-2 bg-green-200 bg-opacity-20 text-green-400 px-4 py-2 rounded-full border border-green-500">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">You are logged in</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12 pb-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
          DSAV
        </h1>
        <p className="text-lg max-w-2xl text-gray-300">
          Visualize and understand Data Structures and Algorithms in action!
        </p>
        
        {user && (
          <div className="mt-6 p-4 bg-blue-500 bg-opacity-20 rounded-lg border border-blue-200">
            <p className="text-gray-300 font-medium">
              🎉 Ready to explore Data Structures and Algorithms!
            </p>
          </div>
        )}
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
            Examples include sorting algorithms like Bubble Sort and Quick Sort, searching algorithms like Binary Search, and graph algorithms like Dijkstra's algorithm.
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

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && !user && (
          <Login onClose={() => setShowLogin(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;