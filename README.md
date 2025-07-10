# Tesla LIFF App

This is a lightweight React web app that integrates with the LINE Front-end Framework (LIFF) and streams real-time Tesla data using [Teslemetry](https://teslemetry.com/). The UI is designed to feel close to a native application while being deployable as a simple static site.

## Features

- **LIFF Integration** – Connects to Line so you can launch the app inside Line chats.
- **Real-time Telemetry** – Connects to Teslemetry's SSE API and displays speed and battery levels.
- **Simple Gauges** – Speed and battery values are visualized with animated gauges.

## Setup

1. Replace `YOUR_LIFF_ID` in `app.jsx` with your LIFF ID from the Line Developers console.
2. Update the `EventSource` URL in `app.jsx` if your Teslemetry SSE endpoint differs.
3. Host the files on any static web server (e.g., GitHub Pages or your own server).
4. Open `index.html` in a modern browser or inside Line to see live data.

## Development

No build step is required. React and Babel are loaded from CDN for convenience. If you prefer a bundled setup (e.g., using Vite), you can migrate the code accordingly.
