'use client';

import * as React from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

type Locale = 'uk' | 'en';

const LOCALES: Array<{ value: Locale; label: string; flag: string }> = [
  { value: 'uk', label: 'Українська', flag: '🇺🇦' },
  { value: 'en', label: 'English', flag: '🇬🇧' },
];

export function LocaleSwitcherDropdown() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const current = LOCALES.find((l) => l.value === locale) ?? LOCALES[0];

  function setLocale(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next }); // зберігає поточний route
  }

  // закрити по Escape
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Switch language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="border-border bg-card/30 hover:bg-card/50 inline-flex h-10 items-center gap-2 rounded-2xl border px-3 text-sm backdrop-blur-md transition-colors"
      >
        <span className="text-base leading-none">{current?.flag}</span>
        <span className="text-muted-foreground text-xs">▾</span>
      </button>

      {open && (
        <>
          {/* overlay для кліку поза меню */}
          <button
            aria-label="Close language menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />

          <div
            role="menu"
            className="border-border bg-background/90 absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border p-1 shadow-lg backdrop-blur-xl"
          >
            {LOCALES.map((l) => {
              const active = l.value === locale;
              return (
                <button
                  key={l.value}
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => setLocale(l.value)}
                  className={[
                    'hover:bg-card/50 flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors',
                    active ? 'bg-card/40' : '',
                  ].join(' ')}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base leading-none">{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  <span className="text-muted-foreground">
                    {active ? '✓' : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
