import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Mohammad Emad Lotfi | Civil Engineer Portfolio',
  description: 'Professional portfolio of Mohammad Emad Lotfi, Civil Engineer specialized in structural and seismic analysis.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
