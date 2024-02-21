import type {Metadata} from 'next'
import React from 'react'
import './globals.css'
import {Analytics} from '@vercel/analytics/react';
import {GenericModal} from "./components/genericModal";

export const metadata: Metadata = {
    title: {
        template: '%s | Harukadev',
        default: 'Haruka Developer - Python & JS - I love .NET',
    },
    metadataBase: new URL('https://harukadev.xyz/'),
    description: 'Holii, soy Haruka, A veces programo cosas\n No soy Hayami lpm',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://harukadev.xyz',
        siteName: 'Harukadev.xyz',
        images: [
            {
                url: 'https://harukadev.xyz/pfp.png',
                alt: 'Haruka',
                width: 100,
                height: 100
            },
        ],
    },
    twitter: {
        card: "summary",
    }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <script src={"https://kit.fontawesome.com/8e4c18f6c2.js"} crossOrigin="anonymous"/>
            <link rel="stylesheet" href={"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"}/>
        </head>
        <body>
        <GenericModal/>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
