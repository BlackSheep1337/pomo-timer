import React from 'react';
import './App.css';
import ControlButtons from './ControlButtons';
import Navbar from './Navbar';
import TimeButtons from './TimeButtons';
import Timer from './Timer';
import Ads from './Ads';
import Footer from './Footer';

export default function App() {
  return (
    <main>
      <Navbar />
      <TimeButtons />
      <Timer />
      <ControlButtons />
      <Ads />
      <Footer />
    </main>
  )
}
