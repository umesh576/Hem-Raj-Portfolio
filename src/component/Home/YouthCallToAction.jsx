import React from "react";
import Link from "next/link";

const YouthCallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background Decorations */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 h-px w-24 bg-linear-to-r from-transparent to-sky-300" />
      <div className="absolute right-0 top-1/2 h-px w-24 bg-linear-to-l from-transparent to-red-300" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />A
          Message to the Youth of Nepal
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          The Future of Nepal
          <br />
          <span className="text-sky-600">Is Yours to Build</span>
          <span className="text-red-500">.</span>
        </h2>

        {/* Main Message */}
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          You are not only the future of Nepal. You are a part of Nepal&apos;s
          present. Your ideas, skills, creativity and participation can help
          shape the country we want to see tomorrow.
        </p>

        {/* Action Words */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-600">
            Learn
          </span>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-600">
            Create
          </span>

          <span className="rounded-full border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-500">
            Innovate
          </span>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-600">
            Lead
          </span>

          <span className="rounded-full border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-500">
            Serve
          </span>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-600">
            Build
          </span>
        </div>

        {/* Quote */}
        <div className="mx-auto mt-12 max-w-3xl rounded-r-xl border-l-4 border-sky-500 bg-slate-50 px-6 py-5 text-left shadow-sm">
          <p className="text-xl font-medium italic leading-8 text-slate-800 sm:text-2xl">
            Don&apos;t just ask what Nepal can give you. Ask what you can
            contribute to Nepal.
          </p>

          <p className="mt-3 text-sm font-semibold text-sky-600">
            — Hem Raj Bhatta
          </p>
        </div>

        {/* Three Action Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {/* Idea */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:scale-110">
              💡
            </div>

            <h3 className="mt-5 font-bold text-slate-900">Have an Idea?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Turn your ideas into projects, innovations and solutions.
            </p>
          </div>

          {/* Build */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:scale-110">
              🚀
            </div>

            <h3 className="mt-5 font-bold text-slate-900">Build Something</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Start a business, develop technology or create opportunities.
            </p>
          </div>

          {/* Collaboration */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl transition duration-300 group-hover:scale-110">
              🤝
            </div>

            <h3 className="mt-5 font-bold text-slate-900">Work Together</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Connect, collaborate and contribute to your community.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded-xl bg-sky-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-200"
          >
            Share Your Idea
            <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Bottom Statement */}
        <div className="mt-14">
          <p className="text-sm font-medium text-slate-400">
            Education • Innovation • Entrepreneurship • Social Development
          </p>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-linear-to-r from-sky-400 via-white to-red-500 shadow-sm" />
        </div>
      </div>
    </section>
  );
};

export default YouthCallToAction;
