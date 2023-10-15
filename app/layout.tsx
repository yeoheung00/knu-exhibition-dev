import Header from 'components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PIECE OF CAKE',
  description: 'Kongju National University Design Convergence 16th Graduation Exhibition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <div id="portal"></div>
      </body>
    </html>
  )
}
