"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  return (
    <>
      <div>
        {/* Navbar Section  */}

        <ul className="flex gap-40 bg-purple-400 justify-end pr-20 p-4 font-bold ">
          <li className="hover:text-white transition duration-300">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            {" "}
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            {" "}
            <Link href="/footer">Footer</Link>
          </li>
        </ul>
        <h1 className="p-5 text-purple-700 text-center text-4xl">
          This is my Next-JS Web Page
        </h1>
        <h4 className="p-5 text-black text-center text-2xl">
          Built With <span className="color-red">❤</span> By AFAQ UL ISLAM
        </h4>
      </div>
    </>
  );
}
