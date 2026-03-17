import { Clock3, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { businessHours, company } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Visit Or Contact Us"
          title="Drop off your garments in Ijaiye and let us take care of the finish."
          description="Need clean office wear, neatly pressed shirts, fresh bedding, or careful treatment for delicate fabrics? Call, send a WhatsApp message, or visit our shop for friendly, professional service."
          align="center"
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-6">
            <div className="card-surface rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                Contact details
              </h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <PhoneCall
                    className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Phone</p>
                    <a
                      href={company.phoneHref}
                      className="mt-1 inline-block text-sm leading-6 text-slate-600 hover:text-brand-600"
                    >
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      WhatsApp
                    </p>
                    <a
                      href={company.whatsappMessageHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm leading-6 text-slate-600 hover:text-brand-600"
                  >
                    Chat with us now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Address
                    </p>
                    <a
                      href={company.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                    className="mt-1 inline-block text-sm leading-6 text-slate-600 hover:text-brand-600"
                  >
                    {company.fullAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3
                    className="mt-1 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Business hours
                    </p>
                    <div className="mt-1 space-y-1 text-sm leading-6 text-slate-600">
                      {businessHours.map((entry) => (
                        <p key={entry.days}>
                          <span className="font-medium text-slate-700">
                            {entry.days}:
                          </span>{" "}
                          {entry.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-surface overflow-hidden rounded-[2rem]">
              <iframe
                title="Map showing EZSUCH LAUNDRY in Ijaiye-Ojokoro, Lagos"
                src={company.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0"
              />
            </div>
          </div>

          <div className="card-surface rounded-[2rem] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-950">
              Send a quick message
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Share your name, phone number, and what you need cleaned. This
              form is ready for a simple Formspree setup before launch.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
