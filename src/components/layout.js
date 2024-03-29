import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }) {
    return (
        <main className="bg-stone-950 text-stone-50   ">
            <Header />
<div>            {children}</div>
            <Footer />
            <Toaster />
        </main>
    )
}