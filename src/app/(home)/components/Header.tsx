/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { animated, useSpring } from "@react-spring/web"
import Link from "next/link"
import cl from "classnames"
import Button from "./Button"

import { RiMenu2Fill } from "react-icons/ri"
import { IoClose } from "react-icons/io5"

type Props = {
    labels: string[]
    logo: string
}

const urls = ["#home", "#how-it-work", "#about", "#products", "#reviews", "#contact"]

function Header({ labels, logo }: Props) {
    const [isStick, setIsStick] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const active = isOpen || !isStick

    const spring = useSpring({
        scale: active ? 1 : 0.2,
        transformOrigin: "bottom right",
        opacity: active ? 1 : 0.6,
        zIndex: 10000,
        config: {
            duration: 100,
        },
    })

    useEffect(() => {
        const handleScroll = () => {
            setIsStick(window.scrollY > 200)
        }

        const handleClickOutside = () => {
            setIsOpen(false)
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <>
            <div className={cl("flex items-center justify-between py-6 transition-all", "lg:flex-wrap", {})}>
                <div className={cl("h-10 w-24 lg:mr-[100px] md:mr-0")}>
                    <img src={logo} alt="logo" className="max-h-full max-w-full" />
                </div>
                <ul className={cl("flex gap-4 font-bold lg:mt-5")}>
                    {urls.slice(0, 4).map((url, index) => (
                        <Link key={index} className="underline-offset-4 hover:underline" href={url}>
                            {labels[index]}
                        </Link>
                    ))}
                </ul>
                <Link href={urls[5]} className="">
                    <Button>{labels[5]}</Button>
                </Link>
            </div>
            {isStick && (
                <>
                    <Button
                        rounded
                        type="secondary"
                        className="fixed bottom-10 right-10 z-10 text-xl"
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(!isOpen)
                        }}
                    >
                        {!isOpen ? <RiMenu2Fill /> : <IoClose />}
                    </Button>

                    {isOpen && (
                        <animated.div
                            className="fixed bottom-[100px] right-10 flex flex-col 
                                gap-6 rounded-xl bg-white bg-opacity-70 px-4 py-6 shadow-lg"
                            style={spring}
                        >
                            <div className={cl("hidden h-10 w-24 lg:mr-[100px] md:mr-0")}>
                                <img src={logo} alt="logo" className="max-h-full max-w-full" />
                            </div>
                            <ul className={cl("flex flex-col gap-4 font-bold lg:mt-5")}>
                                {urls.slice(0, 4).map((url, index) => (
                                    <Link key={index} className="underline-offset-4 hover:underline" href={url}>
                                        {labels[index]}
                                    </Link>
                                ))}
                            </ul>
                            <Link href={urls[5]}>
                                <Button>{labels[5]}</Button>
                            </Link>
                        </animated.div>
                    )}
                </>
            )}
        </>
    )
}

export default Header
