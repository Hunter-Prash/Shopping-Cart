import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [chkoutProducts, setChkoutProducts] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setChkoutProducts(storedCart);
  }, []);

  const handleRemove = (idx) => {
    const updatedCart = chkoutProducts.filter((_, i) => i !== idx);
    setChkoutProducts(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Your Cart</h2>
      {chkoutProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          {chkoutProducts.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center border border-gray-200 bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
                <p className="text-green-600 font-bold text-lg">${item.price * item.quantity}</p>
              </div>

              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition font-bold text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <h4 className="mx-2 text-lg font-medium text-gray-700">{item.quantity}</h4>
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition font-bold text-lg"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
              </div>

              <button
                className="bg-red-500 text-white px-5 py-2 m-2 rounded-lg hover:bg-red-600 transition font-medium shadow mt-4 md:mt-0"
                onClick={() => handleRemove(idx)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
            >
              Go Back to Home
            </button>

            <button
              onClick={() => {
                sessionStorage.removeItem('cart');
                setChkoutProducts([]); // Clear React state too
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold shadow"
            >
              Clear Cart
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;
