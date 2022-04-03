import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const SideBar = () => {
  const [filter, setFilter] = useState(false);
  const [plan, setPlan] = useState("startup");

  return (
    <>
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
        <div>
          <h5 className="text-xl font-semibold text-gray-700">Size</h5>
          <div className="ml-3 mt-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="s" id="s" className="rounded-full" />
              <label htmlFor="s">S</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="s" id="s" className="rounded-full" />
              <label htmlFor="s">M</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="s" id="s" className="rounded-full" />
              <label htmlFor="s">L</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="s" id="s" className="rounded-full" />
              <label htmlFor="s">XL</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
