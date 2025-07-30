import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || { cartItems: [] };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => alert('Remove functionality coming soon!')}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="flex justify-between items-center border-t pt-4 mb-6">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-xl font-bold text-green-600">${totalPrice}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
              onClick={() => alert('Proceed to Checkout')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
