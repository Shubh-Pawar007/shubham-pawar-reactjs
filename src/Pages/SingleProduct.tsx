import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../services/productsApi";


const SingleProduct = () => {
  const { id } = useParams<string>();

  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetProductsByIdQuery(id);

    console.log(data);
    const response= data?.product
    
    
  return (
    <>
      {isLoading ? (
        <div>...loading</div>
      ) : isFetching ? (
        <div>...fetching</div>
      ) : isSuccess ? (
        <div className="w-1/2 mx-60 my-20">
         <div className="bg-indigo-300 ... ">
                  <img
                    src={response.avatar}
                    alt={response.name}
                    className="object-scale-down h-48 w-96 ..."
                  />
                </div>
                <div className="mt-4 ">
                    <div>
                    <h3 className="text-lg text-gray-700">Product Name    : {response.name}</h3>
                    <p className="text-lg text-gray-700"> Category :{response.category}</p>
                    </div>
                  
                  <p className="text-lg text-gray-900">
                    Price : Rs.{response.price}
                  </p>
                </div>
        </div>
      ) : isError ? (
        <div>Something is wrong.</div>
      ) : (
        ""
      )}
    </>
  );
      }

      export default SingleProduct;