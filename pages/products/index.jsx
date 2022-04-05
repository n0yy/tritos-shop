import CardProduct from "../../components/CardProduct";
import { useEffect } from "react";
import SideBar from "../../components/products/SideBar";

const Products = () => {
  useEffect(() => {
    document.title = "Trotos | Products";
  }, []);

  return (
    <>
      {/* Main */}
      <div className="flex">
        {/* sidebar */}
        <div className="w-1/5 mt-10">
          <SideBar />
        </div>

        <div className="gap-10 mt-10 pl-10 flex justify-center w-full flex-wrap">
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
          <CardProduct name="T-Shirt" category="Unisex" price="75000" />
        </div>
      </div>
    </>
  );
};

export default Products;
