import { PagePlaceholder } from '@repo/ui/components';

const PAGE_TITLE = 'Данна сторінка ще в розробці';
const PAGE_DESCRIPTION =
  'Але я прикладаю максимум зусиль для того щоб вона тут з`явилась';

export default function HomePage() {
  return (
    <div className="flex w-[100%] justify-center">
      <PagePlaceholder
        imgSrc="/3dicons-tools-dynamic-premium.png"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
    </div>
  );
}
