import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/logo.png";

export default function Navbar() {
  const link = [
    { id: 1, label: "Profile", path: "profile" },
    { id: 2, label: "Akademik", path: "profile" },
    { id: 3, label: "Penelitian", path: "penelitian" },
    { id: 4, label: "Pengabdian", path: "pengabdian" },
    { id: 5, label: "Lemabaga", path: "lemabaga" },
    { id: 6, label: "Pengumuman", path: "pengumuman" },
    { id: 7, label: "Pendaftaran", path: "pendaftaran" },
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
            <Link href={d.path} key={d.id}>
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
