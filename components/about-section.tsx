import Image from "next/image";
import { Clock3, MapPin, Sparkles } from "lucide-react";

import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About EZSUCH"
              title="Your trusted local laundry service in Ijaiye-Ojokoro."
              description="EZSUCH LAUNDRY & DRY CLEANING SERVICES delivers precise cleaning and pressing for all your garments and household items. We focus on dependable care, careful handling, and convenience for people living and working around Ijaiye."
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
                  Conveniently located on Ahmed Tijani Street in Ijaiye-Ojokoro.
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

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600">
              From shirts and suits to bedding and household items, we deliver a
              reliable finish without unnecessary fuss. If you want a local
              laundry shop that values quality pressing, clear communication, and
              on-time service, EZSUCH is ready to help.
            </p>

            <div className="mt-8">
              <CtaButtons compact />
            </div>
          </div>

          <div className="order-1 grid gap-5 sm:grid-cols-2 lg:order-2">
            <div className="card-surface overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={galleryImages.foldedLaundry}
                  alt="Neatly folded clean laundry arranged on a table."
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
                  alt="Freshly cleaned suits hanging neatly after garment care."
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
