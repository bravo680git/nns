import { revalidateTag } from "next/cache"

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const { id } = params
    revalidateTag(id)
    return Response.json({
        status: true,
        id,
        timestamp: new Date().toISOString(),
    })
}
