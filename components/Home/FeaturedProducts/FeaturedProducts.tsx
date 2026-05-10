import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import {
  featuredProductGroup,
  LiveProductCard,
  liveProducts,
} from "../portfolioContent";

export default function FeaturedProducts() {
  return (
    <section
      id="ProductsSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="hero-grid absolute inset-0 opacity-[0.03]" />

      <div className="relative">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={
              "flex-none h-5 w-5 translate-y-[2px] text-AAsecondary md:h-6 md:w-5"
            }
          />
          <div className="flex-none items-center pr-2">
            <span className="font-Mono text-sm text-AAsecondary sm:text-xl">
              {" "}
              03.
            </span>
            <span className="pl-3 font-Header text-lg font-medium tracking-wide text-[#fcfcfd] md:text-2xl">
              Live Products
            </span>
          </div>
          <div className="h-[1px] w-full bg-white/[0.06] xl:w-1/3 md:w-1/2" />
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="mt-6 max-w-2xl font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl lg:text-5xl">
            Real products on the internet, built for scale.
          </h3>
          <p className="mt-5 max-w-2xl font-Text2 text-base leading-8 text-[#a3b8cc] sm:text-lg">
            This section highlights shipped work with a real public footprint.
            These are products actively used by thousands of users where code
            quality and UX matter.
          </p>
        </div>

        <FeaturedBoard product={featuredProductGroup} />

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {liveProducts.map((product) => (
            <StickerCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedBoard({ product }: { product: LiveProductCard }) {
  return (
    <article className="comic-panel relative mt-14 overflow-hidden rounded-[20px] p-6 sm:rounded-[30px] sm:p-10">
      <div className="relative grid gap-12 xl:grid-cols-[1fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded border border-[#e5c185]/30 bg-[#e5c185]/10 px-3 py-1 font-Mono text-[10px] uppercase tracking-widest text-[#e5c185]">
              {product.badgeLabel}
            </span>
          </div>

          <h4 className="mt-6 font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl lg:text-[2.8rem]">
            {product.name}
          </h4>
          <p className="mt-3 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
            {product.company}
          </p>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#a3b8cc]">
            {product.summary}
          </p>

          <div className="my-8 h-[1px] w-full bg-white/[0.06]" />

          <div className="space-y-4">
            {product.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <ArrowIcon
                  className={"mt-1 h-4 w-4 flex-none text-[#fcfcfd]"}
                />
                <span className="text-sm leading-7 text-[#a3b8cc] sm:text-base">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {product.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-3 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          {product.images.map((image, index) => (
            <figure
              key={image.src}
              className="comic-panel relative overflow-hidden rounded-[18px] p-2 sm:rounded-[24px]"
            >
              <div className="overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#131b2f]">
                <Img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover object-top h-[240px] sm:h-[300px] opacity-90"
                />
              </div>

              <figcaption className="px-3 pb-2 pt-5">
                <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  Feature View
                </div>
                <div className="mt-2 font-Header text-lg leading-snug text-[#fcfcfd]">
                  {image.caption}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

function StickerCard({ product }: { product: LiveProductCard }) {
  const preview = product.images[0];

  return (
    <article className="comic-panel flex flex-col relative overflow-hidden rounded-[20px] p-6 sm:rounded-[30px] sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
          {product.badgeLabel}
        </span>
      </div>

      <div className="comic-panel mt-6 rounded-[18px] p-2 sm:rounded-[24px]">
        <div className="overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#131b2f]">
          <Img
            src={preview.src}
            alt={preview.alt}
            className="h-56 w-full object-cover object-top opacity-90"
          />
        </div>
      </div>

      <div className="mt-8 flex-1">
        <p className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
          {product.company}
        </p>
        <h4 className="mt-2 font-Header text-2xl leading-tight text-[#fcfcfd] sm:text-3xl">
          {product.name}
        </h4>
        <p className="mt-5 text-base leading-8 text-[#a3b8cc]">
          {product.summary}
        </p>

        <div className="mt-7 space-y-4">
          {product.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-3">
              <ArrowIcon className={"mt-1 h-4 w-4 flex-none text-[#fcfcfd]"} />
              <span className="text-sm leading-7 text-[#a3b8cc]">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {product.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-white/[0.06] border border-white/[0.1] px-5 py-2.5 font-Header text-xs font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
