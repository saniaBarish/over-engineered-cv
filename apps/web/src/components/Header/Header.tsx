import Image from 'next/image';
import Link from 'next/link';
import { LocaleSwitcherDropdown } from '@components/LocaleSwitcherDropdown';
// import { MobileMenu } from './MobileMenu';

type NavItem = {
  key: string;
  href: string;
  label: string;
};

const NAV: NavItem[] = [
  { key: 'about', href: '/#about', label: 'About' },
  { key: 'projects', href: '/#projects', label: 'Projects' },
  { key: 'skills', href: '/#skills', label: 'Skills' },
  { key: 'notes', href: '/#notes', label: 'Notes' },
  { key: 'dashboard', href: '/dashboard', label: 'Dashboard' },
];

export function Header() {
  return (
    <header className="w-full">
      {/* blurred backdrop */}
      <div className="border-border/60 bg-background/60 supports-[backdrop-filter]:bg-background/40 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-2xl px-2 py-1"
            >
              <div className="border-border/70 bg-card/50 relative h-9 w-9 overflow-hidden rounded-2xl border">
                {/* placeholder logo */}
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:bg-card/40 rounded-2xl px-3 py-2 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
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

        {/* thin separator */}
        <div className="border-border/60 h-px w-full border-t" />
      </div>
    </header>
  );
}
