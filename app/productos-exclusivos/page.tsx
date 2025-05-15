import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Heart, Menu, Star } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ProductosExclusivosPage() {
  // Datos de ejemplo para productos exclusivos
  const productosExclusivos = [
    {
      id: 1,
      nombre: "Tapiz tejido a mano - Edición Limitada",
      descripcion:
        "Pieza única tejida por maestros artesanos utilizando técnicas ancestrales y tintes naturales. Solo 5 unidades disponibles en el mundo.",
      precio: 1250.0,
      imagen: "/placeholder.svg?height=500&width=500",
      artesano: "María González",
      origen: "Oaxaca, México",
      disponibles: 2,
    },
    {
      id: 2,
      nombre: "Escultura de obsidiana tallada - Pieza Única",
      descripcion:
        "Escultura tallada a mano en obsidiana negra por un maestro artesano con más de 40 años de experiencia. Pieza irrepetible.",
      precio: 3800.0,
      imagen: "/placeholder.svg?height=500&width=500",
      artesano: "Carlos Hernández",
      origen: "Michoacán, México",
      disponibles: 1,
    },
    {
      id: 3,
      nombre: "Jarrón de cerámica de alta temperatura - Serie Limitada",
      descripcion:
        "Jarrón elaborado con técnicas japonesas adaptadas a la tradición local. Cada pieza presenta variaciones únicas en su acabado.",
      precio: 950.0,
      imagen: "/placeholder.svg?height=500&width=500",
      artesano: "Familia Martínez",
      origen: "Puebla, México",
      disponibles: 3,
    },
    {
      id: 4,
      nombre: "Collar de plata y ámbar - Colección Especial",
      descripcion:
        "Joya elaborada con plata .925 y ámbar auténtico de la región. Diseño exclusivo que no se volverá a producir.",
      precio: 1850.0,
      imagen: "/placeholder.svg?height=500&width=500",
      artesano: "Taller Jiménez",
      origen: "Chiapas, México",
      disponibles: 4,
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <Link href="/" className="text-xl font-bold text-gray-800">
                Artesanías Únicas
              </Link>
            </div>

            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Buscar piezas exclusivas..." className="pl-10 bg-white border-[#E5E5E5]" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/favoritos">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/carrito">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/registro">
                <Button variant="outline" className="hidden md:inline-flex">
                  Iniciar sesión
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-4 md:hidden">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar piezas exclusivas..." className="pl-10 bg-white border-[#E5E5E5]" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Artesanías exclusivas"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Colección Exclusiva</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Piezas únicas y ediciones limitadas creadas por maestros artesanos. Arte y tradición que trasciende
            generaciones.
          </p>
          <Button className="bg-white text-gray-900 hover:bg-gray-100">Explorar colección</Button>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Piezas Únicas y Ediciones Limitadas</h2>
          <p className="text-gray-600">
            Cada una de estas obras maestras representa lo mejor del arte artesanal. Son piezas irrepetibles, creadas
            con técnicas ancestrales y materiales de la más alta calidad. Una vez agotadas, no volverán a estar
            disponibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {productosExclusivos.map((producto) => (
            <Card
              key={producto.id}
              className="overflow-hidden bg-white border-[#E5E5E5] hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  width={600}
                  height={600}
                  className="w-full object-cover aspect-square"
                />
                <Badge className="absolute top-4 left-4 bg-gray-900 hover:bg-gray-800">
                  {producto.disponibles === 1 ? "Pieza única" : `Solo ${producto.disponibles} disponibles`}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                  <div className="text-2xl font-bold">${producto.precio.toFixed(2)}</div>
                </div>

                <p className="text-gray-600 mb-4">{producto.descripcion}</p>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-800">Artesano</div>
                    <div className="text-gray-600">{producto.artesano}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Origen</div>
                    <div className="text-gray-600">{producto.origen}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Disponibilidad</div>
                    <div className="text-gray-600">
                      {producto.disponibles} {producto.disponibles === 1 ? "unidad" : "unidades"}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-gray-800 hover:bg-gray-700">Comprar ahora</Button>
                <Button variant="outline" className="flex-1">
                  Agregar al carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Sección de información */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg border border-[#E5E5E5]">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Calidad Excepcional</h3>
            <p className="text-gray-600">
              Cada pieza es inspeccionada minuciosamente para garantizar los más altos estándares de calidad artesanal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#E5E5E5]">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-gray-800"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m7 10 2 2 6-6"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Autenticidad Garantizada</h3>
            <p className="text-gray-600">
              Todas nuestras piezas incluyen un certificado de autenticidad firmado por el artesano creador.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#E5E5E5]">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-gray-800"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Impacto Social</h3>
            <p className="text-gray-600">
              Al adquirir estas piezas, contribuyes directamente al sustento de comunidades artesanales y la
              preservación de técnicas ancestrales.
            </p>
          </div>
        </div>
      </main>

      {/* CTA */}
      <div className="bg-white border-y border-[#E5E5E5] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Buscas una pieza personalizada?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Podemos conectarte directamente con nuestros artesanos para crear una pieza única según tus
            especificaciones.
          </p>
          <Button className="bg-gray-800 hover:bg-gray-700">Solicitar información</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Artesanías Únicas</h3>
              <p className="text-gray-600">
                Descubre piezas artesanales con historia, creadas por manos expertas que preservan tradiciones
                centenarias.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Colecciones</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Edición Limitada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Piezas Únicas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Colaboraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Artesanos Destacados
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Información</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Proceso de selección
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Envíos internacionales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Suscríbete</h4>
              <p className="text-gray-600 mb-4">
                Recibe notificaciones sobre nuevas piezas exclusivas antes que nadie.
              </p>
              <div className="flex">
                <Input placeholder="Tu email" className="rounded-r-none bg-white border-[#E5E5E5]" />
                <Button className="rounded-l-none bg-gray-800 hover:bg-gray-700">Enviar</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E5E5E5] mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2025 Artesanías Únicas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
