import React, { useEffect, useState } from 'react';
import "./App.css";

const TESLA_VIN = import.meta.env.VITE_TESLEMETRY_VIN;
const TESLA_TOKEN = import.meta.env.VITE_TESLEMETRY_TOKEN;


if (!TESLA_VIN || !TESLA_TOKEN) {
  console.error('Tesla VIN or Token is undefined. Please check your environment variables.');
}

const STREAM_URL = `https://api.teslemetry.com/sse/${TESLA_VIN}?token=${TESLA_TOKEN}`;

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const es = new EventSource(STREAM_URL);
    es.onmessage = (event) => {
      try {
        const json = JSON.parse(event.data);
        console.log(json);
        
        setData(json);
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
    <div className="container">
      <h1>Tesla Telemetry</h1>
      <TelemetryDisplay data={data} />
    </div>
  );
}

function TelemetryDisplay({ data }) {
  const speed = data.speed ?? 0;
  const battery = data.battery ?? 0;

  return (
    <div className="telemetry">
      <div className="gauge">
        <div className="needle" style={{ transform: `rotate(${speed * 1.8}deg)` }} />
        <div className="center">{speed} km/h</div>
      </div>
      <div className="battery">
        <div className="level" style={{ width: `${battery}%` }} />
        <span>{battery}%</span>
      </div>
    </div>
  );
}
