import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    rating: number;
    stock: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="block">
      <Link href={`/products/${product.id}`}>
        <div>
          <img src={product.thumbnail} alt={product.title} className="prImg" />
          <div className="prInfo">
            <h2 className="prTitle">{product.title}</h2>
            <p className="prPrice">${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
