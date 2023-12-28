import React from "react"
import Header from "./header"
import Footer from "./footer"
export default function Layout({ children }) {
    return (
        <main className="bg-stone-950 text-stone-50">
            <Header />
            {children}
            <Footer />
        </main>
    )
}