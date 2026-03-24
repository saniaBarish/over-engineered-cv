import { PagePlaceholder } from '@repo/ui/components';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('StaticPages.WorkInProgress');

  return (
    <div className="h-[100%]">
      <PagePlaceholder
        imgSrc="/3dicons-tools-dynamic-premium.png"
        title={t('PAGE_TITLE')}
        description={t('PAGE_DESCRIPTION')}
      />
    </div>
  );
}
