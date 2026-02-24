import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async (params) => {
  let locale = await params.requestLocale;

  if (!routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
