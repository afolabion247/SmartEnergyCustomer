
# SmartEnergy Landing Page

## Features
- Conversion-focused React landing page
- Stripe-powered subscription checkout (4 plans)
- Tailwind-ready design structure
- Ready for deployment on Vercel, Netlify, or custom server

## Setup

### Frontend
- Run:
  ```
  npm install
  npm run dev
  ```
- Visit `http://localhost:5173`

### Backend (Stripe)
- Run:
  ```
  npm install express stripe cors
  node index.js
  ```
- Backend runs on `http://localhost:4242`

### Notes
- Replace `sk_test_your_secret_key` with your Stripe test secret key
- Replace `price_free_id`, `price_standard_id`, etc., with your Stripe Price IDs
- Add TailwindCSS for styling consistency

Ready to launch your SmartEnergy platform and start converting visitors to subscribers!
