import type {Metadata} from 'next'
import React from 'react'
import './globals.css'


export const metadata: Metadata = {
    title: 'Harukadev.xyz',
    description: 'Holii, soy Haruka, A veces programo cosas\n No soy Hayami lpm',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* @ts-ignore */}
            <title>{metadata.title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            {/* @ts-ignore */}
            <meta property="og:title" content={metadata.title}/>
            {/* @ts-ignore */}
            <meta property="og:description" content={metadata.description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://harukadev.xyz"/>
            <meta property="og:image" content="/pfp.png"/>
            <script src={"https://kit.fontawesome.com/8e4c18f6c2.js"} crossOrigin="anonymous"/>
            <link rel="stylesheet" href={"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"}/>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}
