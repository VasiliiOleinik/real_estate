import { NextResponse } from 'next/server'
import { parseCookies } from 'nookies'
import React from 'react'

function middleware(req) {
  const cookies = parseCookies({ req })
  const token = cookies.token

  if (!token) {
    const url = process.env.NEXT_MAIN_URL
    return NextResponse.redirect(`${url}/login`)
  }

  return NextResponse.next()
}

export default middleware
