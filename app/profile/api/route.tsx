import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    // const requestHeader=new Headers(request.headers)
    // console.log(requestHeader.get("Authorization"));

    const theme=request.cookies.get("theme")
    console.log(theme);

    const cookiesSet=await cookies()
    cookiesSet.set("resultperpage","20")
    console.log(cookiesSet.get("resultperpage"));

    

    const headerList=await headers()
    console.log(headerList.get("Authorization"))
        return new Response("<h1>Return the API keys</h1>",{
            headers:{
                "Content-type":"text/html",
                "Set-cookie":"theme=dark"
            }
        })

    }