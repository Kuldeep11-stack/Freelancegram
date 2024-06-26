import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./lib/supabase/supabaseServer";//as it is sever file so import from there
import { cookies } from "next/headers";


export async function middleware(request: NextRequest){
    //@ts-ignore
    const supabase = createClient(cookies())
    const {data } = await supabase.auth.getUser();
    if(data == null){
        return NextResponse.redirect(new URL("/login?error=Please login first to acces this route." , request.url));
    }
    return NextResponse.next()
}

export const config = {
    matcher : ["/"]
}