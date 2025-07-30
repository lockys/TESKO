import { useEffect, useState } from 'react'

/**
 * Custom hook to subscribe to Tesla telemetry via Server‑Sent Events (SSE).
 *
 * The Tesla API does not provide SSE endpoints directly, therefore this hook
 * assumes the presence of a backend proxy (such as Teslemetry) that streams
 * JSON events containing `Location`, `GpsHeading` and `VehicleSpeed` fields.
 *
 * For now this hook returns mock values to illustrate the wiring. When
 * integrating with a real SSE endpoint simply replace the mock interval with
 * an EventSource pointed at your backend. See the commented code inside
 * the useEffect.
 */
export default function useTeslaSSE() {
  const [data, setData] = useState({
    speed: 0,
    heading: 0,
    location: { lat: 0, lon: 0 },
  })

  useEffect(() => {
    // Example: connect to an SSE endpoint streaming telemetry data.
    // const es = new EventSource('/api/sse')
    // es.onmessage = (event) => {
    //   const payload = JSON.parse(event.data)
    //   setData({
    //     speed: payload.VehicleSpeed,
    //     heading: payload.GpsHeading,
    //     location: {
    //       lat: payload.Location.latitude,
    //       lon: payload.Location.longitude,
    //     },
    //   })
    // }
    // return () => {
    //   es.close()
    // }

    // Mock implementation: update values every second
    const interval = setInterval(() => {
      setData((prev) => {
        // increment speed up to 120 then loop
        const nextSpeed = (prev.speed + 5) % 120
        // rotate heading
        const nextHeading = (prev.heading + 10) % 360
        // shift location slightly
        const nextLat = prev.location.lat + 0.0001
        const nextLon = prev.location.lon + 0.0001
        return {
          speed: nextSpeed,
          heading: nextHeading,
          location: { lat: nextLat, lon: nextLon },
        }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return data
}