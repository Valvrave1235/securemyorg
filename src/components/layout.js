import React from "react"
import Header from "./header"
export default function Layout({ children }) {
    return (
        <main className="bg-stone-950">
            <Header />
            {children}
        </main>
    )
}