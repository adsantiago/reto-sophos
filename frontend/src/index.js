import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Elements/Hero';
import Container from './Elements/Container';
import Villains from './Elements/Villains';
import Villain from './Elements/Villain';
import Fight from './Elements/Fight';

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
            <Route path="/villains/" element={
              <Villains />
            } />
            <Route path="/villain/:id" element={
              <Villain />
            } />
            <Route path="/fight/" element={
              <Fight />
            } />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));