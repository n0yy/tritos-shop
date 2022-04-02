import Image from "next/image";
import Button from "./button";

export default function CardProduct({ category, name, price }) {
  return (
    <div className="h-[275px] rounded-lg w-48 shadow hover:scale-105 hover:shadow-lg cursor-pointer transition duration-200">
      <Image
        src="/sweater.png"
        width="200px"
        height="200px"
        alt="Sweater Hoddie"
      />
      {/* body */}
      <div className="px-2 space-y-2">
        {/* title */}
        <div className="-space-y-1">
          <p className="text-xs font-light text-gray-500">{category}</p>
          <p className="text-md text-gray-800">{name}</p>
        </div>

        <h5 className="text-gray-600">Rp {price}</h5>
      </div>
    </div>
  );
}
