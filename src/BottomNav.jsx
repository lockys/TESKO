import React from 'react';
import { TelemetryIcon, ControlsIcon, ClimateIcon, LocationIcon } from './Icons';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="#" className="nav-item active">
        <TelemetryIcon />
        <span className="label">Telemetry</span>
      </a>
      <a href="#" className="nav-item">
        <ControlsIcon />
        <span className="label">Controls</span>
      </a>
      <a href="#" className="nav-item">
        <ClimateIcon />
        <span className="label">Climate</span>
      </a>
      <a href="#" className="nav-item">
        <LocationIcon />
        <span className="label">Location</span>
      </a>
    </nav>
  );
}

export default BottomNav;
