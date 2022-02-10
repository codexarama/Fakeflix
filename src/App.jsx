import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './Home';
import Video from './components/Video';
import Footer from './components/Footer';
import Error from './Error';

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
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
