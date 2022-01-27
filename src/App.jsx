import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';

import './app.css';

/**
 * App
 * Handling web app routes
 * @returns routes
 */
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
