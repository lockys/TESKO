import useTeslaSSE from "../hooks/useTeslaSSE.js"
import { GaugeCircle, Compass, MapPin } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

/**
 * Dashboard page displays real‑time telemetry data such as vehicle speed,
 * heading and geographic position. Widgets are styled as cards with
 * consistent padding and rounded corners to follow the design guide.
 */
export default function Dashboard() {
  const { speed, heading, location } = useTeslaSSE()
  return (
    <div className="flex flex-col gap-6 p-card" data-testid="dashboard">
      <h2 className="text-2xl font-semibold text-foreground">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Speed widget */}
        <Card className="flex flex-col items-center">
          <CardHeader>
            <GaugeCircle className="text-primary mb-2" size={28} />
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-extrabold text-primary">
              {speed.toFixed(0)}
            </p>
            <span className="text-xs text-muted-foreground">km/h</span>
          </CardContent>
        </Card>
        {/* Heading widget */}
        <Card className="flex flex-col items-center">
          <CardHeader>
            <Compass className="text-primary mb-2" size={28} />
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              Heading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-extrabold text-primary">
              {heading.toFixed(0)}
            </p>
            <span className="text-xs text-muted-foreground">°</span>
          </CardContent>
        </Card>
        {/* Location widget */}
        <Card className="flex flex-col items-center">
          <CardHeader>
            <MapPin className="text-primary mb-2" size={28} />
            <CardTitle className="text-xs uppercase tracking-wide text-muted-foreground">
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold text-primary">
              {location.lat.toFixed(4)}, {location.lon.toFixed(4)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}