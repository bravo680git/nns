import cl from "classnames"
import { HTMLProps } from "react"

type Props = {
    children?: JSX.Element | JSX.Element[] | string
    className?: string
    hover?: boolean
    desc?: string
    descClassName?: string
} & HTMLProps<HTMLDivElement>

function Card({ children, className, hover = false, desc, descClassName }: Props) {
    return (
        <div
            data-component="Card"
            className={cl(className, "", {
                "group relative cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105": hover,
            })}
        >
            {children}
            {hover && (
                <div
                    className={cl(
                        descClassName,
                        "invisible absolute left-0 top-0 flex h-full w-full items-end justify-center bg-[rgba(0,0,0,0.02)]",
                        "pb-10 text-black transition-all duration-700 group-hover:visible",
                        "text-2xl font-bold",
                    )}
                >
                    <p className="group-hover:animate-slide-up">{desc}</p>
                </div>
            )}
        </div>
    )
}

export default Card
