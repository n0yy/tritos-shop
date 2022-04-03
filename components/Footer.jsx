import Link from "next/link";
import Image from "next/image";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="mt-48 bg-slate-800 px-20 py-7">
      <div className="flex items-center justify-between mb-10">
        <div className="w-48 text-gray-200">
          <h5 className="text-2xl text-indigo-500">Alamat</h5>
          <p className="text-sm">
            Jalan Bulak Barat, No. 179 Kecamatan Cipayung Kota Depok
          </p>
        </div>
        <div className="w-48 text-gray-200">
          <h5 className="text-2xl text-indigo-500">Kontak</h5>
          <span className="flex flex-col">
            <Link href="/">
              <a className="text-sm">WhatsApp</a>
            </Link>
            <Link href="/">
              <a className="text-sm">Gmail</a>
            </Link>
          </span>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-end space-x-3">
            <Link href="/">
              <a>
                <Image src="/ig.svg" width={25} height={25} alt="instagram" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src="/twitter.svg"
                  width={25}
                  height={25}
                  alt="twitter"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src="/fb.svg" width={25} height={25} alt="facebook" />
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <a href="#" className="inline-flex">
              <ChevronDoubleUpIcon className="w-7 text-indigo-600" />
              <span className="text-indigo-300 ml-2">Back to Top</span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-xs text-gray-400 mt-5 flex items-center justify-between  ">
        <p>&copy; 2022 Tritos Shop, All right reversed</p>
        <p>Created by Emn0y</p>
      </div>
    </footer>
  );
};

export default Footer;
