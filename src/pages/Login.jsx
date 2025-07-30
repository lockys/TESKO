import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import logo from '../../public/pwa-192x192.png'

/**
 * Login page triggers Tesla OAuth2 PKCE authentication. It receives
 * a callback to notify the parent component once the user initiates
 * the login flow. The actual OAuth steps should be handled in a
 * dedicated authentication module to avoid exposing client secrets.
 *
 * @param {Object} props
 * @param {Function} props.onLogin - Called when the user clicks the login button
 */
export default function Login({ onLogin }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="items-center text-center">
          <img
            src={logo}
            alt="TESKO logo"
            className="h-12 w-12 mb-4"
          />
          <CardTitle className="text-3xl font-bold text-primary">
            Welcome to TESKO
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600">
            To access your vehicle data and personalise your dashboard, please
            authenticate with your Tesla account. We use Tesla&apos;s OAuth2
            PKCE flow to securely obtain and refresh your access token.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="button" onClick={onLogin}>
            Login with Tesla
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}