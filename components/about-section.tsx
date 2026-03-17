import Image from "next/image";
import { Clock3, MapPin, Sparkles } from "lucide-react";

import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { company, galleryImages } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About Clean Looks"
              title="Family-owned garment care with a professional finish."
              description={`Clean Looks Drycleaners is a family-owned dry cleaning service in the heart of Ikeja, delivering spotless results since ${company.foundedYear}. We care for your wardrobe like our own, combining approachable neighborhood service with the polished finishing professionals expect.`}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Sparkles className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-slate-950">
                  Crisp finishing
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Neat pressing and presentation for every pickup.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-slate-950">
                  Easy to reach
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Conveniently located by Ikeja Medical Centre.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Clock3 className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-slate-950">
                  Fast turnaround
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ready when you need your garments looking their best.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <CtaButtons compact />
            </div>
          </div>

          <div className="order-1 grid gap-5 sm:grid-cols-2 lg:order-2">
            <div className="card-surface overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={galleryImages.foldedLaundry}
                  alt="A dry cleaning professional handling neatly arranged folded garments."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>
            <div className="card-surface overflow-hidden rounded-[2rem] sm:translate-y-8">
              <div className="relative aspect-[4/5]">
                <Image
                  src={galleryImages.ironing}
                  alt="Clean laundry and an ironing station prepared for careful garment finishing."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

