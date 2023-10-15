import cl from "classnames"
import { MouseEvent } from "react"

const colors = {
    primary: "#ff6b00",
    secondary: "#1081e8",
}

function Button({
    children,
    type = "primary",
    rounded = false,
    onClick,
    className,
}: {
    children: React.ReactNode
    type?: "primary" | "secondary"
    rounded?: boolean
    onClick?: (e: MouseEvent) => void
    className?: string
}) {
    const shadowStyle = "0 20px 40px 0px " + colors[type]

    return (
        <button
            className={cl(
                "inline-flex h-10 items-center rounded-lg px-4 font-bold text-white hover:opacity-80",
                {
                    "w-10 justify-center !rounded-full !px-0": rounded,
                },
                className,
            )}
            style={{ backgroundColor: colors[type], boxShadow: shadowStyle }}
            onClick={onClick ? (e) => onClick(e) : undefined}
        >
            {children}
        </button>
    )
}

export default Button
