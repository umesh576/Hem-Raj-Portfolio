import React from "react";
import Image from "next/image";
import Link from "next/link";

const journey = [
  {
    year: "Early Life",
    title: "A Simple Beginning",
    subtitle: "From Attariya, Kailali",
    description:
      "Born in 2053 in a simple family in Kailali, Hem Raj Bhatta began his journey with ordinary circumstances but extraordinary determination. His early academic journey was not always easy, but he carried one thing with him throughout — the dream of building a better life through hard work.",
    icon: "🌱",
    color: "sky",
  },
  {
    year: "Class 8",
    title: "The First Step into Business",
    subtitle: "A Fruit Cart and a Big Dream",
    description:
      "While still studying in Class 8, Hem Raj started selling fruits. He would wake up early, carry goods on a bicycle and set up his small business in the market. There were difficult days, unexpected losses and many obstacles, but he continued moving forward.",
    icon: "🍎",
    color: "red",
  },
  {
    year: "After SLC",
    title: "Failure Became a Lesson",
    subtitle: "Dehradun and the Return Home",
    description:
      "After completing SLC, he travelled to Dehradun, India, in search of employment. Facing rejection and uncertainty, he eventually returned to Nepal and tried his hand at goat trading. The experience did not bring the success he hoped for, but it strengthened his determination to keep learning and trying.",
    icon: "🚲",
    color: "sky",
  },
  {
    year: "Student Life",
    title: "Studying While Working",
    subtitle: "The Struggle Behind the Success",
    description:
      "He came to Kathmandu to continue his education. While pursuing his studies, he worked in different ways — distributing pamphlets, providing counseling and teaching tuition classes. Balancing education and work demanded long hours, patience and discipline.",
    icon: "📚",
    color: "red",
  },
  {
    year: "BBA → MBA",
    title: "Education Became the Foundation",
    subtitle: "From BBA to MBA",
    description:
      "After completing his BBA, Hem Raj continued his academic journey toward an MBA while managing his own expenses. His educational journey gradually shaped his interest in business, education, career counseling and strategic planning.",
    icon: "🎓",
    color: "sky",
  },
  {
    year: "Career Station",
    title: "From a Small Idea to Career Station",
    subtitle: "Building an Education & Career Platform",
    description:
      "During his MBA journey, he started Career Station with a small beginning. The early years were focused more on learning, building relationships and understanding students' needs than on immediate financial success. Over time, the organization expanded its work in education and career counseling.",
    icon: "🚀",
    color: "red",
  },
  {
    year: "Gyan Sewa",
    title: "Giving Back Through Education",
    subtitle: "Gyan Sewa Pvt. Ltd.",
    description:
      "His journey also expanded into social and educational initiatives through Gyan Sewa. The focus has been on making education, career guidance and opportunities more accessible to young people and communities.",
    icon: "🤝",
    color: "sky",
  },
  {
    year: "Milton International College",
    title: "Educational Leadership",
    subtitle: "CEO — Milton International College",
    description:
      "His experience in education, business management and career counseling led him into educational leadership. As CEO of Milton International College, he has focused on institutional development, educational opportunities, stakeholder engagement and long-term growth.",
    icon: "🏫",
    color: "red",
  },
  {
    year: "Leadership & Public Engagement",
    title: "From Business to Public Service",
    subtitle: "A Broader Responsibility",
    description:
      "With years of experience working with students, educators, entrepreneurs and communities, his journey gradually expanded toward public engagement and national development. Education, youth opportunities, innovation and entrepreneurship became increasingly important areas of his public vision.",
    icon: "🇳🇵",
    color: "sky",
  },
  {
    year: "2026",
    title: "CCM Member — Rastriya Swatantra Party",
    subtitle: "A New Chapter in Public Leadership",
    description:
      "In the first historic general convention of the Rastriya Swatantra Party, Hem Raj Bhatta won an open competition for central member with 1,137 votes. This marked a new chapter in his journey — moving from entrepreneurship and educational leadership toward a wider role in public and political life.",
    icon: "🏛️",
    color: "red",
  },
];

const JourneyPage = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                My Journey
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                From a Simple Boy
                <span className="block text-sky-500">to a Leader.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A journey shaped by struggle, education, entrepreneurship,
                leadership and a commitment to creating opportunities for
                others.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                  Entrepreneur
                </span>

                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 ring-1 ring-sky-100">
                  Educator
                </span>

                <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 ring-1 ring-red-100">
                  Public Leader
                </span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-sky-200 via-white to-red-100 blur-xl opacity-70" />

              <div className="relative overflow-hidden rounded-4xl border border-white bg-white p-3 shadow-2xl">
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                  <Image
                    src="/profile.jpg"
                    alt="Hem Raj Bhatta"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-sky-100 bg-white px-5 py-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Journey
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  Learn • Build • Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            The Story
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            The journey was never about having an easy beginning.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            It was about continuing when things were difficult, learning from
            failure, building opportunities from small beginnings and gradually
            taking on greater responsibilities.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute right-0 bottom-40 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm ring-1 ring-sky-100">
              A Journey Through the Years
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Every Chapter Built the Next One
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              From small beginnings and difficult lessons to education,
              entrepreneurship and public leadership.
            </p>
          </div>

          <div className="relative mt-16">
            {/* CENTER LINE */}
            <div className="absolute left-5 top-0 hidden h-full w-px bg-linear-to-b from-sky-300 via-slate-200 to-red-300 md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-16">
              {journey.map((item, index) => (
                <div
                  key={item.title}
                  className="relative grid gap-8 md:grid-cols-2 md:gap-16"
                >
                  {/* DOT */}
                  <div className="absolute left-0 top-8 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-sky-500 shadow-lg md:left-1/2 md:flex">
                    <span className="text-sm">{item.icon}</span>
                  </div>

                  {/* LEFT / RIGHT */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                              item.color === "red"
                                ? "bg-red-50 text-red-600"
                                : "bg-sky-50 text-sky-600"
                            }`}
                          >
                            {item.year}
                          </span>

                          <h3 className="mt-4 text-2xl font-bold text-slate-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm font-semibold text-slate-400">
                            {item.subtitle}
                          </p>
                        </div>

                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ${
                            item.color === "red" ? "bg-red-50" : "bg-sky-50"
                          }`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      <p className="mt-5 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS JOURNEY */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
                Entrepreneurship
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
                From a Small Beginning
                <span className="block text-red-500">
                  to Building Opportunities
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                The entrepreneurial journey began with very small steps. Working
                while studying taught him the importance of discipline,
                communication, relationships and understanding people&aops;s
                needs.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Career Station became an important part of that journey,
                eventually expanding its work in career counseling, education
                and student support. Gyan Sewa added another dimension to his
                work by connecting education with social contribution.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                His professional journey later expanded into educational
                leadership through Milton International College and consulting
                work with businesses and institutions.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <BusinessCard
                icon="🚀"
                title="Career Station"
                role="Founder & Chairman"
                text="Education, career counseling and student-focused initiatives."
              />

              <BusinessCard
                icon="🤝"
                title="Gyan Sewa"
                role="Founder"
                text="Education, career guidance and community-oriented initiatives."
              />

              <BusinessCard
                icon="🏫"
                title="Milton International College"
                role="CEO"
                text="Educational leadership, institutional development and growth."
              />

              <BusinessCard
                icon="💡"
                title="Business Consulting"
                role="Consultant"
                text="Strategic thinking, planning, communication and business development."
              />
            </div>
          </div>
        </div>
      </section>

      {/* POLITICAL JOURNEY */}
      <section className="relative overflow-hidden bg-sky-50 py-20 sm:py-24">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-red-100 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-4xl border border-sky-100 bg-white shadow-xl">
            <div className="grid lg:grid-cols-5">
              {/* LEFT */}
              <div className="relative overflow-hidden bg-sky-600 p-8 sm:p-12 lg:col-span-2">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-red-500/20" />

                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                    A New Chapter
                  </span>

                  <div className="mt-10 text-6xl">🇳🇵</div>

                  <h2 className="mt-6 text-3xl font-bold text-white">
                    From Entrepreneurship
                    <span className="block text-sky-100">
                      to Public Leadership
                    </span>
                  </h2>

                  <p className="mt-6 leading-7 text-sky-100">
                    His journey has expanded from building organizations and
                    educational opportunities to taking part in public and
                    political life.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="p-8 sm:p-12 lg:col-span-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
                    2026
                  </span>

                  <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-600">
                    Rastriya Swatantra Party
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  CCM Member
                </h3>

                <p className="mt-2 font-semibold text-slate-500">
                  Central Committee Member
                </p>

                <p className="mt-6 leading-8 text-slate-600">
                  Hem Raj Bhatta was elected through open competition as a
                  central member of the Rastriya Swatantra Party, receiving
                  <strong className="text-sky-600"> 1,137 votes</strong>.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-2xl font-bold text-sky-600">1,137</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Votes received
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-2xl font-bold text-red-500">Open</p>
                    <p className="mt-1 text-sm text-slate-500">Competition</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-2xl font-bold text-sky-600">National</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Leadership role
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border-l-4 border-sky-500 bg-sky-50 p-6">
                  <p className="leading-7 text-slate-700">
                    This chapter connects his experience in education,
                    entrepreneurship, youth engagement and organizational
                    leadership with a broader interest in public life and
                    national development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LESSONS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Lessons From The Journey
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              What the Journey Represents
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Lesson
              icon="💪"
              title="Never Give Up"
              text="Difficult beginnings do not have to define the destination."
            />

            <Lesson
              icon="📖"
              title="Keep Learning"
              text="Education and continuous learning can create new opportunities."
            />

            <Lesson
              icon="🚀"
              title="Start Small"
              text="A small idea can become a meaningful organization when combined with persistence."
            />

            <Lesson
              icon="🤝"
              title="Build With People"
              text="Relationships, teamwork and collaboration are important parts of long-term growth."
            />

            <Lesson
              icon="🇳🇵"
              title="Create Opportunities"
              text="Success can become more meaningful when it creates opportunities for others."
            />

            <Lesson
              icon="🎯"
              title="Think Beyond Yourself"
              text="Leadership can grow from personal ambition toward responsibility to society."
            />
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500 text-2xl shadow-lg shadow-sky-500/20">
            🌱
          </div>

          <h2 className="mt-7 text-3xl font-bold text-slate-900 sm:text-4xl">
            The journey continues.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From a small beginning in Attariya to education, entrepreneurship,
            institutional leadership and public life — every chapter has added a
            new responsibility.
          </p>

          <p className="mt-4 text-lg font-semibold leading-8 text-sky-600">
            The next chapter is about turning experience into meaningful
            contribution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600"
            >
              Learn More About Him
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-sky-200 hover:text-sky-600"
            >
              Connect With Him
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

/* BUSINESS CARD */

const BusinessCard = ({ icon, title, role, text }) => {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-1 text-sm font-semibold text-red-500">{role}</p>

      <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
};

/* LESSON CARD */

const Lesson = ({ icon, title, text }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
};

export default JourneyPage;
