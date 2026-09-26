import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        {/* Background Decorations */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Let&apos;s Connect
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s Start a{" "}
              <span className="text-sky-600">Conversation</span>
              <span className="text-red-500">.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you have an idea, want to collaborate, discuss
              opportunities, or simply want to connect, I would be happy to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* ================= LEFT INFO ================= */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-sky-600 p-8 shadow-xl shadow-sky-100 sm:p-10">
                {/* Title */}
                <p className="text-sm font-semibold uppercase tracking-wider text-sky-100">
                  Get in Touch
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  Your ideas matter.
                </h2>

                <p className="mt-5 leading-7 text-sky-50">
                  Meaningful change begins with conversations, ideas,
                  collaboration and action. If you have something to share,
                  I&apos;d be glad to hear from you.
                </p>

                {/* Contact Details */}
                <div className="mt-10 space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      ✉️
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                        Email
                      </p>

                      <a
                        href="mailto:contact@example.com"
                        className="mt-1 block text-sm font-medium text-white transition hover:text-sky-100"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      📞
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                        Phone
                      </p>

                      <a
                        href="tel:+9770000000000"
                        className="mt-1 block text-sm font-medium text-white transition hover:text-sky-100"
                      >
                        +977 000 000 0000
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      📍
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-white/20" />

                {/* Social */}
                <div>
                  <p className="text-sm font-semibold text-white">
                    Connect with me
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white transition hover:bg-white hover:text-sky-600"
                    >
                      f
                    </a>

                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white transition hover:bg-white hover:text-sky-600"
                    >
                      in
                    </a>

                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white transition hover:bg-white hover:text-sky-600"
                    >
                      X
                    </a>

                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white transition hover:bg-white hover:text-sky-600"
                    >
                      ▶
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                    Send a Message
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    How can we connect?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Fill out the form below and share what you would like to
                    discuss.
                  </p>
                </div>

                {/* Form */}
                <form className="mt-8 space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+977"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      What would you like to discuss?
                    </label>

                    <select
                      id="subject"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    >
                      <option value="">Select an option</option>
                      <option>Business & Entrepreneurship</option>
                      <option>Education</option>
                      <option>Youth & Innovation</option>
                      <option>Collaboration</option>
                      <option>Social Initiatives</option>
                      <option>General Discussion</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-200"
                  >
                    Send Message
                    <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM MESSAGE ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-4xl">🇳🇵</span>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Every conversation can be the beginning of something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Whether it is a new idea, a collaboration, an opportunity, or simply
            a conversation about the future, let&apos;s connect and explore what
            we can create together.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center font-semibold text-sky-600 transition hover:text-sky-700"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
