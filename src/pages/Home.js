import React from 'react';
import {
  Ads,
  Navbar,
  ControlButtons,
  Timer,
  Footer
} from '../components';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Timer />
      <ControlButtons />
      <Ads />
      <Footer />
    </main>
  )
}
