import { Header } from '@components/Header';
import '@repo/tailwind-config';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <div className="grid min-h-screen grid-rows-[auto_1fr]">
            <Header />
            <main className="relative">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
