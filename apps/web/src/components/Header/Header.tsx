import Image from 'next/image';
import Link from 'next/link';
import { LocaleSwitcherDropdown } from '@components/LocaleSwitcherDropdown';
import { TFunction } from '@i18n/types';
import { getTranslations } from 'next-intl/server';
// import { MobileMenu } from './MobileMenu';

type NavItem = {
  key: string;
  href: string;
  label: string;
};

// TODO: oba add locales
const getNavigation = (t: TFunction): NavItem[] => [
  { key: 'about', href: '/#about', label: t('ABOUT') },
  { key: 'projects', href: '/#projects', label: t('PROJECTS') },
  { key: 'skills', href: '/#skills', label: t('SKILLS') },
  { key: 'notes', href: '/#notes', label: t('NOTES') },
  { key: 'dashboard', href: '/dashboard', label: t('DASHBOARD') },
];

export async function Header() {
  const t = await getTranslations('NavPanel');
  const navigation = getNavigation(t);
  return (
    <header className="sticky top-0 z-50">
      <div className="border-border/60 bg-background/60 supports-[backdrop-filter]:bg-background/40 backdrop-blur-xl">
        <div className="max-w-8xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-2xl px-2 py-1"
            >
              <div className="border-border/70 bg-card/50 relative h-9 w-9 overflow-hidden rounded-2xl border">
                <Image
                  src="/my-avatar.png"
                  alt="OB"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <div className="text-sm leading-4 font-semibold tracking-tight">
                  Oleksandr Barishpolets
                </div>
                <div className="text-muted-foreground text-xs leading-4">
                  Frontend Engineer • React / Next.js
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:bg-card/40 rounded-2xl px-3 py-2 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcherDropdown />

            <Link
              href="https://github.com/saniaBarish"
              className="border-border bg-card/30 hover:bg-card/50 hidden rounded-2xl border px-3 py-2 text-sm transition-colors sm:inline-flex"
            >
              GitHub
            </Link>

            <Link
              href="/#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-3 py-2 text-sm font-semibold transition-colors"
            >
              Hire me
            </Link>

            {/* <MobileMenu nav={NAV} /> */}
          </div>
        </div>

        <div className="border-border/60 h-px w-full border-t" />
      </div>
    </header>
  );
}
