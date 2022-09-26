import React, { useState } from "react";
import { useCreateProductsMutation, useGetCategoryQuery } from "../services/productsApi";



const AddProduct = () => {

    const {data}= useGetCategoryQuery();
    const [createProduct] = useCreateProductsMutation();

    const [newProduct, setNewProduct] = useState({
        name:"",
        price:"",
        category:"",
        description:"",
        avatar:"",
        developerEmail:"",
    })
    const {name,price,category,description,avatar,developerEmail}= newProduct;

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name,value}= e.target
        setNewProduct({...newProduct,[name]:value})
    }

    const handleSubmit = async () => {
        const payload = { ...newProduct, price: Number(price) };
        try {
          await createProduct(payload);
          console.log("added successfully!");
          setNewProduct({
            name:"",
            price:"",
            category:"",
            description:"",
            avatar:"",
            developerEmail:"",
        })
        } catch (error) {
          console.log("error: ", error);
        }
      };
  return (
    <div className="flex-col flex justify-center items-center ">
      <div className="w-1/2 border-2 ">
        <label
          htmlFor="price"
          className="block text-sm font-bold text-gray-700"
        >
          Name
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="name"
               value={name}
            id="name"
               onChange={handleChange}
            className="block border w-full rounded-md border-gray-300 px-3 py-2  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Name..."
          />
        </div>
      </div>

      <div className="w-1/2 border-2 ">
        <label
          htmlFor="price"
          className="block text-sm font-bold text-gray-700"
        >
          Price
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="price"
               value={price}
            id="name"
              onChange={handleChange}
            className="block border w-full rounded-md border-gray-300 px-3 py-2  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Name..."
          />
        </div>
      </div>

      <div className="w-1/2 border-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-bold text-gray-700 pl-1"
                  >
                    Category
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <select
                      id="categories"
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="category"
                      onChange={handleChange}
                    >
                      <option>Choose a Category</option>
                      {data?.categories.map((cate) => (
                        <option key={cate._id} value={cate.name}>
                          {cate.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

      <div className="w-1/2 border-2 ">
        <label
          htmlFor="price"
          className="block text-sm font-bold text-gray-700"
        >
          Description
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="description"
               value={description}
            id="name"
               onChange={handleChange}
            className="block border w-full rounded-md border-gray-300 px-3 py-2  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Name..."
          />
        </div>
      </div>

      <div className="w-1/2 border-2 ">
        <label
          htmlFor="price"
          className="block text-sm font-bold text-gray-700"
        >
          Avatar
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="avatar"
               value={avatar}
            id="name"
               onChange={handleChange}
            className="block border w-full rounded-md border-gray-300 px-3 py-2  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Name..."
          />
        </div>
      </div>

      <div className="w-1/2 border-2 ">
        <label
          htmlFor="price"
          className="block text-sm font-bold text-gray-700"
        >
          Developer Email 
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="developerEmail"
               value={developerEmail}
            id="name"
               onChange={handleChange}
            className="block border w-full rounded-md border-gray-300 px-3 py-2  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Name..."
          />
        </div>
      </div>
      <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-6"
                type="button"
                onClick={handleSubmit}
              >
                Add Product
              </button>
    </div>
  );
};

export default AddProduct;
