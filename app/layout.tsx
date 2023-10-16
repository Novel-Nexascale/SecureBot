import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureBot - AI training and Chat about CyberSecurity',
  description: "Welcome to SecureBot, your trusted companion in the world of cybersecurity! SecureBot is not just another chatbot; it's your personal AI trainer and chat partner dedicated to enhancing your knowledge and skills in the field of cybersecurity.",
}

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
         {children}
         <Analytics />
      </body>
    </html>
  )
}
