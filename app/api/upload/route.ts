import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "Fajl nije pronađen" }, { status: 400 })
    }

    // Provera tipa fajla
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Fajl mora biti slika" }, { status: 400 })
    }

    // Kreiranje direktorijuma za slike ako ne postoji
    const uploadDir = join(process.cwd(), "public", "uploads")
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Generisanje jedinstvenog imena fajla
    const fileExtension = file.name.split(".").pop()
    const fileName = `${uuidv4()}.${fileExtension}`
    const filePath = join(uploadDir, fileName)

    // Čitanje fajla kao ArrayBuffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Čuvanje fajla
    await writeFile(filePath, buffer)

    // Vraćanje putanje do fajla (relativno u odnosu na public folder)
    const publicPath = `/uploads/${fileName}`

    return NextResponse.json({ filePath: publicPath, success: true })
  } catch (error) {
    console.error("Greška pri otpremanju fajla:", error)
    return NextResponse.json({ error: "Greška pri otpremanju fajla" }, { status: 500 })
  }
}

// Povećanje limita za veličinu fajla
export const config = {
  api: {
    bodyParser: false,
  },
}
