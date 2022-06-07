import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../redux/actions/productsAction";

const FetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const { isLoading, products, error } = useSelector(
    (state) => state.productReducer
  );

  return (
    <div className="">
      {error && <p className="text-red-500 text-center text-3xl font-bold">{error}</p>}
      {isLoading && (
        <div class="flex items-center justify-center h-screen">
          <div class="w-40 h-40 border-t-4 border-b-4 border-purple-900 rounded-full animate-spin"></div>
        </div>
      )}
      <div class="grid grid-cols-3 gap-4">
        {products &&
          products.map((product) => {
            return (
              <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                <div class="px-4 py-2">
                  <h1 class="text-sm font-bold text-gray-800 uppercase">
                    {product.title}
                  </h1>
                  <p class="mt-1 text-sm text-gray-600">{product.category}</p>
                </div>

                <img
                  class="object-cover w-full h-48 mt-2"
                  src={product.image}
                  alt="NIKE AIR"
                />

                <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                  <h1 class="text-lg font-bold text-white">${product.price}</h1>
                  <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchData;
