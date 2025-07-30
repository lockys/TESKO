import { GaugeCircle, MapPin, History, Users } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function TabBar({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "dashboard", icon: GaugeCircle, label: "Dashboard" },
    { key: "trips", icon: History, label: "Trips" },
    { key: "map", icon: MapPin, label: "Map" },
    { key: "social", icon: Users, label: "Social" },
  ]

  return (
    <nav
      className="left-0 right-0 w-full h-16 flex justify-around items-center bg-card/90 backdrop-blur shadow-lg"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      data-testid="tabbar"
    >
      <ToggleGroup
        type="single"
        value={activeTab}
        onValueChange={(value) => {
          if (value) setActiveTab(value)
        }}
        className="w-full h-full"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <ToggleGroupItem
              key={tab.key}
              value={tab.key}
              className="flex flex-col items-center justify-center flex-1 h-full focus:outline-none transition-all duration-200 ease-in-out data-[state=on]:text-primary"
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{tab.label}</span>
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>
    </nav>
  )
}