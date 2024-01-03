import type {Metadata} from 'next'
import React from 'react'
import './globals.css'
import {Analytics} from '@vercel/analytics/react';
import {GenericModal} from "./components/genericModal";

export const metadata: Metadata = {
    title: {
        template: '%s | Harukadev.xyz',
        default: 'Harukadev.xyz',
    },
    metadataBase: new URL('https://harukadev.xyz/'),
    description: 'Holii, soy Haruka, A veces programo cosas\n No soy Hayami lpm',
    keywords: ['Haruka', 'HarukaDev', "Developer", "Python", "JavaScript", "TypeScript"],
    authors: [{name: 'Haruka'}],
    publisher: 'Haruka',
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
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link href={"https://fonts.googleapis.com/"} rel="preconnect"/>
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
