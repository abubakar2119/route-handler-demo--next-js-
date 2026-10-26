import { NextRequest } from "next/server";
import { comments } from "./data";


export async function GET(request:NextRequest){
  const searchParam=request.nextUrl.searchParams;
  const query=searchParam.get("query");
  const filterComments=query
  ?comments.filter((comments)=>comments.text.includes(query))
  :comments;
    return Response.json(filterComments)
}

export async function POST(request: Request) {
  const body = await request.json();



  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };

  comments.push(newComment);

  return Response.json(newComment, { status: 201 });
}