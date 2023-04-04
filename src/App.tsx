import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharactersCard from './components/Characters/CharactersCard';
import Header from './components/Layout/HeaderComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/:id" element={<CharactersCard />} />
    </Routes>
  );
}

export default App;
