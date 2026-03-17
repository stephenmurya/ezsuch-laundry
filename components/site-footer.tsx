import { MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { company, navLinks, socialPlaceholders } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.65fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
              {company.name}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {company.alternateTagline}. Trusted in-store laundry and dry
              cleaning service for busy professionals and households in Ikeja,
              Lagos.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
              Reach Us
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <a
                href={company.phoneHref}
                className="flex items-start gap-3 hover:text-brand-600"
              >
                <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>{company.phoneDisplay}</span>
              </a>
              <a
                href={company.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-brand-600"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>{company.fullAddress}</span>
              </a>
              <div className="flex flex-wrap gap-2 pt-1">
                {socialPlaceholders.map((social) =>
                  social.live ? (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      {social.label}
                    </a>
                  ) : (
                    <span
                      key={social.label}
                      className="inline-flex items-center rounded-full border border-dashed border-slate-300 px-3 py-2 text-xs font-semibold text-slate-400"
                    >
                      {social.label} coming soon
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 soft-divider pt-6 text-sm text-slate-500">
          <p>
            Copyright {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
