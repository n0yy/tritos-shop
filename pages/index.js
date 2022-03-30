import Base from "../components/base";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import LargeButton from "../components/LargeButton";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  useEffect(() => {
    document.title = "Tritos | Beranda";
  }, []);

  return (
    <Base>
      <Navbar />
      {/* Hero Section */}
      <section className="mx-20 mt-16 text-center">
        <h1 className="text-7xl font-bold mt-48 text-gray-700">
          Selamat Datang di{" "}
          <span className="text-indigo-700 font-black">Tritos</span> Shop
        </h1>
        <p className="text-3xl text-thin mx-20 text-gray-500 mt-2 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          laoreet pellentesque consectetur cras rutrum feugiat duis tortor. Sit
          dignissim ultrices.
        </p>
        <LargeButton to="/login">Mulai Belanja</LargeButton>
      </section>

      {/* Shop by Category */}
      <section className="mt-72 mx-20">
        <h3 className="text-3xl font-semibold text-center mb-20 text-gray-700">
          <span className="text-indigo-500"># </span>Shop by Gender
        </h3>
        <div className="flex justify-center items-center m-0 space-x-5">
          <Link href="/">
            <a className="relative hover:scale-105 transition duration-200">
              <div className="absolute bg-gradient-to-b from-black/5 to-black/70 w-[200px] h-[300px] rounded-xl inset-0 z-10"></div>
              <Image
                src="/unisex.png"
                width="200px"
                height="300px"
                alt="unisex model"
              />
              <p className="absolute bottom-5 left-5 z-20 text-white text-xs">
                UNISEX
              </p>
            </a>
          </Link>
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="relative hover:scale-105 transition duration-200">
                <div className="absolute bg-gradient-to-b from-black/5 to-black/80 w-[300px] h-[150px] inset-0 z-10 rounded-xl"></div>
                <Image
                  src="/men.png"
                  width="300px"
                  height="150px"
                  alt="men products"
                />
                <p className="absolute bottom-5 left-5 z-20 text-white text-xs">
                  MEN
                </p>
              </a>
            </Link>
            <Link href="/">
              <a className="relative hover:scale-105 transition duration-200">
                <div className="absolute bg-gradient-to-b from-black/5 to-black/80 w-[300px] h-[150px] inset-0 z-10 rounded-xl"></div>
                <Image
                  src="/women.png"
                  width="300px"
                  height="150px"
                  alt="men products"
                />
                <p className="absolute bottom-5 left-5 z-20 text-white text-xs">
                  WOMEN
                </p>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Base>
  );
}
