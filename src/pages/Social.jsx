import { User2, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Social page serves as the community hub where users can share posts
 * and comments about charging experiences and road strategies. This
 * placeholder anticipates a card‑based layout with interaction support.
 */
export default function Social() {
  return (
    <div className="p-card" data-testid="social">
      <h2 className="text-2xl font-semibold text-foreground mb-2">Community</h2>
      <p className="text-muted-foreground mb-4">
        Share your experiences, ask questions and connect with other drivers.
        Posts and comments will live here.
      </p>
      {/* Placeholder posts */}
      {[1, 2].map((post) => (
        <Card key={post} className="mb-4">
          <CardHeader className="flex flex-row items-center gap-2">
            <User2 className="text-primary" size={20} />
            <CardTitle className="font-medium text-foreground">
              User {post}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-start gap-2 text-muted-foreground text-sm">
            <MessageCircle className="mt-0.5" size={16} />
            <p>
              This is a placeholder post. Real discussions will show up once the
              feature is implemented.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}