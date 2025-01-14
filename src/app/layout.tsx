import type { Metadata } from 'next'
import { poppins } from './font'

import '../styles/globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={poppins.className}>{children}</body>
            <Toaster />
        </html>
    )
}
