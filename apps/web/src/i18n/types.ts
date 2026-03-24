import { useTranslations } from 'next-intl';

export type ExistedLocale = 'uk' | 'en';
export type TFunction = ReturnType<typeof useTranslations<never>>;
