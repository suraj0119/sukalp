# Sukalp Foundation Website

This is the official website for Sukalp Foundation, a non-profit organization dedicated to empowering communities through various initiatives.

## Features

- Responsive design for all devices
- Information about all initiatives (Shiksha Vatika, Bodh, Tarunonmesh, etc.)
- Contact forms integrated with Google Forms
- Contribution system
- Volunteer registration
- Partnership information

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/your-username/sukalp-foundation.git
   cd sukalp-foundation
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app router pages
- `components/` - React components
  - `donate/` - Contribution-related components
  - `volunteer/` - Volunteer-related components
  - `partnerships/` - Partnership-related components
  - `contact/` - Contact form and information
  - `[initiative-name]/` - Initiative-specific components
- `public/` - Static assets like images
- `lib/` - Utility functions and constants

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Framer Motion](https://www.framer.com/motion/) - Animations

## Deployment

The site is configured for easy deployment on Vercel:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
\`\`\`

Let's create a basic .gitignore file:

```text file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
