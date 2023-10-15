"use client"
import { useState, useEffect } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Button from "./Button"

type Props = {
    items: any[]
}

function Slider({ items }: Props) {
    const [translateX, setTranslateX] = useState(0)
    const cardWidth = 400

    const next = () => {
        setTranslateX(translateX >= cardWidth * (items.length - 1) ? 0 : translateX + cardWidth)
    }

    const prev = () => {
        setTranslateX(translateX <= 0 ? 0 : translateX - cardWidth)
    }

    useEffect(() => {
        setInterval(() => {
            setTranslateX((prev) => {
                if (prev >= cardWidth * (items.length - 1)) {
                    return 0
                }
                return prev + cardWidth
            })
        }, 5000)
    }, [items.length])

    return (
        <>
            <div className="mt-10 w-full overflow-x-hidden">
                <div
                    className="flex w-fit gap-5 transition-all duration-700"
                    style={{ transform: `translateX(-${translateX}px)` }}
                >
                    {items.map((_, i) => (
                        <div
                            key={i}
                            className="flex h-[300px] w-[400px] items-center justify-center rounded-2xl bg-black bg-opacity-60
                                    p-4 text-center"
                        >
                            {i}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-2xl">
                <Button rounded type="secondary" onClick={prev}>
                    <BsChevronLeft />
                </Button>
                <Button rounded type="primary" onClick={next}>
                    <BsChevronRight />
                </Button>
            </div>
        </>
    )
}

export default Slider
