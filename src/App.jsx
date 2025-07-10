import React, { useEffect, useState } from 'react';
import liff from '@line/liff';
import "./App.css";

const LIFF_ID = import.meta.env.VITE_LIFF_ID;
const STREAM_URL = import.meta.env.VITE_STREAM_URL;

export default function App() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function init() {
      try {
        await liff.init({ liffId: LIFF_ID });
        setReady(true);
      } catch (err) {
        console.error('LIFF init failed', err);
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (!ready) return;
    const es = new EventSource(STREAM_URL);
    es.onmessage = (event) => {
      try {
        const json = JSON.parse(event.data);
        setData(json);
      } catch (err) {
        console.error('Failed to parse SSE message', err);
      }
    };
    return () => es.close();
  }, [ready]);

  return (
    <div className="container">
      <h1>Tesla Telemetry</h1>
      {ready ? (
        <TelemetryDisplay data={data} />
      ) : (
        <p>Initializing LIFF...</p>
      )}
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
