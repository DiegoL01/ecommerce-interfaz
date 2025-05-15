"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, ShoppingCart, Heart, Menu, ChevronDown, Star } from "lucide-react"

export default function ProductosPage() {
  // Datos de ejemplo para productos
  const productos = [
    {
      id: 1,
      nombre: "Jarrón de cerámica pintado a mano",
      precio: 45.99,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Cerámica",
      calificacion: 4.5,
    },
    {
      id: 2,
      nombre: "Tapete tejido tradicional",
      precio: 89.99,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Textiles",
      calificacion: 4.8,
    },
    {
      id: 3,
      nombre: "Figura tallada en madera",
      precio: 65.5,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Madera",
      calificacion: 4.2,
    },
    {
      id: 4,
      nombre: "Collar de piedras naturales",
      precio: 38.75,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Joyería",
      calificacion: 4.7,
    },
    {
      id: 5,
      nombre: "Cuenco de barro negro",
      precio: 52.25,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Cerámica",
      calificacion: 4.6,
    },
    {
      id: 6,
      nombre: "Cojín bordado a mano",
      precio: 42.99,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Textiles",
      calificacion: 4.3,
    },
    {
      id: 7,
      nombre: "Lámpara de papel artesanal",
      precio: 78.5,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Iluminación",
      calificacion: 4.4,
    },
    {
      id: 8,
      nombre: "Canasta tejida de palma",
      precio: 35.99,
      imagen: "/placeholder.svg?height=300&width=300",
      categoria: "Cestería",
      calificacion: 4.1,
    },
  ]

  // Categorías para el filtro
  const categorias = ["Todas", "Cerámica", "Textiles", "Madera", "Joyería", "Iluminación", "Cestería"]

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
                <Input placeholder="Buscar productos artesanales..." className="pl-10 bg-white border-[#E5E5E5]" />
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
              <Input placeholder="Buscar productos artesanales..." className="pl-10 bg-white border-[#E5E5E5]" />
            </div>
          </div>
        </div>
      </header>

      {/* Filtros y Productos */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros laterales (visible en desktop) */}
          <div className="hidden md:block w-64 space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-3">Categorías</h3>
              <div className="space-y-2">
                {categorias.map((categoria) => (
                  <div key={categoria} className="flex items-center">
                    <Button
                      variant="link"
                      className="text-gray-600 hover:text-gray-900 p-0 h-auto font-normal justify-start"
                    >
                      {categoria}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Precio</h3>
              <div className="space-y-4">
                <Slider defaultValue={[150]} max={300} step={1} />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">$0</span>
                  <span className="text-sm text-gray-600">$300</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Calificación</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <Button
                      variant="link"
                      className="text-gray-600 hover:text-gray-900 p-0 h-auto font-normal justify-start"
                    >
                      <div className="flex items-center">
                        {Array(rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        {Array(5 - rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                        <span className="ml-1">y más</span>
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1">
            {/* Filtros móviles y ordenamiento */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 md:hidden">
                <Button variant="outline" className="flex items-center gap-2">
                  Filtros
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-600">Ordenar por:</span>
                <Select defaultValue="relevancia">
                  <SelectTrigger className="w-[180px] bg-white border-[#E5E5E5]">
                    <SelectValue placeholder="Relevancia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevancia">Relevancia</SelectItem>
                    <SelectItem value="precio-bajo">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="precio-alto">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="calificacion">Mejor calificados</SelectItem>
                    <SelectItem value="nuevos">Más recientes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Resultados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productos.map((producto) => (
                <Card
                  key={producto.id}
                  className="overflow-hidden bg-white border-[#E5E5E5] hover:shadow-md transition-shadow"
                >
                  <Link href={`/productos/${producto.id}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={producto.imagen || "/placeholder.svg"}
                        alt={producto.nombre}
                        fill
                        className="object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-500 mb-1">{producto.categoria}</div>
                    <Link
                      href={`/productos/${producto.id}`}
                      className="font-medium text-gray-800 hover:underline line-clamp-2"
                    >
                      {producto.nombre}
                    </Link>
                    <div className="flex items-center mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(producto.calificacion) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      <span className="ml-1 text-sm text-gray-600">{producto.calificacion}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="font-semibold">${producto.precio.toFixed(2)}</div>
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-700">
                      Agregar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronDown className="h-4 w-4 rotate-90" />
                </Button>
                <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E5E5] py-8">
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
              <h4 className="font-medium mb-4">Categorías</h4>
              <ul className="space-y-2">
                {categorias.slice(1).map((categoria) => (
                  <li key={categoria}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {categoria}
                    </Link>
                  </li>
                ))}
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
                    Artesanos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Envíos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Suscríbete</h4>
              <p className="text-gray-600 mb-4">Recibe nuestras novedades y ofertas exclusivas.</p>
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
