import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Map page will display nearby charging stations along with their
 * busy levels. For now it contains placeholder content because
 * implementing interactive maps requires additional libraries (e.g. Leaflet).
 */
export default function Map() {
  return (
    <div className="p-card" data-testid="map">
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Charging Stations
      </h2>
      <p className="text-muted-foreground">
        A map of nearby charging stations will appear here. Each marker will
        indicate the current busy level, and you&apos;ll be able to report
        congestion to help other drivers.
      </p>
      {/* Placeholder card representing the map */}
      <Card className="mt-6 flex flex-col items-center justify-center h-64">
        <CardHeader>
          <MapPin className="text-primary mb-2" size={32} />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Map Placeholder</p>
        </CardContent>
      </Card>
    </div>
  )
}