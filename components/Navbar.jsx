import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/logo.png";

export default function Navbar() {
  const link = [
    { label: "Profile", path: "profile" },
    { label: "Akademik", path: "profile" },
    { label: "Penelitian", path: "penelitian" },
    { label: "Pengabdian", path: "pengabdian" },
    { label: "Lemabaga", path: "lemabaga" },
    { label: "Pengumuman", path: "pengumuman" },
    { label: "Pendaftaran", path: "pendaftaran" },
  ];

  return (
    <nav className="fixed w-full z-20 bg-main-200">
      <div className="container flex justify-between items-center py-6">
        <div className="flex space-x-3 items-center">
          <img src="./logo.png" className="h-10" />
          <div className="items-center">
            <h1 className="font-bold">STIEB</h1>
            <h3 className="text-xs font-semibold uppercase">
              insan Madani mandar
            </h3>
          </div>
        </div>
        <ul className="flex justify-between space-x-7">
          {link.map((d) => (
            <Link href={d.path}>
              <li className="font-semibold hover:cursor-pointer hover:text-main-500">
                <a>{d.label}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
