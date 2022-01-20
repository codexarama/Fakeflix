import Navbar from '../components/navbar';
import Feature from '../components/feature';

import './home.css';

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
      <Feature />
    </main>
  );
}
