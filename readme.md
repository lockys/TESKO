# Tesla LIFF React App

This project demonstrates how to build a LIFF application using React and Vite.
It connects to [Teslemetry](https://teslemetry.com) via Server Sent Events to display
live data from a Tesla vehicle.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Set up environment variables in `.env`
   ```env
   VITE_LIFF_ID=YOUR_LIFF_ID
   VITE_STREAM_URL=https://teslemetry.com/api/stream
   ```
3. Start the development server
   ```bash
   npm run dev
   ```

The app will initialize LIFF and start listening to the SSE stream. Vehicle
speed and battery level are visualised on screen.
