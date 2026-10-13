import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitCorporateLead } from "@/lib/leads.functions";
import {
  FlaskIcon,
  HandshakeIcon,
  LayersIcon,
} from "@/components/lanuza/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lanuza Cosmetics — Owner of VA VA VROOM®" },
      { name: "description", content: "Lanuza Cosmetics LLC develops innovative cosmetic products and precision makeup tools for its proprietary brand, VA VA VROOM®." },
      { property: "og:title", content: "Lanuza Cosmetics — Owner of VA VA VROOM®" },
      { property: "og:description", content: "Lanuza Cosmetics LLC develops innovative cosmetic products and precision makeup tools for its proprietary brand, VA VA VROOM®." },
      { name: "twitter:title", content: "Lanuza Cosmetics — Owner of VA VA VROOM®" },
      { name: "twitter:description", content: "Lanuza Cosmetics LLC develops innovative cosmetic products and precision makeup tools for its proprietary brand, VA VA VROOM®." },
    ],
  }),
  component: LanuzaLanding,
});

/* ------------------------------------------------------------------ */

function LanuzaLanding() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <Vision />
      <WhatWeDo />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}

/* ------------------------------ Nav ------------------------------- */

function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Our Brand" },
    { href: "#contact", label: "Corporate Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <a
          href="#home"
          className="font-serif text-xl tracking-wide text-foreground md:text-2xl"
        >
          Lanuza <span className="text-muted-foreground">Cosmetics</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-[#4B525A]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#4B525A] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-[#4B525A]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Geometry accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-24 h-px w-16 bg-brand-red/50 md:left-16" />
        <div className="absolute right-6 top-24 text-[10px] uppercase tracking-[0.35em] text-white/50 md:right-16">
          Est. MMXXI
        </div>
        <div className="absolute bottom-10 left-6 text-[10px] uppercase tracking-[0.35em] text-white/40 md:left-16">
          Scroll
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-32 md:px-10 lg:px-16">
        <p className="mb-10 text-[10px] uppercase tracking-[0.4em] text-brand-red">
          01 — Corporate Overview
        </p>
        <h1 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Beauty Innovation.
          <br />
          Engineered for
          <br />
          <span className="italic text-white/85">Better Performance</span>.
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Lanuza Cosmetics is a beauty innovation company specializing in
          advanced cosmetic products and precision makeup tools. By combining
          formulation expertise, functional packaging design, and precision
          engineering, we create high-performance beauty solutions for our
          proprietary brand, VA VA VROOM®.
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 border border-brand-red bg-brand-red px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand-red"
          >
            Corporate Contact
            <span className="inline-block h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Vision ----------------------------- */

function Vision() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-brand-red">
          02 — Vision
        </p>
        <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
          Our Vision
        </h2>
        <div className="mx-auto mt-8 h-px w-12 bg-brand-red/80" />
        <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
          At Lanuza Cosmetics, we believe better beauty begins with better
          thinking. We develop products and tools that solve real consumer
          challenges — combining cosmetic science, thoughtful design, and
          precision engineering to deliver beauty solutions that are effective,
          practical, and designed to perform.
        </p>
      </div>
    </section>
  );
}

/* ---------------------- Our Approach to Innovation ---------------- */

function WhatWeDo() {
  const items = [
    {
      icon: FlaskIcon,
      title: "Product Innovation & Development",
      body: "We identify real consumer needs and translate them into our own cosmetic products and precision makeup tools for VA VA VROOM®, combining product design, formulation expertise, and functional performance.",
    },
    {
      icon: LayersIcon,
      title: "Functional Packaging Design",
      body: "We integrate thoughtful packaging design and application functionality to create practical, differentiated beauty experiences.",
    },
    {
      icon: HandshakeIcon,
      title: "Manufacturing & Supplier Partnerships",
      body: "We collaborate with external manufacturers, packaging suppliers, and formulation specialists to develop and produce VA VA VROOM® products.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-brand-red">
            03 — Our Approach
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
            Our Approach to Innovation
          </h2>
          <div className="mt-6 h-px w-12 bg-brand-red/80" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:mt-20 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-[#F5F5F5] md:p-10"
            >
              <div className="flex items-start justify-between">
                <Icon className="text-foreground" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-10 font-serif text-2xl leading-tight text-foreground md:text-[1.75rem]">
                {title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Portfolio --------------------------- */

function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-brand-red">
              04 — Our Brand
            </p>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              Our Brand
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8">
          <article className="group relative overflow-hidden border border-border bg-[#F5F5F5] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(10,10,10,0.35)] md:p-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <h3 className="font-serif text-4xl leading-none text-brand-red md:text-6xl">
                  VA VA VROOM
                  <sup className="ml-1 align-super text-base md:text-xl">®</sup>
                </h3>
                <div className="mt-6 h-px w-10 bg-brand-red/80" />
              </div>

              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  VA VA VROOM® is the proprietary beauty brand of Lanuza
                  Cosmetics LLC. Designed for busy lifestyles and hot, humid
                  climates, the brand combines practical formulations and
                  functional packaging to make everyday beauty routines easier
                  and more convenient.
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground">
                  Featuring Melt-Free Mess-Free<sup className="align-super">®</sup>{" "}
                  technology.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                  href="https://vavavroombeauty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-3 border border-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
                  >
                    Shopify Store
                    <span className="inline-block h-px w-4 bg-current transition-all duration-300 group-hover/btn:w-6" />
                  </a>
                  <a
                    href="https://a.co/d/026aDWui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
                  >
                    Amazon Store
                    <span className="inline-block h-px w-4 bg-current transition-all duration-300 group-hover/btn:w-6" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Contact Form -------------------------- */

function ContactForm() {
  const submit = useServerFn(submitCorporateLead);
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    company: "",
    email: "",
    message: "",
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    try {
      await submit({ data: form });
      toast.success("Your inquiry has been sent. Our team will be in touch shortly.");
      setForm({ full_name: "", company: "", email: "", message: "" });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Please check the form and try again.";
      toast.error(message);
    } finally {
      setPending(false);
    }
  }

  const field =
    "w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-base text-white placeholder-white/40 outline-none transition-colors focus:border-white";

  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 text-white md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-brand-red">
              05 — Contact
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Corporate
              <br />
              Contact.
            </h2>
            <div className="mt-6 h-px w-12 bg-brand-red/80" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
              We welcome inquiries from manufacturers, packaging suppliers,
              formulation specialists, and potential business partners
              interested in collaborating with Lanuza Cosmetics on the
              development of VA VA VROOM® products.
            </p>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Full Name
                </span>
                <input
                  required
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  value={form.full_name}
                  onChange={onChange("full_name")}
                  className={field}
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Company / Organization
                </span>
                <input
                  required
                  type="text"
                  autoComplete="organization"
                  maxLength={160}
                  value={form.company}
                  onChange={onChange("company")}
                  className={field}
                  placeholder="Company name"
                />
              </label>
            </div>

            <label className="mt-8 block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Corporate Email
              </span>
              <input
                required
                type="email"
                autoComplete="email"
                maxLength={255}
                value={form.email}
                onChange={onChange("email")}
                className={field}
                placeholder="name@company.com"
              />
            </label>

            <label className="mt-8 block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Message
              </span>
              <textarea
                required
                rows={5}
                minLength={10}
                maxLength={2500}
                value={form.message}
                onChange={onChange("message")}
                className={`${field} resize-none`}
                placeholder="Tell us about your inquiry"
              />
            </label>

            <button
              type="submit"
              disabled={pending}
              className="group mt-12 inline-flex items-center gap-4 border border-brand-red bg-brand-red px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand-red disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Sending…" : "Send Inquiry"}
              <span className="inline-block h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Footer ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-10 text-white/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-xs md:grid-cols-3 md:items-center md:px-10 lg:px-16">
        <p className="tracking-wide">
          © 2026 Lanuza Cosmetics LLC. All rights reserved.
        </p>

        


        <p className="text-[11px] leading-relaxed md:text-right">
          VA VA VROOM<sup className="align-super">®</sup> and Melt-Free Mess-Free
          <sup className="align-super">®</sup> are registered trademarks of
          Lanuza Cosmetics LLC.
        </p>
      </div>
    </footer>
  );
}
