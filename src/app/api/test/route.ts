import { NextResponse, NextRequest } from 'next/server'
import { createUser } from '@/server/db/verify-schema'
export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams
    const name = query.get('name')
    const email = query.get('email')
    const id = query.get('id')
    const result = createUser.safeParse({
        name, email,id
    })
    if (result.success) {
        return NextResponse.json(result.data)
    } else {
        return NextResponse.json({ error: result.error })
    }

}