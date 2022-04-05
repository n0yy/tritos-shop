import { useState } from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Button from "../button";

const SideBar = () => {
  const [filter, setFilter] = useState(false);

  return (
    <>
      <div className="fixed flex flex-col space-y-5 min-h-screen pl-12 bg-stone-50 top-0 w-[20%] pt-10 shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 underline decoration-indigo-500">
          All Products
        </h2>
        <h5 className="text-xl font-semibold text-gray-700">Filtering by :</h5>
        <div className="flex flex-col space-y-2">
          <button
            onClick={(e) => setFilter(!filter)}
            className={`${
              filter && "text-indigo-400"
            } relative text-left text-gray-500`}
          >
            <div
              className={`${
                filter && "absolute w-[2px] top-1 -left-1 bg-indigo-600 h-4"
              }`}
            ></div>
            <span className="ml-3 text-sm">Men</span>
          </button>
          <button
            onClick={() => setFilter(!filter)}
            className={`${
              filter && "text-indigo-400"
            } relative text-left text-gray-500`}
          >
            <div
              className={`${
                filter && "absolute w-[2px] top-1 -left-1 bg-indigo-600 h-4"
              }`}
            ></div>
            <span className="ml-3 text-sm">Women</span>
          </button>
          <button
            onClick={() => setFilter(!filter)}
            className={`${
              filter && "text-indigo-400"
            } relative text-left text-gray-500`}
          >
            <div
              className={`${
                filter && "absolute w-[2px] top-1 -left-1 bg-indigo-600 h-4"
              }`}
            ></div>
            <span className="ml-3 text-sm">Unisex</span>
          </button>
          <button
            onClick={() => setFilter(!filter)}
            className={`${
              filter && "text-indigo-400"
            } relative text-left text-gray-500`}
          >
            <div
              className={`${
                filter && "absolute w-[2px] top-1 -left-1 bg-indigo-600 h-4"
              }`}
            ></div>
            <span className="ml-3 text-sm">Upper</span>
          </button>
          <button
            onClick={() => setFilter(!filter)}
            className={`${
              filter && "text-indigo-400"
            } relative text-left text-gray-500`}
          >
            <div
              className={`${
                filter && "absolute w-[2px] top-1 -left-1 bg-indigo-600 h-4"
              }`}
            ></div>
            <span className="ml-3 text-sm">Lower</span>
          </button>
        </div>
        <div>
          <h5 className="text-xl font-semibold text-gray-700">Size</h5>
          <div className="ml-3 mt-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="s" id="s" className="rounded-full" />
              <label htmlFor="s" className="text-gray-500">
                S
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="m" id="m" className="rounded-full" />
              <label htmlFor="m" className="text-gray-500">
                M
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="l" id="l" className="rounded-full" />
              <label htmlFor="l" className="text-gray-500">
                L
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="xl"
                id="xl"
                className="rounded-full"
              />
              <label htmlFor="xl" className="text-gray-500">
                XL
              </label>
            </div>
          </div>
        </div>
        <Button to="/" sizing="w-28 h-8">
          Terapkan
        </Button>
        <Link href="/">
          <a className="absolute bottom-12">
            <ShoppingBagIcon className="w-7" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
