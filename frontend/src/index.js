import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Elements/Hero';
import Container from './Elements/Container';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={
              <App />
            } />
            <Route path="/hero/:id" element={
              <Hero />
            } />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));