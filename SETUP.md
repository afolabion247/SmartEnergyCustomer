# Smart Energy Landing Page - Setup Guide

## Issues Fixed

The following issues were preventing the application from running:

1. **Missing React dependencies** - Added React and React-DOM
2. **Missing build tools** - Added Vite for development and building
3. **Missing entry point** - Created src/main.jsx
4. **Server-side import issue** - Removed CSS import from server/index.js
5. **Missing routing** - Added simple routing for success/cancel pages

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Backend Server (Terminal 1)
```bash
npm run server
```
This will start the Stripe server on http://localhost:4242

### 3. Start the Frontend Development Server (Terminal 2)
```bash
npm run dev
```
This will start the React app on http://localhost:5173

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:4242

## File Structure

```
SmartEnergyCustomer/
├── public/
│   └── index.html          # HTML template
├── server/
│   ├── index.js            # Express server with Stripe
│   └── index.css           # Tailwind CSS
├── src/
│   ├── components/         # React components
│   │   ├── HeroSection.js
│   │   ├── HowItWorks.js
│   │   ├── PricingPlans.js
│   │   ├── AppPreview.js
│   │   ├── FAQs.js
│   │   └── Footer.js
│   ├── App.js              # Main app component
│   ├── main.jsx            # React entry point
│   ├── Success.jsx         # Success page
│   └── Cancel.jsx          # Cancel page
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── SETUP.md               # This file
```

## Stripe Configuration

The server is configured with a test Stripe key. For production:

1. Replace the Stripe secret key in `server/index.js`
2. Update the Price IDs in `src/components/PricingPlans.js`
3. Update success/cancel URLs in `server/index.js`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start backend server

## Troubleshooting

If you encounter issues:

1. **Port conflicts**: Make sure ports 5173 and 4242 are available
2. **Dependencies**: Run `npm install` again
3. **Stripe errors**: Check your Stripe key and Price IDs
4. **Build errors**: Check console for specific error messages

## Next Steps

1. Replace Stripe test keys with production keys
2. Add your actual Price IDs to PricingPlans.js
3. Customize the design and content
4. Deploy to your preferred platform (Vercel, Netlify, etc.) 