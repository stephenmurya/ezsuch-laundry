import { company } from "@/lib/site";

export function ContactForm() {
  return (
    <form action={company.formAction} method="POST" className="space-y-4">
      <input
        type="hidden"
        name="_subject"
        value="New inquiry from EZSUCH LAUNDRY website"
      />
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
          placeholder="0803 605 5396"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
          placeholder="Tell us what you want cleaned or pressed."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-600"
      >
        Send Inquiry
      </button>

      <p className="text-sm leading-6 text-slate-500">
        Replace the Formspree endpoint in <code>lib/site.ts</code> to activate
        email delivery.
      </p>
    </form>
  );
}
