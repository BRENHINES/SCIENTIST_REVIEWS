import React from 'react';
import Destinations from './components/reviews';
import Description from './components/Description';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Selects from './components/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Destinations />
      <Selects />
      <Footer />
    </div>
  );
}

export default App;