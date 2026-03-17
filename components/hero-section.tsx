import Image from "next/image";
import { CircleCheckBig, Clock3, MapPin, ShieldCheck } from "lucide-react";

import { CtaButtons } from "@/components/cta-buttons";
import { company, galleryImages, heroHighlights } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-hero-glow"
      aria-labelledby="hero-heading"
    >
      <div className="container-shell grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Trusted laundry and dry cleaning in Ijaiye-Ojokoro
          </span>
          <h1
            id="hero-heading"
            className="mt-5 text-balance text-[2rem] font-semibold leading-tight sm:text-[2.65rem] lg:text-[3.65rem]"
          >
            {company.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            {company.tagline}. Professional laundry and dry cleaning for busy
            households and working professionals who want crisp pressing,
            careful handling, and reliable service close to home in Ijaiye.
          </p>

          <div className="mt-8">
            <CtaButtons />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Prefer to call directly?{" "}
            <a
              href={company.phoneHref}
              className="font-semibold text-slate-900 hover:text-brand-600"
            >
              {company.phoneDisplay}
            </a>
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-surface rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Visit Our Store
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {company.addressLine1}
                    <br />
                    {company.addressLine2}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-surface rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <Clock3
                  className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Open Monday - Saturday
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    8:00 AM - 6:00 PM
                    <br />
                    Mon - Sat with quick service available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-8 space-y-3">
            {heroHighlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-6 h-40 rounded-full bg-brand-100 blur-3xl" />
          <div className="relative card-surface overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/5]">
              <Image
                src={galleryImages.hero}
                alt="Freshly pressed shirts arranged neatly on hangers."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="border-t border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base font-semibold text-slate-950">
                    Crisp, clean, reliable garment care
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    From everyday laundry to office shirts, suits, and special
                    garments, we help every item return clean, neat, and ready
                    to wear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
