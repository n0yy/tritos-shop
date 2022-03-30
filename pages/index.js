import Base from "../components/base";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import Button from "../components/button";

export default function Index() {
  useEffect(() => {
    document.title = "Tritos | Beranda";
  }, []);

  return (
    <Base>
      <Navbar />
      <main className="mx-20 mt-20 text-center">
        <h1 className="text-6xl font-bold mt-48 text-gray-800">
          Selamat Datang di Triros Shop
        </h1>
        <p className="px-44 text-xl font-extralight text-gray-700 my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          laoreet pellentesque consectetur cras rutrum feugiat duis tortor. Sit
          dignissim ultrices.
        </p>
        <Button to="/login">Mulai Belanja</Button>
      </main>
    </Base>
  );
}
