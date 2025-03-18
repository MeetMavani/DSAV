import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>DSA Visualizer</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/datastructures">Data Structures</Link></li>
        <li><Link to="/algorithms">Algorithms</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



