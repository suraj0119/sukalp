# Deployment Guide for Sukalp Foundation Website

This guide explains how to build and deploy the Sukalp Foundation website.

## Building for Production

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Build Steps

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Create production build**
   \`\`\`bash
   npm run build
   \`\`\`
   This will:
   - Clean previous builds
   - Build the Next.js project with optimizations
   - Create a `dist` folder with the production-ready files
   - Add a simple Node.js server for serving the static files

3. **The `dist` folder will contain:**
   - All HTML, CSS, and JavaScript files
   - All static assets (images, fonts, etc.)
   - A simple Node.js server for serving the files

## Deployment Options

### Option 1: Deploy using the included Node.js server

1. Copy the entire `dist` folder to your server
2. Install Node.js on your server (if not already installed)
3. Navigate to the dist folder and run:
   \`\`\`bash
   node server.js
   \`\`\`
   Or set up a process manager like PM2:
   \`\`\`bash
   npm install -g pm2
   pm2 start server.js --name sukalp-foundation
   \`\`\`

### Option 2: Deploy to a static hosting service

The `dist` folder contains static files that can be deployed to any static hosting service:

1. **Vercel**
   \`\`\`bash
   npm install -g vercel
   vercel dist --prod
   \`\`\`

2. **Netlify**
   - Drag and drop the `dist` folder to Netlify's dashboard
   - Or use the Netlify CLI:
     \`\`\`bash
     npm install -g netlify-cli
     netlify deploy --dir=dist --prod
     \`\`\`

3. **GitHub Pages**
   - Copy the contents of the `dist` folder to your GitHub Pages repository
   - Or use the gh-pages package:
     \`\`\`bash
     npm install -g gh-pages
     gh-pages -d dist
     \`\`\`

4. **Any static file server (Apache, Nginx, etc.)**
   - Copy the contents of the `dist` folder to your server's web root directory

## Environment Variables

If your deployment requires environment variables, make sure to set them up on your hosting platform or include them in your server configuration.

## Troubleshooting

- **404 errors on page refresh**: If you're using a static file server, you may need to configure it to redirect all requests to index.html for client-side routing to work properly.
- **Missing assets**: Ensure all files from the `dist` folder are copied to your server.
- **API endpoints not working**: This is a static export, so server-side API routes won't work. Consider using serverless functions or a separate API server.
\`\`\`

## 6. Create a .env.production file template:

```text file=".env.production.example"
# Production Environment Variables
# Copy this file to .env.production before building

# API URLs
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics (if needed)
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXXXXX-X

# Other configuration
NODE_ENV=production
