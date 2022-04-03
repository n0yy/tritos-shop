import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/solid";

const Menus = () => {
  return (
    <div className="flex items-center space-x-5">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center focus:outline-none">
          Sort <ChevronDownIcon className="h-3 w-3 ml-1" />
        </Menu.Button>
        <Menu.Items className="absolute bg-gray-50 right-5 px-3 py-1 rounded-md shadow-md flex flex-col w-36 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-indigo-500 text-white"
                } rounded-md px-2 py-0.5`}
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
                  active && "bg-indigo-500 text-white"
                } rounded-md px-2 py-0.5`}
                href="/account-settings"
              >
                Women
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-indigo-500 text-white"
                } rounded-md px-2 py-0.5`}
                href="/account-settings"
              >
                Unisex
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <Link href="/">
        <a>
          <ShoppingBagIcon className="w-6" />
        </a>
      </Link>
    </div>
  );
};

export default Menus;
