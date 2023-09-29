"use client"

import AppearAni from "../components/AppearAni"
import Revealer from "../components/Revealer"

function Button({ children = "Work with us", ...props }) {
    return (
        <button
            className="whitespace-nowrap rounded-full border border-solid border-black px-6 py-4 text-xl"
            {...props}
        >
            {children}
        </button>
    )
}

function LandingPage() {
    return (
        <div data-component="LandingPage" className="mx-auto w-full max-w-[1440px] overflow-x-hidden">
            <div id="section-1" className="flex h-screen flex-col gap-16 p-6">
                <div className="flex items-start justify-between md:flex-col md:gap-4">
                    <div className="h-10 w-64 bg-slate-200 lg:w-40"></div>
                    <div className="text-9xl lg:text-6xl md:text-4xl">
                        <span className="block">Design &rarr;</span>
                        <span>
                            the <span className="font-mono">future</span>
                        </span>
                    </div>
                    <Button />
                </div>
                <div className="grid grow grid-cols-4 gap-8 lg:grid-cols-2 md:gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-slate-200"></div>
                    ))}
                </div>
            </div>

            <div
                id="section-2"
                className="grid min-h-screen grid-cols-2 gap-10 
                    bg-black p-8 text-white lg:grid-rows-3 md:grid-cols-1 md:grid-rows-2"
            >
                <Revealer className="flex flex-col justify-center gap-10 lg:row-span-2 lg:justify-end">
                    <h3 style={{ wordSpacing: 9999 }} className="text-7xl font-semibold leading-relaxed md:text-4xl">
                        About StudioAgatho
                    </h3>
                    <div className="h-10 w-10 bg-slate-200"></div>
                </Revealer>
                <Revealer type="right" className="aspect-[4/3] w-full bg-slate-200 lg:row-span-2"></Revealer>
                <Revealer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis quidem laborum unde
                    assumenda voluptas? Aut quidem quam laborum sed, placeat velit corporis totam ea commodi ipsa ut
                    dolore? Laudantium!
                </Revealer>
                <Revealer type="right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati velit illo debitis
                    ipsa ducimus, doloremque quo exercitationem mollitia sequi excepturi, id inventore eius temporibus
                    veniam dolorum reprehenderit doloribus eveniet?
                </Revealer>
            </div>

            <div id="section-3" className="flex flex-col gap-5 p-8 md:p-4">
                <Revealer type="up" className="flex justify-between">
                    <h3 className="text-3xl">
                        Our <span className="italic">Work</span>
                    </h3>
                    <span className="text-6xl">&darr;</span>
                </Revealer>

                <Revealer
                    type="right"
                    className="grid h-[500px] w-full
                        grid-cols-12 grid-rows-3 gap-4 lg:h-[80vh] lg:grid-cols-4 lg:grid-rows-[unset] md:h-screen md:gap-2"
                >
                    <div className="col-span-1 row-span-1 bg-slate-200"></div>
                    <div className="col-span-3 row-span-1 bg-slate-200"></div>
                    <div className="col-span-2 row-span-2 bg-slate-200"></div>
                    <div className="col-span-2 row-span-2 bg-slate-200"></div>
                    <div className="col-span-1 row-span-1 bg-slate-200"></div>
                    <div className="col-span-3 row-span-1 bg-slate-200"></div>
                    <div className="col-span-2 row-span-2 bg-slate-200"></div>
                    <div className="col-span-2 row-span-2 bg-slate-200"></div>
                    <div className="col-span-2 row-span-2 bg-slate-200"></div>
                    <div className="col-span-2 row-span-2 bg-slate-200"></div>
                    <div className="col-span-3 row-span-1 bg-slate-200"></div>
                    <div className="col-span-1 row-span-1 bg-slate-200"></div>
                </Revealer>

                <div className="flex justify-between gap-8 pl-20 pt-24 md:flex-col md:pl-0 md:pt-5">
                    <div className="flex w-[400px] flex-col justify-between md:h-[90vh] md:w-full">
                        <Revealer type="up">
                            <h3 className="mb-2 text-4xl">Schematic</h3>
                            <Button>Brand idenity</Button>
                        </Revealer>

                        <Revealer className="flex items-start gap-8 pl-6">
                            <span className="text-6xl md:text-4xl">01</span>
                            <div>
                                <span className="text-4xl md:text-3xl">Background</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, officiis. Unde
                                    ullam tempore minus veritatis rem quam quae deserunt repudiandae?
                                </p>
                            </div>
                        </Revealer>
                        <Revealer className="flex items-start gap-4 pl-6">
                            <span className="text-6xl md:text-4xl">01</span>
                            <div>
                                <span className="text-4xl md:text-3xl">Background</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit error ipsam voluptate
                                    maiores debitis doloremque illum deserunt mollitia quia porro!
                                </p>
                            </div>
                        </Revealer>
                    </div>

                    <div className="flex grow items-center justify-center">
                        <div className="h-[75vh] w-[340px] bg-slate-200 md:w-full"></div>
                    </div>
                </div>

                <div className="w-full pt-24">
                    <div className="grid h-[600px] w-full grid-cols-3 gap-5 px-8 lg:h-[400px] lg:px-5 md:h-fit md:grid-cols-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="bg-slate-200 md:h-[400px]"></div>
                        ))}
                    </div>
                    <div className="mt-24">
                        <div className="mx-auto h-10 w-10 bg-slate-200"></div>
                    </div>
                </div>
            </div>

            <div id="section-4" className="flex min-h-screen w-full gap-16 bg-gray-200 p-16 lg:block lg:px-5">
                <div className="flex w-[400px] flex-col flex-wrap justify-between lg:w-full lg:flex-row md:gap-4">
                    <div className="lg:mb-4 lg:w-full">
                        <h3 className="mb-2 text-4xl">Schematic</h3>
                        <Button>Brand Identity</Button>
                    </div>

                    <div className="flex items-start gap-8 pl-6 lg:w-1/2 md:w-full">
                        <span className="text-6xl md:text-4xl">01</span>
                        <div>
                            <span className="text-4xl md:text-3xl">Background</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque in eligendi
                                iusto doloremque et ratione quia ab aut placeat.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-6 lg:w-1/2 md:w-full">
                        <span className="text-6xl md:text-4xl">01</span>
                        <div>
                            <span className="text-4xl md:text-3xl">Background</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam quia ullam
                                distinctio cum porro! Ullam maxime maiores provident nesciunt.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex h-full w-full grow flex-col gap-4 
                    lg:mt-16 lg:h-[500px] lg:flex-row lg:justify-between lg:gap-0 md:flex-col md:gap-4"
                >
                    <div className="aspect-[4/3] w-2/5 self-end bg-slate-500 lg:w-[48%] lg:self-auto md:w-full"></div>
                    <div className="aspect-[4/3] w-2/3 self-start bg-slate-500 lg:w-[48%] lg:self-auto md:w-full"></div>
                </div>
            </div>

            <div id="section-5" className="lg:px-5">
                <div className="mx-auto mt-8 aspect-video w-2/3 bg-slate-200 lg:w-full"></div>
                <div className="mx-auto mt-5 h-10 w-10 bg-slate-200"></div>
            </div>

            <div id="section-6" className="flex justify-between gap-8 pl-20 pt-24 lg:pl-5 md:h-screen">
                <div className="flex w-[400px] flex-col justify-between">
                    <div>
                        <h3 className="mb-2 text-4xl">Seig & Sky</h3>
                        <Button>Welcome</Button>
                    </div>

                    <div className="flex items-start gap-8 pl-6">
                        <span className="text-6xl md:text-4xl">01</span>
                        <div>
                            <span className="text-4xl md:text-3xl">Background</span>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium explicabo cumque ex
                                doloribus exercitationem perspiciatis blanditiis labore assumenda dignissimos itaque!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pl-6">
                        <span className="text-6xl md:text-4xl">01</span>
                        <div>
                            <span className="text-4xl md:text-3xl">Solution</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi quas cupiditate
                                quo, est atque quis! Vero recusandae corrupti nisi!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex grow items-center justify-center">
                    <div className="h-[75vh] w-2/5 bg-slate-200 lg:h-[50vh] lg:w-4/5"></div>
                </div>
            </div>

            <div id="section-7" className="min-h-screen py-16">
                <div className="mx-auto flex w-3/4 items-center justify-around gap-16 lg:w-full lg:flex-col lg:px-5">
                    <div className="aspect-[3/5] h-[75vh] bg-slate-200"></div>
                    <div className="aspect-square h-[50vh] bg-slate-300"></div>
                </div>
                <div className="mx-auto mt-10 h-10 w-10 bg-slate-200"></div>
            </div>

            <div
                id="section-8"
                className="flex min-h-screen flex-col justify-between px-16 py-20 
                lg:justify-around md:px-5"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-5xl md:text-4xl">
                            <span>What </span>
                            <span className="italic">we </span>
                            <span>do</span>
                        </div>
                        <p className="mt-4 text-2xl md:text-xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, eum.
                        </p>
                    </div>
                    <div className="h-20 w-20 bg-slate-200"></div>
                </div>

                <div className="mx-auto grid w-fit grid-cols-3 gap-4 lg:grid-cols-2 md:mt-5 md:w-full md:grid-cols-1">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="flex justify-center gap-2 
                                rounded-full border border-solid border-black px-16 py-6 md:w-full md:py-4"
                        >
                            <span>Brand identity</span>
                            <span>&rarr;</span>
                        </div>
                    ))}
                </div>
            </div>

            <div id="section-9" className="min-h-screen bg-neutral-900 p-16 text-white">
                <h1 className="text-5xl md:text-4xl">Award & Press</h1>
                <div className="mt-16 flex flex-wrap justify-around gap-5 lg:mt-32 md:mt-10">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex min-w-[300px] max-w-[440px] flex-col gap-2">
                            <div className="aspect-square w-full bg-slate-200"></div>
                            <span>Press--Jan 03, 2023</span>
                            <a href="#" className="text-white underline active:text-white">
                                Lorem ipsum dolor sit amet.
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div id="section-10" className="min-h-screen bg-gray-300 p-20 md:p-5">
                <h1 className="text-5xl md:text-4xl">
                    <span>Our</span>
                    <span className="italic"> Clients</span>
                </h1>
                <div className="mt-32 grid grid-cols-4 gap-x-8 gap-y-20 lg:grid-cols-2 md:mt-5 md:grid-cols-1 md:gap-4">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-20 bg-slate-200 md:h-40"></div>
                    ))}
                </div>
            </div>

            <div
                id="section-11"
                className="min-h-screen bg-black p-20 text-white md:flex md:flex-col md:items-center md:p-5 md:pt-20"
            >
                <h4 className="text-3xl">StudioAgatho</h4>
                <div className="mt-32 flex md:mt-5 md:flex-col">
                    <div className="w-2/3 md:flex md:w-full md:flex-col md:items-center">
                        <div className="mb-4 text-4xl">
                            <span>Make your </span>
                            <span className="iatlic">mark</span>
                        </div>
                        <Button style={{ borderColor: "white" }} />
                    </div>
                    <div className="flex flex-col gap-4 md:mt-5 md:items-center">
                        <div className="flex flex-col">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="flex flex-col">
                            <span>Lorem ipsum dolor sit amet.</span>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="flex gap-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-10 w-10 bg-slate-200"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
