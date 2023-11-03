"use client"

import { HTMLProps } from "react"
import { useEffect } from "react"
import { animated, useInView, useSpring } from "@react-spring/web"
import { SLIDE_ANI_DIST } from "@/utils/animations"

type Props = {
    children?: JSX.Element | string | JSX.Element[]
    style?: any
    direction?: "left" | "right" | "up" | "down"
    type?: "slide" | "faded" | "zoomIn" | "zoomOut"
} & HTMLProps<HTMLDivElement>

function Revealer({ children, style, direction = "left", type = "slide", ...props }: Props): JSX.Element {
    const animation = {
        slide: {
            from: { x: SLIDE_ANI_DIST[direction][0], y: SLIDE_ANI_DIST[direction][1], opacity: 0 },
            to: { x: 0, y: 0, opacity: 1 },
        },
        faded: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        zoomIn: {
            from: { scale: 0.3 },
            to: { scale: 1 },
        },
        zoomOut: {
            from: { scale: 1.5 },
            to: { scale: 1 },
        },
    }
    const [ref, inView] = useInView()
    const [spring, api] = useSpring(() => animation[type])

    useEffect(() => {
        if (inView) {
            api.start(() => ({
                ...(animation[type] as any),
                config: { duration: 400 },
            }))
        } else {
            api.stop()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, api])

    return (
        <animated.div {...props} ref={ref} style={{ ...style, ...spring }}>
            {children}
        </animated.div>
    )
}

export default Revealer
