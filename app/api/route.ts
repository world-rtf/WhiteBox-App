import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";
// https://nextjs.org/docs/app/api-reference/file-conventions/route
//  https://www.wisp.blog/blog/nextjs-15-api-get-and-post-request-examples
// отправка
export async function GET() {
    return NextResponse.json(await prisma.news.findMany());
}

// получение
export async function POST(request: Request) {
    const data = await request.json();
    const newNews = await prisma.news.create({ data: { ...data, date: new Date(data.date) } });
    return NextResponse.json(newNews);
}
