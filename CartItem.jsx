```jsx
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const totalAmount = useSelector(selectCartTotal);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    window.alert("Checkout is Coming Soon!");
  };

  return (
    <main className="page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link className="brand" to="/">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link className="cart-link" to="/cart">
            🛒 Cart
            <span className="cart-badge">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>

      {/* Shopping Cart Page */}
      <section className="content">
        <header className="page-title">
          <h1>Shopping Cart 🛒</h1>

          <p>
            {cartCount} item
            {cartCount !== 1 ? "s" : ""} in your cart
          </p>
        </header>

        <div className="cart-card">
          {items.length === 0 ? (
            /* Empty Cart */
            <div className="empty">
              <h2>Your cart is empty</h2>

              <p>
                Add some beautiful plants to your cart.
              </p>

              <Link
                className="primary-button"
                to="/plants"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              {items.map((item) => (
                <article
                  className="cart-row"
                  key={item.id}
                >
                  {/* Product Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  {/* Product Information */}
                  <div>
                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: ₹{item.price}
                    </p>

                    <strong>
                      Total: ₹
                      {item.price * item.quantity}
                    </strong>
                  </div>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        handleDecrease(item)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <strong>
                      {item.quantity}
                    </strong>

                    <button
                      className="quantity-button"
                      onClick={() =>
                        handleIncrease(item)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    className="delete-button"
                    onClick={() =>
                      handleDelete(item.id)
                    }
                  >
                    Delete
                  </button>
                </article>
              ))}

              {/* Cart Summary */}
              <div className="cart-summary">
                <div>
                  <h2>
                    Total Amount: ₹{totalAmount}
                  </h2>

                  <p>
                    Total Items: {cartCount}
                  </p>
                </div>

                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>

              {/* Continue Shopping */}
              <Link
                className="continue-link"
                to="/plants"
              >
                ← Continue Shopping
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default CartItem;
```

### Submit this public GitHub URL

[CartItem.jsx — Paradise Nursery](https://github.com/omkarbhoinallu-dev/paradise-nursery/blob/main/src/components/CartItem.jsx?utm_source=chatgpt.com)

**File path:** `src/components/CartItem.jsx`

### This covers the grading requirements

* ✅ Shopping Cart page
* ✅ Product thumbnail
* ✅ Plant name
* ✅ Unit price
* ✅ Quantity
* ✅ Increase quantity
* ✅ Decrease quantity
* ✅ Delete item
* ✅ Total cost for each plant
* ✅ Total cart amount
* ✅ Dynamic total item count
* ✅ Checkout button with **Coming Soon** message
* ✅ Continue Shopping link
* ✅ Home / Plants / Cart navigation
