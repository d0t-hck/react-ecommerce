import React from 'react';
import { client } from '../lib/client';
import { Product, Footer } from '../components';

const Home = ({ products }) => {
  return (
    <>
      <div className="products-heading">
        <h2>Best Selling</h2>
      </div>

      <div className="products-container">
        {products?.map(
          (product) => product
        )}
      </div>

      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home;
