import { Route, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Trips page summarises trip history and will eventually pull data from
 * IndexedDB. Currently it shows placeholder content and hints at
 * forthcoming analytics like energy consumption charts and mileage
 * statistics.
 */
export default function Trips() {
  return (
    <div className="p-card" data-testid="trips">
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Trip History
      </h2>
      <p className="text-muted-foreground">
        Your trips will appear here once you start driving.
      </p>
      <ul className="mt-6 space-y-3">
        {/* Example placeholder trips */}
        {[1, 2, 3].map((id) => (
          <li key={id}>
            <Card className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Route className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Trip {id}</p>
                  <p className="text-lg font-medium text-foreground">0 km</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground text-xs">
                <Clock size={16} />
                <span>--/--/----</span>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}