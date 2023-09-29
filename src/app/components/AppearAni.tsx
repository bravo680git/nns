import { animated, useSpring } from "@react-spring/web"
import { SLIDE_ANI_DIST } from "@/utils/animations"

type Props = {
    children?: JSX.Element | string | JSX.Element[]
    style?: any
    className?: any
    type?: "up" | "down" | "left" | "right"
}

function AppearAni({ children, style, className, type = "left" }: Props) {
    const spring = useSpring({
        from: { x: SLIDE_ANI_DIST[type][0], y: SLIDE_ANI_DIST[type][1], opacity: 0 },
        tp: { x: 0, y: 0, opacity: 1 },
    })

    return (
        <animated.div style={{ ...style, ...spring }} className={className}>
            {children}
        </animated.div>
    )
}

export default AppearAni
