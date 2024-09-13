import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const defalutLocale = "en";
const locales = ["en", "bn", "ar"];

const getLocale = (request) => {
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptLanguage };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defalutLocale);
};

export const middleware = (request) => {
  const pathName = request.nextUrl.pathname;

  const pathNameISMissingLocale = locales.every(
    (locale) =>
      !pathName.startsWith(`/${locale}`) && !pathName.startsWith(`/${locale}/`)
  );

  if (pathNameISMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
