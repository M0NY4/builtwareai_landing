import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ParticleField from './components/ui/ParticleField';
import MeshGradient from './components/ui/MeshGradient';
import ChatBot from './components/ui/ChatBot';
import SEO from './components/ui/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="relative min-h-screen overflow-x-hidden">
            <SEO />
            <MeshGradient />
            <ParticleField count={80} className="fixed inset-0" />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ChatBot />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
