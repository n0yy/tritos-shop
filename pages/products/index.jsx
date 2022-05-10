import CardProduct from "../../components/CardProduct";
import { useEffect, useState } from "react";
import SideBar from "../../components/products/SideBar";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import Button from "../../components/button";

const Products = () => {
  useEffect(() => {
    document.title = "Tritos | Products";
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <>
      {/* Main */}
      <div className="flex">
        {/* sidebar */}
        <div className="hidden z-50 md:block w-1/5 mt-10">
          <SideBar />
        </div>

        <button
          className="fixed top-4 right-4 z-30 w-10 h-10 flex md:hidden items-center justify-center rounded-full bg-gray-100"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="w-7 text-gray-600" />
        </button>

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 bg-white/5 backdrop-blur-sm z-50"
        >
          <Dialog.Overlay className="fixed inset-0" />
          <SideBar />
          <button onClick={() => setIsOpen(false)}>
            <XIcon className="w-7 text-gray-800 absolute top-5 right-5" />
          </button>
        </Dialog>

        <div className="gap-5 sm:gap-10 mt-10 p-0 md:pl-20 lg:pl-10 flex justify-center w-full flex-wrap">
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
        </div>
        <Link href="/">
          <a className="fixed bottom-8 sm:bottom-12 right-8 sm:right-10 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-200">
            <ShoppingBagIcon className="w-7 text-indigo-600" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Products;
