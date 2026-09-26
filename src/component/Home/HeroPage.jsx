import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
          {/* LEFT SIDE - INTRODUCTION */}
          <div className="order-2 lg:order-1">
            {/* Small badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-sm font-medium text-sky-700">
                Welcome to my journey
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hello, I&apos;m <span className="text-sky-500">Hem</span>
              <span className="text-red-500">.</span>
            </h1>

            {/* Introduction */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Welcome to my personal space where I share my journey,
              experiences, goals, plans, and the lessons I have learned along
              the way.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
              I believe every journey starts with a small step. This website is
              a reflection of where I am today, where I want to go, and
              everything I am working toward to make that vision a reality.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/journey"
                className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
              >
                Explore My Journey
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-600"
              >
                About Me
              </Link>
            </div>

            {/* Small stats */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-100 pt-6">
              <div>
                <h3 className="text-2xl font-bold text-sky-500">01</h3>
                <p className="text-sm text-gray-500">My Journey</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sky-500">∞</h3>
                <p className="text-sm text-gray-500">Dreams</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-500">100%</h3>
                <p className="text-sm text-gray-500">Commitment</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PHOTO */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -inset-5 rounded-full border border-sky-200"></div>

              {/* Red decorative dot */}
              <div className="absolute -right-3 top-10 h-6 w-6 rounded-full bg-red-500 shadow-lg shadow-red-500/30"></div>

              {/* Sky blue decorative dot */}
              <div className="absolute -bottom-2 -left-3 h-10 w-10 rounded-full bg-sky-400"></div>

              {/* Photo container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-sky-100 shadow-2xl shadow-sky-200/60 sm:h-80 sm:w-80 lg:h-105 lg:w-105">
                <Image
                  src="/profile.jpg"
                  alt="Hem"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 right-5 rounded-xl border border-sky-100 bg-white px-5 py-3 shadow-xl">
                <p className="text-xs text-gray-400">Currently</p>
                <p className="font-semibold text-sky-600">Building My Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
