import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <ThemeProvider>
    <Navbar />
    <Content />
    <Footer />
  </ThemeProvider>
);

export default App;
