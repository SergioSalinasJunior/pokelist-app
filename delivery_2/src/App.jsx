import React from 'react';
import Gallery from './components/Gallery';
import Form from './components/Form';
import './styles/App.css';

function App() {
  return (
    <div>
        <div className="title-section">
            <h1>Pokelist App</h1>
        </div>
        <Form/>
        <Gallery/>
    </div>
  );
}

export default App;
