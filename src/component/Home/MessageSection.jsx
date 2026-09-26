import React from "react";

const MessageSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />A Message to the
            People of Nepal
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Together, We Can Build the{" "}
            <span className="text-sky-600">Nepal We Want to See</span>
            <span className="text-red-500">.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            A message about responsibility, opportunity, innovation,
            entrepreneurship and working together for the development of Nepal.
          </p>
        </div>

        {/* Main Message */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-5">
            {/* LEFT - Quote / Speaker */}
            <div className="relative overflow-hidden bg-linear-to-br from-sky-500 to-sky-600 p-8 sm:p-12 lg:col-span-2">
              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-red-500/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="text-6xl font-serif leading-none text-white/30">
                    “
                  </div>

                  <blockquote className="mt-4 text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                    Nepal&apos;s development is not the responsibility of one
                    person, one organization, or one generation.
                  </blockquote>

                  <p className="mt-6 text-base leading-7 text-sky-50">
                    It is a shared responsibility. Every citizen has the ability
                    to contribute through knowledge, skills, ideas, hard work,
                    and service to society.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="h-px w-16 bg-white/40" />

                  <p className="mt-4 text-lg font-bold text-white">
                    Hem Raj Bhatta
                  </p>

                  <p className="mt-1 text-sm text-sky-100">
                    Education • Entrepreneurship • Public Engagement
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT - Speech */}
            <div className="p-8 sm:p-12 lg:col-span-3">
              {/* Introduction */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-lg text-sky-600">
                    ✦
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    A Shared Responsibility
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  I believe that our progress depends on how well we work
                  together.{" "}
                  <strong className="font-semibold text-sky-600">
                    Economic development, social development, and physical
                    development must move forward together.
                  </strong>{" "}
                  We need stronger institutions, better education, meaningful
                  employment opportunities, innovative businesses, modern
                  infrastructure, accessible healthcare, and communities where
                  every individual has the opportunity to contribute.
                </p>
              </div>

              {/* Youth */}
              <div className="mt-10 border-t border-slate-200 pt-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-xl">
                    🚀
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    To the Youth of Nepal
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  Our young generation is one of Nepal&apos;s greatest sources
                  of energy, creativity, and possibility.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  I encourage young people not only to search for opportunities
                  but also to{" "}
                  <strong className="font-semibold text-slate-900">
                    create opportunities.
                  </strong>{" "}
                  Learn new skills. Build ideas. Start businesses. Conduct
                  research. Develop technology. Work with your communities.
                  Volunteer for social causes. And most importantly, do not be
                  afraid to start small.
                </p>

                {/* Three Ideas */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-bold text-sky-600">
                      A small idea
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      can become meaningful innovation.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-bold text-sky-600">
                      A small business
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      can create employment.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-red-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm font-bold text-red-500">
                      A small act
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      can inspire a community.
                    </p>
                  </div>
                </div>

                {/* Entrepreneurship */}
                <p className="mt-6 leading-7 text-slate-600">
                  Entrepreneurship should not only be about personal success. It
                  can also become a means of creating jobs, solving problems,
                  strengthening local economies, and contributing to national
                  development.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="border-t border-slate-200 bg-slate-50/80 px-8 py-10 sm:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Let&apos;s Work Together
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                We need a culture where education connects with innovation,
                innovation connects with entrepreneurship, entrepreneurship
                creates opportunities, and those opportunities contribute to the
                development of our communities and our country.
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Whether you are a student, teacher, entrepreneur, professional,
                farmer, worker, researcher, or community member,{" "}
                <strong className="font-semibold text-slate-900">
                  your contribution matters.
                </strong>
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Let us encourage one another to think differently, work
                honestly, share knowledge, support innovation, and take
                responsibility for the communities around us.
              </p>

              {/* Strong Statement */}
              <div className="mx-auto mt-8 max-w-3xl rounded-r-xl border-l-4 border-sky-500 bg-white px-6 py-5 text-left shadow-sm">
                <p className="text-lg font-medium italic leading-8 text-slate-800 sm:text-xl">
                  Nepal&apos;s future will not be built only by talking about
                  change. It will be built by people who are willing to
                  participate in creating it.
                </p>
              </div>

              {/* Final CTA */}
              <div className="mt-10">
                <p className="text-lg font-semibold text-sky-600">
                  Let us work together, learn together, innovate together, and
                  build together.
                </p>

                <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm">
                  <span>🇳🇵</span>

                  <span>For Nepal.</span>

                  <span className="text-sky-600">For Our Communities.</span>

                  <span className="text-red-500">For the Next Generation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
