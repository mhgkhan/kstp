import { NextResponse } from "next/server";
export async function candidateMiddleware(request) {
    if (request.nextUrl.pathname.startsWith("/candidate")) {
        if (request.cookies.has("CANDIDATETOKEN")) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
}

export async function instituteMiddleware(request) {
    if (request.nextUrl.pathname.startsWith("/institute")) {
        if (request.cookies.has("INSTITUTETOKEN")) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
    
}

export async function adminMiddleware(request) {
    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (request.cookies.has("ADMINTOKEN")) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
    
}