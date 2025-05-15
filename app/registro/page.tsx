import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Artesanías Únicas</h1>
          <p className="text-gray-600 mt-2">Descubre piezas artesanales con historia</p>
        </div>

        <Card className="w-full bg-white border-[#E5E5E5]">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Crear cuenta</CardTitle>
            <CardDescription className="text-center">Ingresa tus datos para registrarte</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre" className="bg-white border-[#E5E5E5]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" placeholder="Tu apellido" className="bg-white border-[#E5E5E5]" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" className="bg-white border-[#E5E5E5]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" className="bg-white border-[#E5E5E5]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                <Input id="confirm-password" type="password" className="bg-white border-[#E5E5E5]" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-gray-800 hover:bg-gray-700">Crear cuenta</Button>
            <div className="text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-gray-800 font-medium hover:underline">
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <Separator className="my-4 bg-[#E5E5E5]" />
          <p className="text-xs text-gray-500">
            Al registrarte, aceptas nuestros{" "}
            <Link href="/terminos" className="text-gray-700 hover:underline">
              Términos y Condiciones
            </Link>{" "}
            y
            <Link href="/privacidad" className="text-gray-700 hover:underline">
              {" "}
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
