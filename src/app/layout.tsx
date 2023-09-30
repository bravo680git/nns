import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["vietnamese"] })

export const metadata: Metadata = {
    title: "NNS demo web",
    description: "A demo web for NNS web-based eco-system",
    keywords: "NNS, demo, web, NNS web, NNS demo",
    other: { "google-site-verification": "3GEl3qy1LhifE0vdcezy4Q-6lTTxITU6uPNeVjxRMdI" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
