import { NextResponse } from 'next/server'
import { parseCookies } from 'nookies'

export function middleware(req) {
  const cookies = parseCookies({ req })
  const token = cookies.token

  if (!token) {
    return NextResponse.redirect('/login')
  }

  return NextResponse.next()
}
