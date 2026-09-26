import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/profile.jpg"
                alt="Hem"
                width={50}
                height={50}
                className="rounded-full border-2 border-sky-400 object-cover"
              />

              <div>
                <h2 className="text-xl font-bold">
                  Hem<span className="text-red-500">.</span>
                </h2>
                <p className="text-sm text-sky-400">My Journey</p>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              A personal space where I share my journey, experiences, goals,
              dreams, and the lessons I learn along the way. Every step is part
              of the journey toward a better future.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition hover:text-sky-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition hover:text-sky-400"
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  href="/journey"
                  className="text-gray-400 transition hover:text-sky-400"
                >
                  My Journey
                </Link>
              </li>

              <li>
                <Link
                  href="/plan"
                  className="text-gray-400 transition hover:text-sky-400"
                >
                  Plan & Priority
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition hover:text-sky-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Let&apos;s Connect</h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Have something to discuss? Feel free to reach out.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:bg-sky-600 hover:shadow-sky-500/30"
            >
              Get In Touch
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hem. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="font-medium text-sky-400">passion</span>
            <span>and</span>
            <span className="font-medium text-red-400">purpose</span>
            <span>❤️</span>
          </div>
        </div>
      </div>

      {/* Bottom Color Line */}
      <div className="h-1 bg-linear-to-r from-sky-400 via-white to-red-500"></div>
    </footer>
  );
};

export default Footer;
