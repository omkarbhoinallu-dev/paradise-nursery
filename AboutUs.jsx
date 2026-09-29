```jsx
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="page">
      <nav className="navbar">
        <Link className="brand" to="/">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <main className="content">
        <section className="about-card">
          <p className="eyebrow">ABOUT US</p>

          <h1>About Paradise Nursery 🌿</h1>

          <p>
            Paradise Nursery is an online plant store dedicated to helping
            people bring the beauty of nature into their homes, offices, and
            everyday spaces.
          </p>

          <p>
            We offer a variety of carefully selected houseplants, including
            air-purifying, aromatic, and medicinal plants. Our goal is to make
            choosing and purchasing plants simple, convenient, and enjoyable.
          </p>

          <h2>What We Offer</h2>

          <ul>
            <li>🌱 Air-purifying plants for indoor spaces</li>
            <li>🌸 Aromatic plants with natural fragrances</li>
            <li>🌿 Medicinal plants for home gardens</li>
            <li>🛒 Simple and convenient online shopping</li>
            <li>📦 Easy cart and quantity management</li>
          </ul>

          <h2>Our Mission</h2>

          <p>
            Our mission is to encourage people to connect with nature by
            making beautiful and useful plants accessible through a simple
            online shopping experience.
          </p>

          <h2>Why Choose Paradise Nursery?</h2>

          <p>
            We focus on providing a simple browsing experience, clear plant
            information, affordable options, and an easy-to-use shopping cart
            so customers can find plants that suit their spaces and needs.
          </p>

          <Link className="primary-button" to="/plants">
            Explore Our Plants
          </Link>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
```
