import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const cookie = (await cookies()).delete("CANDIDATEAUTHTOKEN").delete("INSTITUTEAUTHTOKEN").delete("ADMINAUTHTOKEN")
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
}