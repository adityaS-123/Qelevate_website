import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthcareProfessionalConsultancy from './pages/HealthcareProfessionalConsultancy';
import QHealth from './pages/QHealth';
import QSleep from './pages/QSleep';
import Longevity from './pages/Longevity';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/healthcare-professional-consultancy" element={<HealthcareProfessionalConsultancy />} />
            <Route path="/qhealth" element={<QHealth />} />
            <Route path="/qsleep" element={<QSleep />} />
            <Route path="/longevity" element={<Longevity />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
