import React from 'react';
import Gallery from './Gallery';
import '../styles/App.css';

function App() {
  return (
    <div>
        <div className="title-section">
            <h1>Pokelist App</h1>
        </div>
        <div>
            <Gallery/>
        </div>
    </div>
  );
}

export default App;
