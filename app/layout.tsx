import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Rises Healthcare AI - Transforming Healthcare with Artificial Intelligence',
  description: 'Leading healthcare AI platform providing advanced diagnostic solutions, medical imaging analysis, and care coordination tools to improve patient outcomes globally.',
  keywords: 'healthcare AI, medical imaging, diagnostic solutions, artificial intelligence, healthcare technology',
  authors: [{ name: 'Rises Healthcare AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
} 