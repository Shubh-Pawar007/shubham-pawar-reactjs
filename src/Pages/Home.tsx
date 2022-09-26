import React from 'react'
import Spinner from '../Components/Spinner';
import { useGetProductsQuery } from '../services/productsApi';
import ProductList from './../Components/ProductList';

const Home = () => {const { data, isError, isLoading, isFetching, isSuccess } =
useGetProductsQuery();

console.log(data);

return (
<div className="App">
  {isLoading ? (
    <Spinner/>
  ) : isFetching ? (
    <Spinner/>
  ) : isSuccess ? (
    <ProductList/>
  ) : isError ? (
    <div>Something is wrong.</div>
  ) : (
    ""
  )}
</div>
);
}

export default Home