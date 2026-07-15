import ContactFlow from "@/components/ContactFlow";
import GrowthRings from "@/components/GrowthRings";
import Wordmark from "@/components/Wordmark";

const services = [
  {
    name: "Websites that work",
    description:
      "A fast, modern site built around what your customers are looking for. Designed, written, and built by one person who answers your calls.",
  },
  {
    name: "Get found on Google",
    description:
      "Search engine work in plain English. I tune your pages and your local listings so the people searching for what you do actually find you.",
  },
  {
    name: "Turn visitors into customers",
    description:
      "Traffic only matters if it becomes calls, bookings, and orders. I find where visitors give up and fix it, one measured change at a time.",
  },
];

const proofPoints = [
  {
    title: "The website was my whole job",
    body: "I spent years at software companies where the website was the sales team. I ran those sites end to end, from the code to the copy to the results.",
  },
  {
    title: "Forms that people actually finish",
    body: "At my last marketing role I replaced every landing page form with a short guided version that asked what the visitor wanted first. Conversions climbed across the board. You just used that idea below.",
  },
  {
    title: "Speed is a feature",
    body: "Slow pages lose customers before they read a word. I build light and fast, and I can usually make an existing site noticeably quicker without a rebuild.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-moss-200 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Wordmark />
          <nav className="flex items-center gap-6 text-sm font-medium text-pine-900">
            <a href="#services" className="hidden hover:text-leaf-600 sm:block">
              What I do
            </a>
            <a href="#about" className="hidden hover:text-leaf-600 sm:block">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-pine-900 px-4 py-2 text-paper transition-colors hover:bg-leaf-600"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-leaf-600">
                Web help for Michigan businesses
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-pine-950 sm:text-6xl">
                Your website should be bringing you customers.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark-600">
                I’m Philip. I build, fix, and tune websites for small businesses
                around Ann Arbor and metro Detroit. More people finding you,
                faster pages, more calls and orders.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-leaf-600 px-7 py-3 font-medium text-paper transition-colors hover:bg-pine-800"
                >
                  Tell me what you need
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-moss-200 px-7 py-3 font-medium text-pine-900 transition-colors hover:border-leaf-600"
                >
                  See what I do
                </a>
              </div>
            </div>
            <GrowthRings className="mx-auto w-64 max-w-full sm:w-80 lg:w-full" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-moss-200 bg-moss-100/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight text-pine-950 sm:text-4xl">
              What I do
            </h2>
            <p className="mt-3 max-w-2xl text-bark-600">
              One person, three jobs, all pointed at the same goal. A website
              that earns its keep.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-2xl border border-moss-200 bg-paper p-7 transition-colors hover:border-leaf-600"
                >
                  <h3 className="font-display text-xl font-bold text-pine-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bark-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Treezio */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-pine-950 sm:text-4xl">
            Why trust me with it
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.title}>
                <h3 className="font-display text-lg font-bold text-pine-900">
                  {point.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bark-600">{point.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-moss-200 bg-pine-900 text-paper">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              About me
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-moss-200">
              <p>
                I’m Philip DiPatrizio. I’ve spent my career on the web, first
                leading digital marketing teams and then building sites myself
                as a developer. That mix is the whole point of Treezio. I write
                the code, and I also understand why the site exists, to bring
                you business.
              </p>
              <p>
                I live in the Ann Arbor area and I like working with businesses
                I can actually visit. When you work with Treezio you work with
                me, not an account manager, and you’ll always get a straight
                answer about what’s worth doing and what isn’t.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-pine-950 sm:text-4xl">
            What’s going on with your website?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-bark-600">
            Pick the one that sounds most like you. No commitment, no jargon,
            and a real reply from me within a business day.
          </p>
          <div className="mt-10">
            <ContactFlow />
          </div>
        </section>
      </main>

      <footer className="border-t border-moss-200">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-bark-600 sm:flex-row">
          <p>
            <span className="font-display font-bold text-pine-900">Treezio</span>{" "}
            · Ann Arbor, Michigan
          </p>
          <p>© {new Date().getFullYear()} Philip DiPatrizio</p>
        </div>
      </footer>
    </>
  );
}
