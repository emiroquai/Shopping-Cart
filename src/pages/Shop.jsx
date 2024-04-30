import "../styles/Shop.css";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error ferching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <div className="productsGrid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Shop;