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
      <body>
        <NextIntlClientProvider messages={messages}>
          <main>
            <Header />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
