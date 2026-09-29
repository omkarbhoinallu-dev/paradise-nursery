```jsx
import { Link, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="hero-card">
          <p className="eyebrow">WELCOME TO</p>

          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home with our collection of
            beautiful, healthy, and carefully selected houseplants.
          </p>

          <Link className="primary-button" to="/plants">
            Get Started
          </Link>

          <Link className="secondary-link" to="/about">
            Learn About Us
          </Link>
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/plants" element={<ProductList />} />

      <Route path="/cart" element={<CartItem />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
```
