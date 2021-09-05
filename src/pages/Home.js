import React from 'react';
import {
  Ads,
  Navbar,
  ControlButtons,
  Timer,
  Footer,
  TimeButtons
} from '../components';

export default function Home() {
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
