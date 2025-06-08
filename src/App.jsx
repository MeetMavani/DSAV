import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DataStructures from './pages/DataStructures';
import Algorithms from './pages/Algorithms';
import BubbleSort from './pages/Sort/BubbleSort';
import QuickSort from './pages/Sort/QuickSort';
import SelectionSort from './pages/Sort/SelectionSort'
import InsertionSort from './pages/Sort/InsertionSort'
import MergeSort from './pages/Sort/MergeSort'
import Array from './pages/DataStructures/Array'
import LinearSearch from './pages/Algorithms/Search/LinearSearch';
import BinarySearch from './pages/Algorithms/Search/BinarySearch';
import LinkedList from './pages/DataStructures/LinkedList';



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
        <Route path="/SelectionSort" element={<SelectionSort />} />
        <Route path="/InsertionSort" element={<InsertionSort />} />
        <Route path="/MergeSort" element={<MergeSort />} />
        <Route path="/Array" element={<Array />} />
        <Route path="/LinearSearch" element={<LinearSearch />} />
        <Route path="/BinarySearch" element={<BinarySearch />} />
        <Route path="/LinkedList" element={<LinkedList />} />
      </Routes>
    </Router>
  );
};

export default App;
