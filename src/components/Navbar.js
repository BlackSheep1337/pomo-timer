import React from 'react';
import { Nav } from './styles';

export default function Navbar() {
  return (
    <Nav>
      <h1>Pomo-Timer</h1>
      <div className="nav-menu">
        <button>
          Log
        </button>
        <button>
          FAQ
        </button>
        <button>
          SETTINGS
        </button>
      </div>
    </Nav>
  )
}
