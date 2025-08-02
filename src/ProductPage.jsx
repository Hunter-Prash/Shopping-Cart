import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const navigate = useNavigate();

  // Initialize state from sessionStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    return storedCart;
  });

  // Update sessionStorage whenever cart changes
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClick = (idx) => {
    if (products[idx].flag === 1) {
      alert('Item already added');
    } else {
      products[idx].flag = 1;
      products[idx].quantity=1
      
      const temp = { name: products[idx].name, price: products[idx].price, quantity:products[idx].quantity};
      setCartItems((prev) => [...prev, temp]);
      setTimeout(() => {
        alert('Item added');
      }, 300);
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products
      </h2>
      <div className="flex gap-6 flex-wrap justify-center mb-8">
        {products.map((item, idx) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow-md bg-white w-60 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <p className="text-green-600 font-bold text-xl">${item.price}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
              onClick={() => handleClick(idx)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300 cursor-pointer"
          onClick={goToCart}
        >
          Go to Cart
        </button>
      </div>
    </>
  );
};

export default ProductPage;
