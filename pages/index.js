import Navbar from "../components/navbar";
import { useEffect } from "react";
import LargeButton from "../components/LargeButton";
import CardProduct from "../components/CardProduct";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Index() {
  const dataProducts = [
    {
      id: 1,
      name: "Sweater Hoddie",
      category: "Men",
      price: 70000,
    },
    {
      id: 2,
      name: "T-Shirt",
      category: "Women",
      price: 30000,
    },
    {
      id: 3,
      name: "Crewneck",
      category: "Unisex",
      price: 50000,
    },
    {
      id: 4,
      name: "Jacket",
      category: "Men",
      price: 100000,
    },
  ];

  useEffect(() => {
    document.title = "Tritos | Beranda";
  }, []);

  return (
    <>
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

      {/* Hot Product */}
      <section className="mt-48 mx-20">
        <h3 className="text-3xl font-semibold text-center text-gray-700">
          <span className="text-indigo-500">#</span> Hot Product
        </h3>
        <div className="mt-20 flex items-center justify-center space-x-7">
          {dataProducts.map((product) => {
            return (
              <div key={product.id}>
                <CardProduct
                  category={product.category}
                  name={product.name}
                  price={product.price}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
}
