import Navbar from '../components/navbar';
import photo from '../assets/Travel_Lonesome.jpg';

import './home.css';

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
      <img src={photo} alt="" />
    </main>
  );
}
