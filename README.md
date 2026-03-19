# ABOUT

A full-stack e-commerce solution designed to bridge the gap between simple frontend storefronts and robust, secure backend systems. Beyond its clean and responsive UI, the application serves as a deep dive into modern web security and financial transaction processing. At its core, the project handles identity management through a stateless JWT (JSON Web Token) authentication flow. This ensures that user sessions are handled securely by hashing passwords with Bcrypt.js and validating signed tokens via custom backend middleware, protecting sensitive routes like user profiles and order histories from unauthorized access.


# Key Features

1. 🔐 Secure Authentication: Implementation of JWT (JSON Web Tokens) for protected user sessions and private routes.

2. 💳 Stripe Integration: Production-ready payment processing using Stripe Elements and the Payment Intents API.

3. 📦 State Management: Real-time cart updates, quantity logic, and persistent storage via localStorage.

4. 🔍 Advanced Search: Instant client-side filtering by category, price, and keywords.

5. 📱 Responsive UI: Mobile-first design optimized for all screen sizes.


# Tech Stack

Frontend           Backend             Security/Payments

HTML5 / CSS3        Node.js          JSON Web Tokens (JWT)
JavaScript (ES6+)  Express.js            Stripe API
Fetch API         Middleware Logic       Bcrypt.js (Hashing)


# Project Structure

├── server/                 # Backend Node/Express API
│   ├── middleware/        # JWT Authentication guards
│   ├── routes/            # Auth & Stripe Payment endpoints
│   └── server.js          # Main server entry point
├── public/                 # Frontend Assets
│   ├── js/
│   │   ├── auth.js        # Login/Signup/JWT logic
│   │   ├── cart.js        # Cart & Search logic
│   │   └── checkout.js    # Stripe Elements integration
│   ├── index.html         # Main Storefront
│   └── style.css          # Custom UI styling
├── .env                    # STRIPE_SECRET & JWT_KEY (Ignored by Git)
└── package.json            # Project dependencies


# Security & Payment Flow

 1.Identity: User logs in -> Server signs a JWT -> Token stored in Browser.
 
 2. Verification: Frontend sends Token in Authorization header for all "Profile" or "Checkout" requests.
 
 3. Transaction: Cart data is verified server-side -> Stripe creates a secure payment intent -> Confirmation sent to Client.

 ![My Image](https://github.com/pv052k01/Ecommerce-Website/blob/878574ac30f0b078e5ccd4f03d3a5f8203f597dc/overview.png)


