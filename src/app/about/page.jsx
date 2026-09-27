import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* =========================================================
          HERO / PROFILE
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              About Hem Raj Bhatta
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Education. <span className="text-sky-600">Leadership.</span>{" "}
              <span className="text-red-500">Public Service.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              An educator, entrepreneur, business consultant and public
              representative working across education, youth development,
              entrepreneurship and national development.
            </p>
          </div>

          {/* Profile Card */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-5">
              {/* Profile Image */}
              <div className="relative overflow-hidden bg-sky-600 p-8 sm:p-10 lg:col-span-2">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-red-500/10" />

                <div className="relative">
                  <div className="overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Hem Raj Bhatta"
                      width={700}
                      height={700}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                      Hem Raj Bhatta
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-sky-100">
                      Entrepreneur • Educator • Business Consultant • Public
                      Representative
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="p-8 sm:p-10 lg:col-span-3 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    ✦
                  </span>

                  <h2 className="text-2xl font-bold text-slate-900">Profile</h2>
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  Hem Raj Bhatta is an entrepreneur, educator, business
                  consultant and career counselor with experience in educational
                  leadership, strategic planning, institutional development and
                  youth engagement.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Through his professional work, he has been involved in
                  education, career counseling, entrepreneurship, institutional
                  development and initiatives aimed at creating opportunities
                  for students and young people.
                </p>

                {/* Current Public Role */}
                <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                      🇳🇵
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                        Current Public Role
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        CCM Member
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-red-500">
                        Rastriya Swatantra Party
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Working toward national development with a strong focus
                        on education, youth opportunities, innovation,
                        entrepreneurship and community development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PUBLIC SERVICE / EDUCATION FOCUS
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-500 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Public Service & Vision
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Education at the{" "}
              <span className="text-sky-600">Heart of Development</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              With his background in education and his current public role, Hem
              Raj Bhatta places education, skills, youth opportunity and
              innovation among the areas he wants to contribute to in
              Nepal&apos;s development.
            </p>
          </div>

          {/* Main Vision Card */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-5">
              {/* Vision */}
              <div className="relative overflow-hidden bg-sky-600 p-8 sm:p-10 lg:col-span-2">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-500/10" />

                <div className="relative">
                  <span className="text-5xl">🎓</span>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    Education First
                  </h3>

                  <p className="mt-5 leading-8 text-sky-50">
                    A stronger education system can help create skilled
                    citizens, innovative thinkers, entrepreneurs and
                    opportunities for the next generation.
                  </p>

                  <div className="mt-8 h-px w-16 bg-white/40" />

                  <p className="mt-5 text-sm font-medium leading-6 text-sky-100">
                    Education should connect knowledge with skills, innovation,
                    employment and national development.
                  </p>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="p-8 sm:p-10 lg:col-span-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Areas of Focus
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  His education-focused public vision can be presented through
                  the following areas:
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <FocusCard
                    icon="📚"
                    title="Quality Education"
                    text="Promoting education that develops knowledge, skills, values and practical capabilities."
                  />

                  <FocusCard
                    icon="💻"
                    title="Technology & Innovation"
                    text="Encouraging technology, creativity, research and innovation within education."
                  />

                  <FocusCard
                    icon="🧑‍🎓"
                    title="Youth Development"
                    text="Creating stronger pathways for young people to learn, participate and contribute."
                  />

                  <FocusCard
                    icon="🛠️"
                    title="Skills & Employment"
                    text="Connecting education with practical skills, careers, entrepreneurship and employment."
                  />

                  <FocusCard
                    icon="👨‍🏫"
                    title="Teacher Development"
                    text="Supporting professional development and stronger teaching practices."
                  />

                  <FocusCard
                    icon="🌍"
                    title="Global Opportunities"
                    text="Building stronger connections between Nepali education and international opportunities."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION & NATIONAL DEVELOPMENT
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                Education & National Development
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Building a stronger future through{" "}
                <span className="text-sky-600">education</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Education is closely connected to economic opportunity, social
                development, innovation and the ability of young people to
                participate meaningfully in society.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                His professional experience in education and career counseling
                informs his interest in creating stronger connections between
                what students learn and the skills, opportunities and challenges
                they encounter beyond the classroom.
              </p>

              <div className="mt-8">
                <Link
                  href="/plan"
                  className="inline-flex items-center rounded-xl bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-700"
                >
                  Explore Plan & Priority
                  <span className="ml-2 text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Right Stats / Themes */}
            <div className="grid gap-4 sm:grid-cols-2">
              <VisionStat
                number="01"
                title="Education"
                text="Quality, access and practical learning."
              />

              <VisionStat
                number="02"
                title="Innovation"
                text="Ideas, technology and research."
              />

              <VisionStat
                number="03"
                title="Youth"
                text="Skills, participation and opportunity."
              />

              <VisionStat
                number="04"
                title="Development"
                text="Education connected with national progress."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY SKILLS + EDUCATION
      ========================================================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Skills */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-xl">
                  💼
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Key Skills
                </h2>
              </div>

              <div className="mt-7 grid gap-3">
                {[
                  "Business Consulting & Strategic Planning",
                  "Educational Leadership & Curriculum Development",
                  "Public Relations & Effective Communication",
                  "Career Counseling & Mentorship",
                  "Business Forecasting & Market Analysis",
                  "Proficiency in Computer Applications",
                  "Team Building & Leadership",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="mt-0.5 text-sky-600">◆</span>

                    <p className="text-sm font-medium text-slate-700">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Certifications & Training
                </h3>

                <div className="mt-5 space-y-3">
                  <div className="flex gap-3 text-sm text-slate-600">
                    <span className="text-sky-600">✓</span>
                    Diploma in Computer Course
                  </div>

                  <div className="flex gap-3 text-sm text-slate-600">
                    <span className="text-sky-600">✓</span>
                    Internship at Nepal Rashtra Bank
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-900">Awards</h3>

                <div className="mt-5 flex gap-4 rounded-2xl bg-red-50 p-5">
                  <div className="text-2xl">🏆</div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Youngest & Dynamic CEO
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Recognized for exceptional leadership and innovative
                      contributions to the educational and business sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-xl">
                  🎓
                </div>

                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
              </div>

              <div className="relative mt-8">
                <div className="absolute left-1.75 top-3 h-[calc(100%-25px)] w-px bg-sky-200" />

                <div className="space-y-10">
                  <EducationItem
                    title="MBA"
                    subtitle="Master of Business Administration"
                    institution="Champion College, Tribhuvan University"
                    year="2021"
                  />

                  <EducationItem
                    title="Bachelor in Business Administration"
                    subtitle="BBA"
                    institution="Champion College, Tribhuvan University"
                    year="2018"
                  />

                  <EducationItem
                    title="Intermediate in Commerce"
                    subtitle=""
                    institution="Shree Aishwarya Vidya Niketan, Higher Secondary"
                    year="2018"
                  />

                  <EducationItem
                    title="School Leaving Certificate"
                    subtitle=""
                    institution="Shree Emmanuel Secondary School, Government of Nepal"
                    year="2012"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP & BUSINESS
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Professional Journey
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Leadership & Business Roles
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <RoleCard
              label="Founder & Chairman"
              title="Career Station"
              icon="🎯"
              accent="sky"
              items={[
                "Developed and implemented comprehensive career counseling programs impacting over 400,000 students.",
                "Established consultation partnerships with more than 200 schools and 100 colleges across Nepal.",
                "Forged international collaborations with institutions in Australia, Canada, USA, UK, Dubai and Germany.",
              ]}
            />

            <RoleCard
              label="CEO"
              title="Milton International College"
              icon="🏫"
              accent="sky"
              items={[
                "Sets the vision, mission and long-term goals of the college.",
                "Supervises campus infrastructure, IT and facility management.",
                "Strengthens alumni engagement and networking.",
                "Ensures financial sustainability and resource allocation.",
                "Engages with parents, students, industry leaders and other stakeholders.",
              ]}
            />

            <RoleCard
              label="Founder"
              title="Gyan Sewa (G Sewa) & Estlight Education Consultancy"
              icon="📚"
              accent="red"
              items={[
                "Initiated projects to provide accessible education and career guidance to diverse student communities.",
                "Organized youth empowerment seminars and training programs in collaboration with various organizations.",
              ]}
            />

            <RoleCard
              label="Additional Roles"
              title="Education & Professional Engagement"
              icon="🌱"
              accent="red"
              items={[
                "Delivered higher secondary education lectures.",
                "Conducted training sessions for aspiring career counselors.",
                "Served as a Public Relations Officer at Kantipur International College.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
              Impact & Engagement
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Achievements & Campaigns
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <AchievementCard
              icon="🎯"
              title="Career Counseling"
              description="Delivered sessions on “What After +2?” to over 85 colleges in Nepal."
            />

            <AchievementCard
              icon="🎓"
              title="Student Outreach"
              description="Counseled more than 400,000 students through various programs."
            />

            <AchievementCard
              icon="🎤"
              title="Motivational Speaking"
              description="Acted as a motivational speaker in over 50 seminars."
            />

            <AchievementCard
              icon="🚀"
              title="Youth Empowerment"
              description="Organized multiple training sessions and seminars in collaboration with national organizations."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="text-4xl">🇳🇵</span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Education, Opportunity and Development
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            From education and career development to entrepreneurship,
            innovation and public service, the focus is on creating
            opportunities and contributing to Nepal&apos;s development.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-sky-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-700"
          >
            Get in Touch
            <span className="ml-2 text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

/* =========================================================
    COMPONENTS
========================================================= */

const FocusCard = ({ icon, title, text }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-md">
      <div className="text-2xl">{icon}</div>

      <h4 className="mt-4 font-bold text-slate-900">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
};

const VisionStat = ({ number, title, text }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:border-sky-200 hover:bg-white hover:shadow-lg">
      <span className="text-sm font-bold text-sky-500">{number}</span>

      <h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
};

const EducationItem = ({ title, subtitle, institution, year }) => {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-sky-500 bg-white" />

      <h3 className="font-bold text-slate-900">{title}</h3>

      {subtitle && (
        <p className="mt-1 text-sm font-medium text-sky-600">{subtitle}</p>
      )}

      <p className="mt-2 text-sm text-slate-600">Institution: {institution}</p>

      <p className="mt-1 text-xs font-medium text-slate-400">
        Year of Passing: {year}
      </p>
    </div>
  );
};

const RoleCard = ({ label, title, icon, items, accent }) => {
  const isRed = accent === "red";

  return (
    <div
      className={`group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${
        isRed
          ? "hover:border-red-200 hover:shadow-red-100/40"
          : "hover:border-sky-200 hover:shadow-sky-100/50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`text-sm font-semibold ${
              isRed ? "text-red-500" : "text-sky-600"
            }`}
          >
            {label}
          </span>

          <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
        </div>

        <span
          className={`rounded-xl px-3 py-2 text-xl ${
            isRed ? "bg-red-50" : "bg-sky-100"
          }`}
        >
          {icon}
        </span>
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={isRed ? "text-red-500" : "text-sky-600"}>✓</span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AchievementCard = ({ icon, title, description }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:scale-110">
          {icon}
        </div>

        <div>
          <h3 className="font-bold text-slate-900">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
