import { useEffect } from 'react';
import Aos, { init } from 'aos';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/hero';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
  <>
    <Header />
      <main>
        <Hero />
      </main>
    <Footer />
  </>
  );
}

export default App;
