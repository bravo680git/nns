/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from "next/image"
import { BsFillPlayFill } from "react-icons/bs"
import { GoArrowRight } from "react-icons/go"
import Link from "next/link"

import Header from "./components/Header"
import Button from "./components/Button"
import Slider from "./components/Slider"
import Revealer from "@/app/components/Revealer"
import Img1 from "./assets/img1.png"
import "./home.css"
import { PageData } from "./type"

const colors = {
    primary: "#ff6b00",
    secondary: "#1081e8",
}
const APP_KEY = "6543ae46a264495c71a6233d"
const URL = process.env.BASE_URL + "/category?page_id=" + APP_KEY

async function HomePage() {
    const res = await fetch(URL, {
        next: { tags: [APP_KEY] },
    })

    if (!res.ok) {
        return <div>Error</div>
    }

    const data = await res.json()

    const pageData: PageData = data?.data?.categories ?? new Array(8).fill({})
    const home = pageData[0].value?.[0] ?? {}
    const howItWork = pageData[1]
    const aboutUs = pageData[2].value?.[0] ?? {}
    const aboutUsTitle = pageData[2].name
    const ourPortfolio = pageData[3]
    const review = pageData[4]
    const contact = pageData[5]
    const footer = pageData[6].value ?? []
    const lenDiv3 = Math.round(footer.length / 3)
    const footerGroups = [footer.slice(0, lenDiv3), footer.slice(lenDiv3 + 1, 2 * lenDiv3), footer.slice(lenDiv3 + 1)]
    const others = pageData[7] ?? {}

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
                <Header labels={pageData.map((item) => item.name)} logo={others.value?.[0]?.logo} />

                <section className="mt-[10%] flex min-h-[60vh] items-center gap-4 lg:flex-col">
                    <Revealer className="flex flex-col gap-6 text-6xl font-bold lg:text-5xl md:text-3xl">
                        <span style={{ color: colors.primary }} className="underline">
                            {home.title1}
                        </span>
                        <span>{home.title2}</span>
                        <span style={{ color: colors.secondary }} className="underline">
                            {home.title3}
                        </span>
                        <div className="mt-8 flex gap-10 text-base">
                            <Link href={home.button1Url ?? ""}>
                                <Button type="secondary">{home.button1Label}</Button>
                            </Link>
                            <Link href={home.button2Url ?? ""} className="flex items-center gap-2">
                                <Button rounded className="text-2xl">
                                    <BsFillPlayFill />
                                </Button>
                                <span style={{ color: colors.primary }}>{home.button2Label}</span>
                            </Link>
                        </div>
                    </Revealer>
                    <Revealer direction="right" className="grow">
                        <Image className="mx-auto w-[400px]" src={Img1} alt="img-1" />
                    </Revealer>
                </section>

                <section id="how-it-work" className="mt-40">
                    <h3 className="mb-5 text-center text-2xl font-bold" style={{ color: colors.primary }}>
                        {howItWork.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-5 lg:grid-cols-1">
                        {howItWork.value?.map((item, i) => (
                            <Revealer
                                type={i % 2 ? "zoomIn" : "zoomOut"}
                                key={i}
                                className="flex h-[400px] flex-col items-center justify-around gap-4 
                                rounded-2xl bg-white bg-opacity-40 p-4 text-center"
                            >
                                <img className="max-h-full w-36 max-w-full" src={item.image} alt="img-2" />
                                <h4 className="text-lg font-bold">{item.title}</h4>
                                <p className="text-sm">{item.description}</p>
                            </Revealer>
                        ))}
                    </div>
                </section>

                <section id="about" className="mt-40 flex items-center justify-around lg:flex-col-reverse lg:gap-8">
                    <Revealer>
                        <img className="max-h-full w-[300px] max-w-full" src={aboutUs.image} alt="img-3" width={300} />
                    </Revealer>
                    <Revealer direction="right" className="flex max-w-[500px] flex-col gap-8">
                        <h2 className="text-center text-2xl font-bold">{aboutUsTitle}</h2>
                        <h4 className="-mt-4 text-center text-xl font-bold" style={{ color: colors.primary }}>
                            {aboutUs.title}
                        </h4>
                        <p>{aboutUs.description1}</p>
                        <p>{aboutUs.description2}</p>
                        <p>{aboutUs.description3}</p>
                        <Link href={aboutUs.buttonUrl ?? ""}>
                            <Button className="mx-auto w-fit" type="secondary">
                                {aboutUs.buttonLabel}
                            </Button>
                        </Link>
                    </Revealer>
                </section>

                <section id="products" className="mt-40">
                    <Revealer direction="up">
                        <h2 className="mb-5 text-center text-2xl font-bold">{ourPortfolio.name}</h2>
                        <h4 className="text-center text-xl font-bold" style={{ color: colors.primary }}>
                            {ourPortfolio.value?.[0]?.sessionTitle}
                        </h4>
                    </Revealer>
                    <Revealer direction="down">
                        <div className="mt-10 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
                            {ourPortfolio.value?.map((item, i) => (
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
                                        <h4 className="mb-4 text-base">{item.title}</h4>
                                        <p>{item.description}</p>
                                        <Link
                                            href={item.url}
                                            className="mt-2 flex items-center gap-2 text-sm underline hover:opacity-60"
                                        >
                                            <span>Go to detail</span>
                                            <i className="text-xl">
                                                <GoArrowRight />
                                            </i>
                                        </Link>
                                    </div>
                                    <img src={item.image} alt="img" className="max-h-full max-w-full" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Link href={ourPortfolio.value?.[0]?.buttonUrl ?? ""}>
                                <Button type="primary">{ourPortfolio.value?.[0]?.buttonLabel}</Button>
                            </Link>
                        </div>
                    </Revealer>
                </section>

                <section id="reviews" className="mt-40 w-full">
                    <Revealer type="faded">
                        <h2 className="mb-5 text-center text-2xl font-bold">{review.name}</h2>
                        <h4 className="text-center text-xl font-bold" style={{ color: colors.primary }}>
                            {review.value?.[0]?.subtitle}
                        </h4>

                        <Slider items={review.value ?? []} />
                    </Revealer>
                </section>

                <footer id="contact" className="mt-32">
                    <div className="flex items-center gap-5 lg:flex-col">
                        <Revealer className="flex max-w-[400px] flex-col gap-5 lg:items-center">
                            <div className="h-[200px] w-3/4">
                                <img src={contact.value[0]?.coverImage} alt="img" className="max-h-full max-w-full" />
                            </div>
                            <p className="lg:text-center">{contact.value[0]?.description}</p>
                            <div className="flex gap-4">
                                {contact.value?.map((item, i) => (
                                    <Link key={i} href={item.url}>
                                        <div className="h-10 w-1 overflow-hidden rounded-sm">
                                            <img src={item.channelLogo} alt="logo" className="max-h-full max-w-full" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Revealer>

                        <Revealer direction="right" className="flex grow flex-wrap justify-around lg:w-full md:gap-4">
                            {footerGroups.map((group, i) => (
                                <div key={i} className="flex flex-col gap-4 md:items-center">
                                    {group.map((item, i) => (
                                        <Link key={i} href={item.url}>
                                            {item.label}
                                        </Link>
                                    ))}
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
