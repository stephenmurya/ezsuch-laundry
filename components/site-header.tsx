import { PhoneCall } from "lucide-react";

import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="min-w-0">
            <p className="truncate text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              Ikeja, Lagos
            </p>
            <p className="truncate text-lg font-semibold text-slate-950">
              {company.name}
            </p>
          </a>

          <div className="hidden items-center gap-6 sm:flex">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-brand-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:border-brand-200 hover:bg-brand-50"
            >
              <PhoneCall className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>

          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:border-brand-200 hover:bg-brand-50 sm:hidden"
          >
            <PhoneCall className="h-4 w-4 text-brand-600" aria-hidden="true" />
            Call
          </a>
        </div>

        <nav aria-label="Mobile navigation" className="mt-4 sm:hidden">
          <ul className="flex items-center justify-between gap-3 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href} className="flex-1">
                <a
                  href={link.href}
                  className="block rounded-full border border-slate-200 px-4 py-2 text-center hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

