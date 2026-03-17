import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Clock3,
  Shirt,
  ShieldCheck,
  Sparkles,
  Waves,
  WashingMachine,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site";

const serviceIcons: LucideIcon[] = [
  Sparkles,
  WashingMachine,
  Shirt,
  Waves,
  ShieldCheck,
  BedDouble,
  Clock3,
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Services"
          title="Professional cleaning services for garments, shirts, and household items."
          description="EZSUCH LAUNDRY offers reliable in-store laundry and dry cleaning solutions tailored to busy professionals, families, and anyone who wants garments returned fresh, neat, and ready to wear."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={service.title}
                className="card-surface h-full rounded-3xl p-6"
              >
                <div className="inline-flex rounded-2xl bg-brand-50 p-3">
                  <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
