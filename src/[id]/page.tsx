import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
}

function Product({ params: { id } }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id: routerId } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${routerId}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [routerId]);

  if (loading) {
    return <div className="container mx-auto text-center mt-8">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="container mx-auto text-center mt-8">
        Product not found
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default Product;
