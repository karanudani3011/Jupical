import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <CompanySection />
        <BeforeAfter />
        <Clients />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
