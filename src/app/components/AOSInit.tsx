"use client"

import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function AosInit({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init()
    }, [])

    return children
}

export default AosInit
