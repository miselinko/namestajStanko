"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Trash2, Plus, Upload, X } from "lucide-react"
import Image from "next/image"
import type { Product } from "@/lib/products-service"

// Jednostavna admin lozinka - u produkciji koristite pravu autentikaciju
const ADMIN_PASSWORD = "admin123"

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    image: "",
    category: "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = ["Bračni kreveti", "Trosedi", "Garniture", "Dečiji kreveti", "Kreveti po meri", "Dodatna oprema"]

  // Učitavanje proizvoda
  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts()
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated])

  // Čišćenje preview URL-a kada se dijalog zatvori
  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedFile(null)
      setPreviewUrl(null)
    }
  }, [isDialogOpen])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/products")
      if (!response.ok) throw new Error("Greška pri učitavanju proizvoda")
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError("Nije moguće učitati proizvode")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError(null)
    } else {
      setError("Pogrešna lozinka")
    }
  }

  const handleAddProduct = () => {
    setCurrentProduct({
      name: "",
      description: "",
      image: "",
      category: categories[0],
    })
    setIsEditing(false)
    setIsDialogOpen(true)
  }

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product)
    setIsEditing(true)
    setIsDialogOpen(true)
  }

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Da li ste sigurni da želite da obrišete ovaj proizvod?")) return

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Greška pri brisanju proizvoda")

      // Osvežavanje liste proizvoda
      fetchProducts()
    } catch (err) {
      setError("Nije moguće obrisati proizvod")
      console.error(err)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Provera tipa fajla
    if (!file.type.startsWith("image/")) {
      setError("Molimo vas da izaberete sliku")
      return
    }

    setSelectedFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleFileUpload = async () => {
    if (!selectedFile) return null

    setUploadStatus("Otpremanje slike...")
    const formData = new FormData()
    formData.append("file", selectedFile)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Greška pri otpremanju slike")
      }

      const data = await response.json()
      setUploadStatus("Slika je uspešno otpremljena!")
      return data.filePath
    } catch (err) {
      console.error("Greška pri otpremanju:", err)
      setError("Nije moguće otpremiti sliku")
      setUploadStatus(null)
      return null
    }
  }

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Ako je izabrana nova slika, prvo je otpremi
      let imagePath = currentProduct.image
      if (selectedFile) {
        imagePath = await handleFileUpload()
        if (!imagePath) return // Prekini ako otpremanje nije uspelo
      }

      const productData = {
        ...currentProduct,
        image: imagePath,
      }

      const method = isEditing ? "PUT" : "POST"
      const url = isEditing ? `/api/products/${currentProduct.id}` : "/api/products"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) throw new Error("Greška pri čuvanju proizvoda")

      // Zatvaranje dijaloga i osvežavanje liste
      setIsDialogOpen(false)
      setUploadStatus(null)
      fetchProducts()
    } catch (err) {
      setError("Nije moguće sačuvati proizvod")
      console.error(err)
    }
  }

  const handleRemoveImage = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Admin Panel - Prijava</h1>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleLogin} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Lozinka
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Prijavi se</Button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Panel - Proizvodi</h1>
        <Button onClick={handleAddProduct} className="bg-orange-600 hover:bg-orange-700">
          <Plus className="mr-2 h-4 w-4" /> Dodaj proizvod
        </Button>
      </div>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      {isLoading ? (
        <div className="text-center py-12">Učitavanje...</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Slika</TableHead>
                <TableHead>Naziv</TableHead>
                <TableHead>Kategorija</TableHead>
                <TableHead>Akcije</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    Nema proizvoda za prikaz
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>
                      <div className="relative h-12 w-16">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Dialog za dodavanje/uređivanje proizvoda */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Uredi proizvod" : "Dodaj novi proizvod"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmitProduct} className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naziv proizvoda
                </label>
                <Input
                  id="name"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Kategorija
                </label>
                <Select
                  value={currentProduct.category}
                  onValueChange={(value) => setCurrentProduct({ ...currentProduct, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Izaberite kategoriju" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Opis
                </label>
                <Textarea
                  id="description"
                  value={currentProduct.description}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                  required
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slika proizvoda</label>

                {/* Prikaz trenutne slike ili preview-a */}
                {(previewUrl || currentProduct.image) && (
                  <div className="relative w-full h-48 mb-2 border rounded-md overflow-hidden">
                    <Image
                      src={previewUrl || currentProduct.image || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Upload dugme */}
                <div className="flex items-center gap-2">
                  <Input
                    ref={fileInputRef}
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" /> Izaberite sliku
                  </Button>
                </div>

                {/* Status otpremanja */}
                {uploadStatus && <div className="mt-2 text-sm text-gray-600">{uploadStatus}</div>}
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Otkaži
              </Button>
              <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                {isEditing ? "Sačuvaj izmene" : "Dodaj proizvod"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
