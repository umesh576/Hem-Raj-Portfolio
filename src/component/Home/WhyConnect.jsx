const reasons = [
  {
    icon: "🌱",
    title: "Community & Social Engagement",
    description:
      "Connect around ideas, community initiatives, youth engagement, and opportunities to contribute beyond professional life.",
  },
  {
    icon: "🤝",
    title: "Mentorship & Guidance",
    description:
      "Seek perspective from someone involved in education and organizational leadership when making important academic or professional decisions.",
  },
  {
    icon: "💡",
    title: "Ideas & Collaboration",
    description:
      "Build conversations around new ideas, projects, partnerships, and initiatives that can create meaningful opportunities.",
  },
  {
    icon: "🎓",
    title: "Education & Learning",
    description:
      "Connect to exchange ideas about education, academic development, student opportunities, and the changing landscape of higher education.",
  },
  {
    icon: "💼",
    title: "Career & Opportunities",
    description:
      "Explore conversations around career development, professional growth, skills, and opportunities for the next stage of your journey.",
  },
  {
    icon: "🚀",
    title: "Business & Entrepreneurship",
    description:
      "Share entrepreneurial ideas, discuss business experiences, and build meaningful professional relationships.",
  },
];

const WhyConnect = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-600">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Connect • Learn • Collaborate
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Connect With <span className="text-sky-500">Me?</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            A professional connection can be more than a contact. It can be an
            opportunity to exchange ideas, learn from experiences, explore
            possibilities, and build meaningful relationships.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:bg-sky-500 group-hover:scale-110">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {reason.description}
              </p>

              {/* Accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-20"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-center shadow-xl sm:px-12">
          {/* Decorative circles */}
          <div className="absolute -left-10 -top-20 h-40 w-40 rounded-full bg-sky-500/20 blur-2xl" />
          <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-red-500/20 blur-2xl" />

          <div className="relative">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Let&apos; Start a Conversation
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Whether you are a student, professional, entrepreneur, educator,
              or someone with an idea to share, meaningful conversations can be
              the beginning of something valuable.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center rounded-lg bg-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
            >
              Connect With Me
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConnect;
