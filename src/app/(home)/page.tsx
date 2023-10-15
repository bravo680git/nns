import React from "react"
import Image from "next/image"
import { BsFillPlayFill } from "react-icons/bs"
import { GoArrowRight } from "react-icons/go"

import Header from "./components/Header"
import Button from "./components/Button"
import Slider from "./components/Slider"
import Revealer from "@/app/components/Revealer"
import Img1 from "./assets/img1.png"
import Img2 from "./assets/img2.png"
import Img3 from "./assets/img3.png"
import "./home.css"
import Link from "next/link"

const colors = {
    primary: "#ff6b00",
    secondary: "#1081e8",
}

function HomePage() {
    return (
        <div
            data-component="HomePage"
            className="wrapper relative p-8 text-sm lg:p-6 md:p-0"
            style={{ color: "#363c40" }}
        >
            <div className="circle"></div>
            <div
                id="home"
                className="mx-auto min-h-screen w-full max-w-[1280px] rounded-3xl
                border-[10px] border-solid border-white px-16 py-5 md:border-0 md:px-5"
            >
                <Header />

                <section className="mt-[10%] flex min-h-[60vh] items-center gap-4 lg:flex-col">
                    <Revealer className="flex flex-col gap-6 text-6xl font-bold lg:text-5xl md:text-3xl">
                        <span style={{ color: colors.primary }} className="underline">
                            Design all solutions
                        </span>
                        <span>for all of your</span>
                        <span style={{ color: colors.secondary }} className="underline">
                            Business needs
                        </span>
                        <div className="mt-8 flex gap-10 text-base">
                            <Button type="secondary">Get started</Button>
                            <div className="flex items-center gap-2">
                                <Button rounded className="text-2xl">
                                    <BsFillPlayFill />
                                </Button>
                                <span style={{ color: colors.primary }}>Watch demo</span>
                            </div>
                        </div>
                    </Revealer>
                    <Revealer direction="right" className="grow">
                        <Image className="mx-auto w-[400px]" src={Img1} alt="img-1" />
                    </Revealer>
                </section>

                <section id="how-it-work" className="mt-40">
                    <h3 className="mb-5 text-center text-2xl font-bold" style={{ color: colors.primary }}>
                        How it work
                    </h3>
                    <div className="grid grid-cols-3 gap-5 lg:grid-cols-1">
                        {[...Array(3)].map((_, i) => (
                            <Revealer
                                type={i % 2 ? "zoomIn" : "zoomOut"}
                                key={i}
                                className="flex h-[400px] flex-col items-center justify-around gap-4 
                            rounded-2xl bg-white bg-opacity-40 p-4 text-center"
                            >
                                <Image className="w-36" src={Img2} alt="img-2" />
                                <h4 className="text-lg font-bold">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, repellendus!
                                </h4>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe rem magni
                                    magnam voluptatum illum adipisci officiis quia ducimus dolorem.
                                </p>
                            </Revealer>
                        ))}
                    </div>
                </section>

                <section id="about" className="mt-40 flex items-center justify-around lg:flex-col-reverse lg:gap-8">
                    <Revealer>
                        <Image className="w-[300px]" src={Img3} alt="img-3" />
                    </Revealer>
                    <Revealer direction="right" className="flex max-w-[500px] flex-col gap-8">
                        <h2 className="text-center text-2xl font-bold">About us</h2>
                        <h4 className="-mt-4 text-center text-xl font-bold" style={{ color: colors.primary }}>
                            Design solutions you need
                        </h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, facilis officiis
                            laudantium cum nulla repudiandae placeat quidem tempore ducimus vitae.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, facilis officiis
                            laudantium cum nulla repudiandae placeat quidem tempore ducimus vitae.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, facilis officiis
                            laudantium cum nulla repudiandae placeat quidem tempore ducimus vitae.
                        </p>
                        <Button className="mx-auto w-fit" type="secondary">
                            {" "}
                            Get started
                        </Button>
                    </Revealer>
                </section>

                <section id="products" className="mt-40">
                    <Revealer direction="up">
                        <h2 className="mb-5 text-center text-2xl font-bold">Our portfolio</h2>
                        <h4 className="text-center text-xl font-bold" style={{ color: colors.primary }}>
                            2k5 successful projects
                        </h4>
                    </Revealer>
                    <Revealer direction="down">
                        <div className="mt-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="group relative flex h-[300px] cursor-pointer items-center 
                                        justify-center rounded-xl p-4 text-center"
                                    style={{
                                        backgroundColor: "#1081e822",
                                    }}
                                >
                                    <div
                                        className="absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-indigo-800 
                                            bg-opacity-40 p-4 text-left font-bold text-white opacity-0 transition-all 
                                            duration-500 group-hover:opacity-100"
                                    >
                                        <h4 className="mb-4 text-base">Lorem, ipsum dolor.</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, beatae!
                                        </p>
                                        <Link
                                            href="#"
                                            className="mt-2 flex items-center gap-2 text-sm underline hover:opacity-60"
                                        >
                                            <span>Go to detail</span>
                                            <i className="text-xl">
                                                <GoArrowRight />
                                            </i>
                                        </Link>
                                    </div>
                                    <span>image here</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Button type="primary">Explore all</Button>
                        </div>
                    </Revealer>
                </section>

                <section id="reviews" className="mt-40 w-full">
                    <Revealer type="faded">
                        <h2 className="mb-5 text-center text-2xl font-bold">Reviews</h2>
                        <h4 className="text-center text-xl font-bold" style={{ color: colors.primary }}>
                            What clients talk about me
                        </h4>

                        <Slider items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
                    </Revealer>
                </section>

                <footer id="contact" className="mt-32">
                    <div className="flex items-center gap-5 lg:flex-col">
                        <Revealer className="flex max-w-[400px] flex-col gap-5 lg:items-center">
                            <div className="h-[200px] w-3/4 bg-slate-200"></div>
                            <p className="lg:text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eligendi mollitia
                                inventore sunt velit!
                            </p>
                            <div className="flex gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-10 w-10 bg-slate-200"></div>
                                ))}
                            </div>
                        </Revealer>

                        <Revealer direction="right" className="flex grow flex-wrap justify-around lg:w-full md:gap-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex flex-col gap-4 md:items-center">
                                    <h4 className="text-base font-bold">Lorem, ipsum.</h4>
                                    <span>Lorem, ipsum dolor.</span>
                                    <span>Lorem, ipsum dolor.</span>
                                    <span>Lorem, ipsum dolor.</span>
                                    <span>Lorem, ipsum dolor.</span>
                                </div>
                            ))}
                        </Revealer>
                    </div>

                    <Revealer
                        direction="down"
                        className="my-10 border-t border-solid border-slate-200 pt-4 text-center"
                    >
                        Copyright &copy; bravo680
                    </Revealer>
                </footer>
            </div>
        </div>
    )
}

export default HomePage
