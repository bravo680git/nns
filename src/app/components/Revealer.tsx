import { HTMLProps } from "react"
import { animated, useInView } from "@react-spring/web"
import { SLIDE_ANI_DIST } from "@/utils/animations"

type Props = {
    children?: JSX.Element | string | JSX.Element[]
    style?: any
    className?: string
    type?: "left" | "right" | "up" | "down"
} & HTMLProps<HTMLDivElement>

function Revealer({ children, style, className, type = "left", ...props }: Props): JSX.Element {
    const [ref, spring] = useInView(
        () => ({
            from: { x: SLIDE_ANI_DIST[type][0], y: SLIDE_ANI_DIST[type][1], opacity: 0 },
            to: { x: 0, y: 0, opacity: 1 },
        }),
        { rootMargin: "-10% 0px" },
    )

    return (
        <animated.div ref={ref} style={{ ...style, ...spring }} className={className}>
            {children}
        </animated.div>
    )
}

export default Revealer
