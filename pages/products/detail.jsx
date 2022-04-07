import { useState, useEffect } from "react";
import Image from "next/image";

export default function Detail() {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.title = "Detail | Sweater Hoddie";
  }, []);

  return (
    <div className="flex space-x-10 px-20 pt-10 space-y-2 h-[2000px]">
      {/* image */}
      <div className="w-1/2">
        <Image
          src="/sweater.png"
          width="400px"
          height="400px"
          alt="Sweater Hodde"
        />
        <div className="flex items-center justify-between mt-3">
          <Image
            src="/sweater.png"
            width="70px"
            height="70px"
            alt="Sweater Hodde"
          />
          <Image
            src="/sweater.png"
            width="70px"
            height="70px"
            alt="Sweater Hodde"
          />
          <Image
            src="/sweater.png"
            width="70px"
            height="70px"
            alt="Sweater Hodde"
          />
          <Image
            src="/sweater.png"
            width="70px"
            height="70px"
            alt="Sweater Hodde"
          />
        </div>

        {/* reviews */}
        <div className="mt-10">
          <h3 className="text-2xl text-gray-600 mb-2">Reviews</h3>
          <div className="w-full min-h-min px-5 py-2 border border-gray-300 rounded-md space-y-2">
            <div>
              <h6 className="text-md text-gray-600">xeraphit</h6>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat,
              </p>
            </div>
            <div>
              <h6 className="text-md text-gray-600">emnoy</h6>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, ut!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* detail product */}
      <div className="w-full">
        {/* name and price */}
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-gray-700">
            Sweater Hoddie
          </h3>
          <h6 className="text-2xl font-light text-gray-500">Rp. 50000</h6>
        </div>

        {/* reviews */}
        <div className="mt-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <a href="#" className="text-sm text-blue-500 ml-1.5">
            Lihat semua reviews..
          </a>
        </div>

        {/* colors */}
        <div className="mt-5 ml-1.5">
          <h5 className="text-2xl text-gray-700 mb-2">Warna</h5>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* sizes */}
        <div className="mt-5 ml-1.5">
          <h3 className="text-2xl text-gray-700 mb-2">Ukuran</h3>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 border rounded-md flex text-sm items-center justify-center border-gray-300 text-gray-600 hover:scale-105">
              S
            </button>
            <button className="w-8 h-8 border rounded-md flex text-sm items-center justify-center border-gray-300 text-gray-600 hover:scale-105">
              L
            </button>
            <button className="w-8 h-8 border rounded-md flex text-sm items-center justify-center border-gray-300 text-gray-600 hover:scale-105">
              XL
            </button>
          </div>
        </div>

        {/* quantity */}
        <div className="mt-3 ml-1.5">
          <h5 className="text-2xl text-gray-700 mb-2">Kuantitas</h5>
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="w-7 h-7 border rounded-md"
          >
            -
          </button>
          <span className="mx-3">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-7 h-7 border rounded-md"
          >
            +
          </button>
        </div>

        {/* button */}
        <div className="mt-7 ml-1.5 space-y-2">
          <button className="w-full rounded-full uppercase text-sm text-gray-600 border border-indigo-300 text-center py-2">
            Tambah ke Keranjang
          </button>
          <button className="w-full rounded-full uppercase text-sm text-indigo-600 border bg-indigo-300 text-center py-2">
            Checkout
          </button>
        </div>

        {/* description */}
        <div className="mt-5 ml-1.5 space-y-2">
          <h3 className="text-2xl text-gray-700 font-semibold">Deskripsi</h3>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel
            dolores quas eligendi voluptas necessitatibus voluptate accusantium
            iusto illo doloremque doloribus magni, cum odit ullam totam
            quisquam, temporibus blanditiis ipsa.
          </p>
        </div>
      </div>
    </div>
  );
}
