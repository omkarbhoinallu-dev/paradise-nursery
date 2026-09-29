# 🌿 Paradise Nursery

Paradise Nursery is a responsive **online houseplant shopping application** built using React and Redux Toolkit. Users can browse plants by category, add plants to a shopping cart, manage quantities, and view the total cart amount.

## 🌱 Project Overview

The application provides a simple and user-friendly shopping experience for houseplant lovers.

Users can:

* Explore different types of houseplants
* Browse plants by category
* View plant names, images, and prices
* Add plants to the shopping cart
* Increase or decrease plant quantities
* Remove plants from the cart
* View the total number of items in the cart
* View the total cart amount
* Continue shopping from the cart
* Navigate between Home, Plants, Cart, and About Us pages

## 🪴 Plant Categories

The application contains three plant categories:

### 1. Air Purifying Plants

Plants selected for indoor spaces and air-purifying benefits.

### 2. Aromatic Plants

Plants known for their pleasant natural fragrance and aroma.

### 3. Medicinal Plants

Plants commonly associated with traditional and home gardening uses.

Each category contains at least **6 unique plants**.

## ✨ Features

* 🏠 Landing/Home page
* 🌿 Plant listing page
* 🛒 Shopping cart
* ➕ Increase quantity
* ➖ Decrease quantity
* 🗑️ Remove items from cart
* 💰 Dynamic cart total
* 🔢 Dynamic cart item count
* 📱 Responsive design
* ℹ️ About Us page
* 🔗 Navigation between pages
* 🚧 Checkout button with "Coming Soon" message

## 🛠️ Technologies Used

* **React.js** – User interface
* **Vite** – Development and build tool
* **Redux Toolkit** – Shopping cart state management
* **React Redux** – Connecting React components with Redux
* **React Router DOM** – Page navigation
* **CSS3** – Styling and responsive design
* **JavaScript (ES6+)** – Application logic

## 📁 Project Structure

```text
paradise-nursery/
│
├── README.md
├── package.json
├── index.html
├── vite.config.js
│
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    │
    ├── components/
    │   ├── AboutUs.jsx
    │   ├── ProductList.jsx
    │   └── CartItem.jsx
    │
    ├── redux/
    │   ├── CartSlice.jsx
    │   └── store.js
    │
```
