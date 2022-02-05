import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token exists if the usere is logeed in.
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  // if the route requested by the user has a token or has request to auth throuigh the server, let the rueqeust passes.

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // if user does not have token and requests access to the app direct them to the login page.
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
