import React from "react";
import Link from "next/link";

const priorities = [
  {
    number: "01",
    icon: "🎓",
    title: "Education",
    shortTitle: "Quality Education for All",
    description:
      "Strengthening education as a foundation for individual opportunity, social progress and national development.",
    points: [
      "Quality and accessible education",
      "Practical and skill-based learning",
      "Technology in education",
      "Better opportunities for students",
    ],
    color: "sky",
  },
  {
    number: "02",
    icon: "💡",
    title: "Innovation",
    shortTitle: "Ideas Into Solutions",
    description:
      "Encouraging young people and institutions to develop ideas, technology and practical solutions to real problems.",
    points: [
      "Innovation and technology",
      "Research and creativity",
      "Digital transformation",
      "Support for new ideas",
    ],
    color: "red",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Youth & Entrepreneurship",
    shortTitle: "Create Opportunities",
    description:
      "Creating an environment where young people can develop skills, start businesses and create opportunities for themselves and others.",
    points: [
      "Entrepreneurship development",
      "Skill development",
      "Employment opportunities",
      "Youth participation",
    ],
    color: "sky",
  },
  {
    number: "04",
    icon: "🏥",
    title: "Health",
    shortTitle: "Accessible Healthcare",
    description:
      "Supporting better healthcare access and stronger awareness so that development improves people's everyday lives.",
    points: [
      "Accessible healthcare",
      "Health awareness",
      "Community health",
      "Better public services",
    ],
    color: "red",
  },
  {
    number: "05",
    icon: "🏗️",
    title: "Development",
    shortTitle: "Development That Reaches People",
    description:
      "Supporting balanced economic, social and physical development that connects communities and creates opportunities.",
    points: [
      "Infrastructure development",
      "Local development",
      "Economic opportunity",
      "Community participation",
    ],
    color: "sky",
  },
  {
    number: "06",
    icon: "🤝",
    title: "Social Responsibility",
    shortTitle: "Working Together",
    description:
      "Encouraging citizens, communities, institutions and young people to participate in building a stronger society.",
    points: [
      "Community engagement",
      "Social responsibility",
      "Collaboration",
      "Inclusive participation",
    ],
    color: "red",
  },
];

const PlanPage = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Background decorations */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-sky-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Plan & Priorities
            </span>

            <h1 className="mt-7 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              A Vision for
              <span className="block text-sky-500">a Better Tomorrow</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A focus on education, youth, innovation, entrepreneurship,
              healthcare and sustainable development — with people and
              communities at the center.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600">
                Education
              </span>

              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                Youth
              </span>

              <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600">
                Innovation
              </span>

              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                Development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                  The Vision
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Development begins with people.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  The goal is to encourage a development approach where
                  education creates knowledge, knowledge creates innovation,
                  innovation creates opportunities, and opportunities contribute
                  to stronger communities and a stronger nation.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  The detailed plans and priorities will continue to evolve
                  through consultation, experience, research and engagement with
                  citizens and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN PRIORITIES */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-red-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
              Areas of Focus
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Six Areas of Priority
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These areas provide the foundation for a broader vision. More
              detailed plans and initiatives can be added as they are developed.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {priorities.map((priority) => (
              <PriorityCard key={priority.number} priority={priority} />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION FEATURE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-4xl border border-sky-100 bg-sky-50">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative overflow-hidden bg-sky-600 p-8 sm:p-12">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-500/20" />

                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                    Priority #01
                  </span>

                  <div className="mt-10 text-6xl">🎓</div>

                  <h2 className="mt-6 text-4xl font-bold text-white">
                    Education
                    <span className="block text-sky-100">
                      at the Heart of Development
                    </span>
                  </h2>

                  <p className="mt-6 leading-8 text-sky-100">
                    Education can provide the knowledge, skills and confidence
                    people need to participate meaningfully in society and the
                    economy.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-slate-900">
                  Areas to Explore
                </h3>

                <div className="mt-7 space-y-4">
                  <FocusItem
                    title="Quality Education"
                    text="Improving learning opportunities and educational outcomes."
                  />

                  <FocusItem
                    title="Practical & Skill-Based Learning"
                    text="Connecting education with practical skills and real-world opportunities."
                  />

                  <FocusItem
                    title="Technology in Education"
                    text="Using technology and innovation to expand learning opportunities."
                  />

                  <FocusItem
                    title="Youth Development"
                    text="Helping young people develop knowledge, confidence and employable skills."
                  />

                  <FocusItem
                    title="Research & Innovation"
                    text="Encouraging students and institutions to think creatively and solve problems."
                  />

                  <FocusItem
                    title="Equal Opportunity"
                    text="Working toward wider access to educational opportunities."
                  />
                </div>

                {/* PLACEHOLDER */}
                <div className="mt-8 rounded-2xl border border-dashed border-sky-200 bg-white p-5">
                  <p className="text-sm font-semibold text-sky-600">
                    Detailed Education Plan
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Detailed proposals, programs and implementation ideas will
                    be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTH */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Youth
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Young People at the Center
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
              Young people bring energy, ideas, creativity and the ability to
              build new solutions. Their participation is an important part of
              long-term national development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <YouthCard
              icon="💼"
              title="Employment"
              text="Create pathways toward meaningful employment and professional growth."
            />

            <YouthCard
              icon="🚀"
              title="Entrepreneurship"
              text="Encourage young people to turn ideas into businesses and opportunities."
            />

            <YouthCard
              icon="💡"
              title="Innovation"
              text="Create space for young people to experiment, build and solve problems."
            />
          </div>
        </div>
      </section>

      {/* DEVELOPMENT MODEL */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
              Connected Development
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              One Priority Can Strengthen Another
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Education, innovation, entrepreneurship and development should not
              be treated as isolated areas.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-5">
            <FlowCard icon="🎓" title="Education" text="Knowledge" />

            <FlowArrow />

            <FlowCard icon="💡" title="Innovation" text="Ideas" />

            <FlowArrow />

            <FlowCard icon="🚀" title="Entrepreneurship" text="Opportunities" />
          </div>

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-7">
              <p className="text-lg font-semibold leading-8 text-slate-800">
                Knowledge → Innovation → Opportunity → Employment → Community
                Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PLAN PLACEHOLDER */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-4xl border border-sky-100 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl">
              📋
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Detailed Plans Coming Soon
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              This section will present specific plans, proposed initiatives,
              measurable priorities and implementation ideas as they are
              developed.
            </p>

            <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
              <Placeholder text="Education Reform" />
              <Placeholder text="Youth Programs" />
              <Placeholder text="Innovation & Technology" />
              <Placeholder text="Entrepreneurship" />
              <Placeholder text="Health & Social Development" />
              <Placeholder text="Infrastructure & Development" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-4xl">🇳🇵</span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            A vision is only the beginning.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Meaningful development requires ideas, participation, collaboration
            and consistent work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/journey"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-sky-200 hover:text-sky-600"
            >
              Explore the Journey
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600"
            >
              Connect
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================
   COMPONENTS
========================= */

const PriorityCard = ({ priority }) => {
  const isRed = priority.color === "red";

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${
            isRed ? "bg-red-50" : "bg-sky-50"
          }`}
        >
          {priority.icon}
        </div>

        <span
          className={`text-sm font-bold ${
            isRed ? "text-red-400" : "text-sky-400"
          }`}
        >
          {priority.number}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {priority.title}
      </h3>

      <p
        className={`mt-1 text-sm font-semibold ${
          isRed ? "text-red-500" : "text-sky-500"
        }`}
      >
        {priority.shortTitle}
      </p>

      <p className="mt-4 leading-7 text-slate-600">{priority.description}</p>

      <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
        {priority.points.map((point) => (
          <div key={point} className="flex items-start gap-3">
            <span
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                isRed ? "bg-red-50 text-red-500" : "bg-sky-50 text-sky-500"
              }`}
            >
              ✓
            </span>

            <span className="text-sm text-slate-600">{point}</span>
          </div>
        ))}
      </div>

      <div
        className={`mt-6 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-full ${
          isRed ? "bg-red-500" : "bg-sky-500"
        }`}
      />
    </div>
  );
};

const FocusItem = ({ title, text }) => {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-600">
        ✓
      </div>

      <div>
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  );
};

const YouthCard = ({ icon, title, text }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
};

const FlowCard = ({ icon, title, text }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-3 font-bold text-slate-900">{title}</h3>

      <p className="mt-1 text-sm text-sky-600">{text}</p>
    </div>
  );
};

const FlowArrow = () => {
  return (
    <div className="hidden items-center justify-center md:flex">
      <span className="text-2xl font-bold text-sky-300">→</span>
    </div>
  );
};

const Placeholder = ({ text }) => {
  return (
    <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
      + {text}
    </div>
  );
};

export default PlanPage;
