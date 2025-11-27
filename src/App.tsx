import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthcareProfessionalConsultancy from './pages/HealthcareProfessionalConsultancy';
import QHealth from './pages/QHealth';
import Longevity from './pages/Longevity';
import About from './pages/About';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/healthcare-professional-consultancy" element={<HealthcareProfessionalConsultancy />} />
            <Route path="/qhealth" element={<QHealth />} />
            <Route path="/longevity" element={<Longevity />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
