import { Modal, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Button from "../components/button";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 w-full bg-transfarent backdrop-blur-md shadow-md z-50 px-20 py-3 flex items-center justify-between">
        {/* logo */}
        <h3 className="text-2xl font-bold flex items-center space-x-[0.10rem]">
          <Image src="/logo.svg" width="25" height="25" alt="Logo" />
          <span>Tritos</span>
        </h3>
        <div className="flex items-center space-x-3 text-sm font-extralight text-gray-500">
          <Link href="/">
            <a className="hover:text-gray-700">Home</a>
          </Link>
          <Link href="/products">
            <a className="hover:text-gray-700">Products</a>
          </Link>
          {/* dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="focus:outline-none flex items-center">
              <div>Category</div>
              <ChevronDownIcon className="h-3 w-3 mt-[2px] ml-[2px] inline-block" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-7 bg-indigo-50 p-3 shadow-md flex flex-col focus:outline-none rounded-md w-44 space-y-3">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active &&
                        "bg-blue-500 p-2 transition duration-200 rounded-md text-indigo-50"
                      }`}
                      href="/account-settings"
                    >
                      Men
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active &&
                        "bg-blue-500 rounded-md text-indigo-50 p-2 transition duration-200 "
                      }`}
                      href="/account-settings"
                    >
                      Women
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex items-center space-x-5">
          <Button to="/" sizing="px-6 py-2">
            Login
          </Button>
        </div>
      </nav>
    </>
  );
}
