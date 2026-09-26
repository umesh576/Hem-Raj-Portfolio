import React from "react";
import Link from "next/link";

const plans = [
  {
    number: "01",
    icon: "🎓",
    title: "Education for the Future",
    description:
      "Build an education system that goes beyond examinations and focuses on practical knowledge, critical thinking, technology, creativity and real-world skills.",
    points: [
      "Practical and skill-based learning",
      "Quality education across communities",
      "Stronger technical and vocational education",
    ],
  },
  {
    number: "02",
    icon: "💡",
    title: "Innovation & Ideas",
    description:
      "Create an environment where young Nepalis can turn ideas into research, technology, startups and solutions to local problems.",
    points: [
      "Youth innovation programs",
      "Research and technology development",
      "Support for student-led ideas and projects",
    ],
  },
  {
    number: "03",
    icon: "💼",
    title: "Skills, Jobs & Entrepreneurship",
    description:
      "Connect education with the labour market so that students graduate with skills, experience and opportunities—not only certificates.",
    points: [
      "Industry-linked education",
      "Entrepreneurship and startup culture",
      "Career-oriented technical training",
    ],
  },
  {
    number: "04",
    icon: "🏥",
    title: "Education & Health",
    description:
      "Promote a stronger connection between education, physical health, mental well-being, nutrition, sanitation and healthy communities.",
    points: [
      "Health awareness in schools",
      "Nutrition and sanitation",
      "Student physical and mental well-being",
    ],
  },
  {
    number: "05",
    icon: "🚀",
    title: "Youth at the Center",
    description:
      "Give young people greater opportunities to participate in innovation, entrepreneurship, community initiatives and national development.",
    points: [
      "Youth leadership opportunities",
      "Digital and entrepreneurial skills",
      "Platforms for youth ideas and participation",
    ],
  },
  {
    number: "06",
    icon: "🇳🇵",
    title: "Development That Reaches Everyone",
    description:
      "Promote balanced development by connecting education, technology, health, employment, infrastructure and local economic opportunities.",
    points: [
      "Digital transformation",
      "Inclusive local development",
      "Evidence-based planning and accountability",
    ],
  },
];

const PlanSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Vision • Ideas • Action
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A Plan for a <span className="text-sky-500">Better Nepal</span>
            <span className="text-red-500">.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            A vision focused on education, innovation, health, youth opportunity
            and sustainable development—because Nepal&apos;s future depends on
            investing in its people.
          </p>
        </div>

        {/* Vision statement */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-slate-950 p-8 text-center shadow-2xl sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-2xl shadow-lg shadow-sky-500/30">
            🇳🇵
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Put People, Knowledge & Innovation at the Heart of Development
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            Nepal&apos;s development should create opportunities for people to
            learn, innovate, work, build businesses and contribute to their
            communities. Education should become a foundation for skills,
            employment, entrepreneurship and responsible citizenship.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50"
            >
              {/* Number */}
              <div className="absolute right-6 top-5 text-5xl font-black text-gray-100 transition-colors duration-300 group-hover:text-sky-50">
                {plan.number}
              </div>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:bg-sky-500 group-hover:scale-105">
                {plan.icon}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-xl font-bold text-gray-900">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {plan.description}
              </p>

              {/* Points */}
              <ul className="mt-5 space-y-2">
                {plan.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-1 text-sky-500">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

        {/* Youth message */}
        <div className="mt-16 grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          {/* Left */}
          <div className="bg-sky-500 p-8 sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-100">
              For the Next Generation
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Nepal&apos;s young people should not only look for opportunities.
              They should have opportunities to create them.
            </h3>

            <p className="mt-5 leading-7 text-sky-50">
              From classrooms to startups, from research laboratories to local
              communities, young people can be active participants in shaping
              Nepal&apos;s future.
            </p>
          </div>

          {/* Right */}
          <div className="p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-gray-900">Areas of Focus</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  🎓
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Better Education
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Knowledge, skills and practical learning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  💡
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    More Innovation
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Research, ideas, technology and entrepreneurship.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  🚀
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Youth Opportunity
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Skills, careers, leadership and participation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  🇳🇵
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sustainable Development
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Health, technology, infrastructure and inclusive growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            Have an idea for Nepal&apos;s future?
          </p>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center rounded-lg bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
          >
            Share Your Idea
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
