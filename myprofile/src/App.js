import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <p>{t.footer.copy} · {new Date().getFullYear()}</p>
    </footer>
  );
}

function AppContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Hobbies />
      </main>
      <Footer />
      <LanguageSwitcher />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
