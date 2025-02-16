import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "kartiq",
  description: 'transdisciplinary scientist, engineer, and designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}