import React, { useEffect, useState } from 'react';
import ReloadPrompt from './ReloadPrompt';
import BottomNav from './BottomNav';
import { FadeIn, SlideIn, ScaleIn } from './AnimatedElements';
import "./App.css";

const TESLA_VIN = import.meta.env.VITE_TESLEMETRY_VIN;
const TESLA_TOKEN = import.meta.env.VITE_TESLEMETRY_TOKEN;

if (!TESLA_VIN || !TESLA_TOKEN) {
  console.error('Tesla VIN or Token is undefined. Please check your environment variables.');
}

const STREAM_URL = `https://api.teslemetry.com/sse/${TESLA_VIN}?token=${TESLA_TOKEN}`;

function TelemetryCard({ label, value }) {
  return (
    <div className="telemetry-card">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

function TelemetryDisplay({ data }) {
  const { speed, soc, odometr, gear } = data;

  const telemetryItems = [
    { label: "Speed", value: `${speed || 0} mph` },
    { label: "State of Charge", value: `${soc || 0}%` },
    { label: "Odometer", value: `${Math.round(odometr || 0)} mi` },
    { label: "Gear", value: gear || 'P' },
  ];

  return (
    <div className="telemetry-grid">
      {telemetryItems.map((item, index) => (
        <SlideIn key={item.label} delay={index * 0.1} from="bottom">
          <TelemetryCard label={item.label} value={item.value} />
        </SlideIn>
      ))}
    </div>
  );
}

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const es = new EventSource(STREAM_URL);
    es.onmessage = (event) => {
      try {
        const json = JSON.parse(event.data);
        setData(prevData => ({ ...prevData, ...json }));
      } catch (err) {
        console.error('Failed to parse SSE message', err);
      }
    };
    es.onerror = (err) => {
      console.error('SSE connection error', err);
    };
    return () => es.close();
  }, []);

  return (
    <>
      <header>
        <h1>Tesla Telemetry</h1>
      </header>
      <main className="container">
        <TelemetryDisplay data={data} />
      </main>
      <BottomNav />
      <ReloadPrompt />
    </>
  );
}

