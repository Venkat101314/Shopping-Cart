import React from 'react'
import Filters from "../Components/Filter";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Header from  "./Header"
import './styles.css';

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    
    <div>
      <Header/>
      <div className="home">
      <div className='left mt-5'><Filters/></div>
    <div className="productContainer mt-4">
      {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
    </div>
  </div>
    </div>
  )
}

export default Home