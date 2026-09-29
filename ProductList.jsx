```jsx
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectCartItems,
  selectCartCount,
} from "../redux/CartSlice";
import { plants } from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  const categories = [
    ...new Set(plants.map((plant) => plant.category)),
  ];

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
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

      {/* Product Listing */}
      <section className="content">
        <header className="page-title">
          <h1>Paradise Nursery Plants 🌿</h1>

          <p>
            Explore our collection of beautiful and healthy
            houseplants.
          </p>
        </header>

        {/* Plant Categories */}
        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="category-section"
              key={category}
            >
              <h2>{category}</h2>

              <div className="product-grid">
                {categoryPlants.map((plant) => (
                  <article
                    className="product-card"
                    key={plant.id}
                  >
                    {/* Plant Image */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <div className="product-info">
                      {/* Plant Name */}
                      <h3>{plant.name}</h3>

                      {/* Plant Price */}
                      <p className="price">
                        ₹{plant.price}
                      </p>

                      {/* Add to Cart */}
                      <button
                        className="add-button"
                        onClick={() =>
                          handleAddToCart(plant)
                        }
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default ProductList;
```
