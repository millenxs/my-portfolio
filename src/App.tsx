import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
		  <Route path="/cards" element={<Cards />} />
        </Routes>
		<Footer />
      </div>
    </Router>
  )
}