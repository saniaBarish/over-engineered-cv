import Image from 'next/image';

type PagePlaceholderProps = {
  title: string;
  description: string;
  imgSrc?: string;
};

export function PagePlaceholder({
  title,
  description,
  imgSrc,
}: PagePlaceholderProps) {
  return (
    <div className="border-border bg-card relative flex h-[100%] w-full items-center justify-center overflow-hidden rounded-3xl border backdrop-blur-md">
      <div className="bg-primary absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {imgSrc && (
          <div className="relative h-64 w-64 transition-transform duration-700 hover:scale-110 sm:h-96 sm:w-96">
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 256px, 384px"
              priority
            />
          </div>
        )}
        <div className="max-w-md space-y-3">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-primary h-1.5 w-1.5 animate-bounce rounded-full"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
