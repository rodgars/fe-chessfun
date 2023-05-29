import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayRandomMoveEngine from './components/PlayRandomMoveEngine/Chess'

// const apiBaseUrl = process.env.API_BASE_URL;

function App() {
  
  return (
    <div className="centered-div">
      <PlayRandomMoveEngine />
    </div>
  );
}

export default App;
