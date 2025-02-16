import { NextResponse } from "next/server";

export async function middleware(request) {

    if (request.nextUrl.pathname.startsWith("/candidate")) {
        if (request.cookies.has("CANDIDATEAUTHTOKEN")) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/institute")) {
        if (request.cookies.has("INSTITUTETOKEN")) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/institutelogin", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (request.cookies.has("ADMINTOKEN")) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }


}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/candidate/:pages*', '/institute/:pages*', '/admin/:pages*'],
}