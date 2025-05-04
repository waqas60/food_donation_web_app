Food Loan Platform

A React.js web application that connects **Restaurants** and **Suppliers** to reduce food waste by donating surplus food to those in need. 

🌐 Live Demo
 (https://feedsy.netlify.app/)

🚀 Features

- 🔐 **Login Page**: Role-based login (Restaurant or Supplier).
- 🏠 **Landing Page**: Welcome section, mission, how it works, and a call to action.
- 🍽️ **Restaurant Dashboard**:
  - Upload food details (name, quantity, expiry, image).
  - Track past donations and statuses.
- 🚚 **Supplier Dashboard**:
  - View available donations.
  - Accept and schedule pickups.
  - Mark deliveries as complete with notes or proof image.

---

🧩 Component Overview

`Home.jsx`
Landing page including:
- Hero section with intro
- Mission statement
- How it works
- Navigation to login/signup

`Login.jsx`
Role-based login with navigation to:
- `/restaurant-dashboard`
- `/supplier-dashboard`

> ✨ Pre-filled demo login:  
> `email: admin@gmail.com`  
> `password: admin`

`RestaurantDashboard.jsx`
Dashboard for restaurant users to:
- Upload food (name, quantity, expiry, image)
- View list of donations
- Track status (Pending, Delivered)

`SupplierDashboard.jsx`
Dashboard for supplier users to:
- View available food donations
- Accept and schedule pickups
- Upload proof of delivery (image, note)

🛠️ Tech Stack

- **React.js**
- **Tailwind CSS** for styling
- **React Router** for navigation
