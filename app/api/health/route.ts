import { NextResponse } from "next/server"

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "API is working",
    timestamp: new Date().toISOString(),
  })
}
