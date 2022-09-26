import React from "react";
import { useGetProductsQuery } from "../services/productsApi";
import {Link} from 'react-router-dom'

const ProductList = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetProductsQuery();
  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products List</h1>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-center">
            {data?.products.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.avatar}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                  
                  <p className="text-sm font-medium text-gray-900">
                    Price : Rs.{product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
