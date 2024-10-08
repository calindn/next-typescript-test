
import { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';


const LOCALES = ['en', 'ro', 'ru']
const DEFAULT_LOCALE = 'ro';
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const headers = { 'accept-language': request.headers.get('accept-language') };
  const languages = new Negotiator({ headers }).languages();
 
  const locale = match(languages, LOCALES, DEFAULT_LOCALE);
  return locale;
}
 
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
  ],
}
