import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";

import { company } from "@/lib/site";

type CtaButtonsProps = {
  compact?: boolean;
  fullWidthOnMobile?: boolean;
};

export function CtaButtons({
  compact = false,
  fullWidthOnMobile = true,
}: CtaButtonsProps) {
  const widthClass = fullWidthOnMobile ? "w-full sm:w-auto" : "w-auto";
  const sizeClass = compact
    ? "px-4 py-3 text-sm"
    : "px-5 py-3.5 text-sm sm:text-base";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={company.whatsappMessageHref}
        target="_blank"
        rel="noreferrer"
        className={`${widthClass} ${sizeClass} inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 font-semibold text-white shadow-soft hover:bg-brand-600`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Call or WhatsApp Now
      </a>
      <a
        href="#contact"
        className={`${widthClass} ${sizeClass} inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white font-semibold text-slate-900 hover:border-brand-200 hover:bg-brand-50`}
      >
        <PhoneCall className="h-4 w-4 text-brand-600" aria-hidden="true" />
        Drop Off Your Laundry Today
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
