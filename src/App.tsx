import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

function App() {
  return (
    <Container>
      <ToastContainer />
      <Header />
      <Home />
      <About />
      <Calendar />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
