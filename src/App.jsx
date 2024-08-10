import React from 'react';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {

  return (
    <main className='wrapper p-2 overflow-hidden relative max-w-[100vw] h-screen'>
      <Header />
      <Hero />
      <Cursor />
    </main>
  );
};

export default App;
