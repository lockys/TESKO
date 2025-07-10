const { useState, useEffect } = React;

function SpeedGauge({ speed }) {
  const percent = Math.min(speed, 150) / 150 * 100;
  return (
    <div className="gauge">
      <div className="gauge-bar" style={{ width: percent + '%' }} />
      <div className="gauge-label">{speed} km/h</div>
    </div>
  );
}

function BatteryGauge({ battery }) {
  const percent = Math.min(battery, 100);
  return (
    <div className="battery">
      <div className="battery-level" style={{ width: percent + '%' }} />
      <div className="battery-label">{battery}%</div>
    </div>
  );
}

function App() {
  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        await liff.init({ liffId: 'YOUR_LIFF_ID' });
      } catch (err) {
        console.error('LIFF init failed', err);
      }
    }
    init();

    const source = new EventSource('https://teslemetry.com/api/sse');
    source.onmessage = e => {
      try {
        const data = JSON.parse(e.data);
        setSpeed(data.speed || 0);
        setBattery(data.battery || 0);
      } catch (err) {
        console.error('Invalid data', err);
      }
    };
    source.onerror = err => {
      console.error('SSE error', err);
      setError('SSE connection error');
      source.close();
    };
    return () => source.close();
  }, []);

  return (
    <div>
      <h1>Tesla Live Telemetry</h1>
      <SpeedGauge speed={speed} />
      <BatteryGauge battery={battery} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
