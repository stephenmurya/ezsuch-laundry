import type { LucideIcon } from "lucide-react";
import { Clock3, Coins, MapPin, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/site";

const benefitIcons: LucideIcon[] = [ShieldCheck, ShieldCheck, Clock3, MapPin];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A dependable neighborhood laundry service that treats your wardrobe with care."
            description="We focus on the details that matter most: clean finishing, respectful fabric handling, fair pricing, and the convenience of a trusted local location in Ijaiye-Ojokoro."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? Coins;

              return (
                <article
                  key={benefit.title}
                  className="card-surface rounded-3xl p-6"
                >
                  <div className="inline-flex rounded-2xl bg-brand-50 p-3">
                    <Icon
                      className="h-6 w-6 text-brand-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
