import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heroe from './Elements/Heroe';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <App />
          } />
          <Route path="/heroe/:id" element={
            <Heroe />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));