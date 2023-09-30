import { redirect } from "next/navigation"

function Home() {
    redirect("/landing")

    return null
}

export default Home
