import type {Metadata} from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Donate",
    description: "Donate to Haruka",
}

export default function DonateLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}