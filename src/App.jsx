import React from 'react';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection.jsx';
const App = () => {

  return (
    <>
      <main className='p-2 max-w-[100vw] h-screen'>
        <Header />
        <Hero />
        <IntroSection />
      </main>
      <Cursor />
    </>
  );
};

export default App;
