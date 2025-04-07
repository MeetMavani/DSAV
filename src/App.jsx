import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DataStructures from './pages/DataStructures';
import Algorithms from './pages/Algorithms';
import BubbleSort from './pages/Sort/BubbleSort';
import QuickSort from './pages/Sort/QuickSort';
import Array from './pages/DataStructures/Array'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datastructures" element={<DataStructures />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/BubbleSort" element={<BubbleSort />} />
        <Route path="/QuickSort" element={<QuickSort />} />
        <Route path="/Array" element={<Array />} />
      </Routes>
    </Router>
  );
};

export default App;
