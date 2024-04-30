import "../styles/Shop.css";
import { useState, useEffect } from "react";

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
          <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} />
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  )
}

export default Shop;