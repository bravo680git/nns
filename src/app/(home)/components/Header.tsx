"use client"

import { useState, useEffect } from "react"
import { animated, useSpring } from "@react-spring/web"
import Link from "next/link"
import cl from "classnames"
import Button from "./Button"

import { RiMenu2Fill } from "react-icons/ri"
import { IoClose } from "react-icons/io5"

function Header() {
    const [isStick, setIsStick] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const active = isOpen || !isStick

    const spring = useSpring({
        scale: active ? 1 : 0.2,
        transformOrigin: "bottom right",
        opacity: active ? 1 : 0.6,
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
            {(isOpen || !isStick) && (
                <animated.header
                    className={cl("flex items-center justify-between py-6 transition-all", "lg:flex-wrap", {
                        "fixed bottom-[100px] right-10 flex-col gap-6 rounded-xl bg-white bg-opacity-70 px-4 shadow-lg":
                            isStick,
                        "md:hidden": !isOpen,
                    })}
                    style={{ ...spring }}
                >
                    <div className={cl("h-10 w-24 bg-slate-200 lg:mr-[100px] md:mr-0", { hidden: isStick })}></div>
                    <ul className={cl("flex gap-4 font-bold lg:mt-5", { "flex-col lg:mt-0": isStick })}>
                        <Link className="underline-offset-4 hover:underline" href={"#home"}>
                            Home
                        </Link>
                        <Link className="underline-offset-4 hover:underline" href={"#how-it-work"}>
                            How it work
                        </Link>
                        <Link className="underline-offset-4 hover:underline" href={"#about"}>
                            About us
                        </Link>
                        <Link className="underline-offset-4 hover:underline" href={"#products"}>
                            Our products
                        </Link>
                        <Link className="underline-offset-4 hover:underline" href={"#reviews"}>
                            Client thinking
                        </Link>
                    </ul>
                    <Link href="#contact" className="">
                        <Button>Contact us</Button>
                    </Link>
                </animated.header>
            )}
            {isStick && (
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
            )}
            <div className="hidden md:block">
                <div className="h-10 w-32 bg-slate-200"></div>
            </div>
        </>
    )
}

export default Header
