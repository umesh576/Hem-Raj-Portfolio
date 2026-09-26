"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= TOP NAVBAR ================= */}
        <div className="flex h-19 items-center justify-between">
          {/* Logo / Profile */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative shrink-0">
              <Image
                src="/profile.jpg"
                alt="Hem Raj Bhatta"
                width={52}
                height={52}
                priority
                className="h-11 w-11 rounded-full border-2 border-sky-500 object-cover transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
              />

              {/* Red status indicator */}
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-red-500" />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-wide text-gray-900 sm:text-lg">
                Hem
              </h1>

              <p className="text-[11px] font-medium text-sky-600 sm:text-xs">
                My Journey
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li>
                <Link
                  href="/"
                  className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-sky-600"
                >
                  Home
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-sky-500 transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-sky-600"
                >
                  About
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-sky-500 transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </li>

              <li>
                <Link
                  href="/journey"
                  className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-sky-600"
                >
                  Journey
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-sky-500 transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </li>

              <li>
                <Link
                  href="/plan"
                  className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-sky-600"
                >
                  Plan & Priority
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-sky-500 transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </li>

              {/* Contact */}
              <li className="ml-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600 lg:hidden"
          >
            {menuOpen ? (
              /* Close Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen ? "max-h-105 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-slate-100 pt-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-2 shadow-sm">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-sky-600 hover:shadow-sm"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-sky-600 hover:shadow-sm"
              >
                About
              </Link>

              <Link
                href="/journey"
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-sky-600 hover:shadow-sm"
              >
                Journey
              </Link>

              <Link
                href="/plan"
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-sky-600 hover:shadow-sm"
              >
                Plan & Priority
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center rounded-xl bg-sky-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:bg-sky-700"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
