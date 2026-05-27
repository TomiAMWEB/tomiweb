import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tomi Alvarez Morales — DJ",
  description:
    "DJ argentino desde 2016. Reggaetón, urbano y más. Buenos Aires, Argentina. Bookings y eventos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "dark scroll-smooth antialiased",
        inter.variable,
        playfair.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  )
}
