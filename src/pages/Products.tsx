'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; 

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log('Fetched data:', data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mx-auto text-center mt-8">Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div className="container mx-auto text-center mt-8">No products found</div>;
  }

  return (
    <div className="container">
      <h1 className="productsText">Products</h1>
      <div className="allBlocks">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
