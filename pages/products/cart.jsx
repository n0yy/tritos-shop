import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingCart() {
  useEffect(() => {
    document.title = "Tritos | Keranjang";
  }, []);

  return (
    <>
      <main className="px-20 pt-10">
        {/* title */}
        <h3 className="text-3xl font-bold text-gray-800 border-b-2 pb-3 mb-5">
          Keranjang Belanja
        </h3>
        <div className="flex">
          {/* product */}
          <div className="w-[70%] h-full space-y-7">
            <div className="flex space-x-5">
              <Image
                src="/sweater.png"
                width="150px"
                height="150px"
                alt="sweater"
              />
              {/* detail */}
              <div className="-space-y-1 relative">
                <h5 className="text-lg text-gray-700">Sweater Hoddie</h5>
                <p className="text-sm text-gray-500">Hitam | L</p>
                <p className="text-md text-gray-600 absolute bottom-16">
                  Rp 50.000
                </p>
                <button className="px-3 text-xs py-1 bg-red-100 text-red-500 rounded-md absolute bottom-0">
                  Hapus
                </button>
              </div>
            </div>
            <div className="flex space-x-5">
              <Image
                src="/sweater.png"
                width="150px"
                height="150px"
                alt="sweater"
              />
              {/* detail */}
              <div className="-space-y-1 relative">
                <h5 className="text-lg text-gray-700">Sweater Hoddie</h5>
                <p className="text-sm text-gray-500">Hitam | L</p>
                <p className="text-md text-gray-600 absolute bottom-16">
                  Rp 50.000
                </p>
                <button className="px-3 text-xs py-1 bg-red-100 text-red-500 rounded-md absolute bottom-0">
                  Hapus
                </button>
              </div>
            </div>
          </div>
          {/* summary */}
          <div className="w-[30%] bg-indigo-50 rounded-md shadow-lg px-7 py-3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
              Ringkasan Pesanan
            </h3>
            {/* total */}
            <div className="flex items-center justify-between text-gray-500">
              <p className="text-lg">Total</p>
              <p>Rp 50.000</p>
            </div>
            {/* diskon */}
            <div className="flex items-center justify-between text-gray-500 mb-5">
              <p className="text-lg">Diskon</p>
              <p>Rp 5.000</p>
            </div>
            {/* ongkir */}
            <div className="flex items-center justify-between text-gray-500 mb-10">
              <p className="text-lg">Ongkir</p>
              <p>???</p>
            </div>

            {/* jumlah total */}
            <div className="flex items-center justify-between text-gray-700 border-t border-indigo-500 pt-3 mb-5">
              <p className="text-xl">Jumlah Total</p>
              <p>Rp 45.000</p>
            </div>
            {/* button */}
            <div className="space-y-2">
              <button className="text-xs uppercase text-gray-700 rounded-md hover:rounded-full border py-2 border-indigo-600 w-full">
                Cek Ongkir
              </button>
              <button className="text-xs uppercase text-white rounded-md hover:rounded-full w-full py-2 bg-indigo-500">
                Checkout
              </button>
              <Link href="/products">
                <a className="text-sm text-gray-500 block text-center">
                  atau kembali belanja
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
