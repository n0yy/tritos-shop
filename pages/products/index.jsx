import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Menus from "../../components/products/Menus";
import SideBar from "../../components/products/SideBar";

const Products = () => {
  useEffect(() => {
    document.title = "Trotos | Products";
  }, []);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-20 my-5 ">
        <h2 className="text-3xl font-bold text-gray-800">All Products</h2>
        <Menus />
      </div>

      {/* Main */}
      <div className="flex px-20 divide-x-2 mt-5">
        {/* sidebar */}
        <div className="w-48 mt-10">
          <h5 className="text-xl font-semibold mb-3 text-gray-700">
            Filtering by :
          </h5>
          <SideBar />
        </div>
        <div className="pl-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic.
        </div>
      </div>
    </>
  );
};

export default Products;
