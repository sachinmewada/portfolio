import React, { useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
  useEffect(() => {
    Aos.init();

  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Sachin Mewada. Built with Passion & React.</p>
      </footer>
    </>
  );
};

export default App;