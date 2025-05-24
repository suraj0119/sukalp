const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
}

console.log(`${colors.bright}${colors.cyan}Starting production build process...${colors.reset}\n`)

// Step 1: Clean previous builds
console.log(`${colors.yellow}Cleaning previous builds...${colors.reset}`)
try {
  if (fs.existsSync(path.join(__dirname, "../.next"))) {
    fs.rmSync(path.join(__dirname, "../.next"), { recursive: true, force: true })
  }
  if (fs.existsSync(path.join(__dirname, "../out"))) {
    fs.rmSync(path.join(__dirname, "../out"), { recursive: true, force: true })
  }
  if (fs.existsSync(path.join(__dirname, "../dist"))) {
    fs.rmSync(path.join(__dirname, "../dist"), { recursive: true, force: true })
  }
  console.log(`${colors.green}✓ Clean completed${colors.reset}\n`)
} catch (error) {
  console.error("Error during cleanup:", error)
  process.exit(1)
}

// Step 2: Build the Next.js project
console.log(`${colors.yellow}Building Next.js project...${colors.reset}`)
try {
  execSync("next build", { stdio: "inherit" })
  console.log(`${colors.green}✓ Build completed${colors.reset}\n`)
} catch (error) {
  console.error("Error during build:", error)
  process.exit(1)
}

// Step 3: Create dist folder from out directory
console.log(`${colors.yellow}Creating dist folder...${colors.reset}`)
try {
  fs.mkdirSync(path.join(__dirname, "../dist"), { recursive: true })

  // Copy all files from out to dist
  const copyDir = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true })

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name)
      const destPath = path.join(dest, entry.name)

      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true })
        copyDir(srcPath, destPath)
      } else {
        fs.copyFileSync(srcPath, destPath)
      }
    }
  }

  copyDir(path.join(__dirname, "../out"), path.join(__dirname, "../dist"))
  console.log(`${colors.green}✓ Dist folder created${colors.reset}\n`)
} catch (error) {
  console.error("Error creating dist folder:", error)
  process.exit(1)
}

// Step 4: Create a simple server file in the dist folder
console.log(`${colors.yellow}Creating server file...${colors.reset}`)
try {
  const serverContent = `
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  console.log(\`\${req.method} \${req.url}\`);
  
  // Handle favicon requests
  if (req.url === '/favicon.ico') {
    const faviconPath = path.join(__dirname, 'favicon.ico');
    if (fs.existsSync(faviconPath)) {
      res.setHeader('Content-Type', 'image/x-icon');
      fs.createReadStream(faviconPath).pipe(res);
      return;
    }
    res.statusCode = 404;
    res.end();
    return;
  }
  
  // Normalize URL
  let url = req.url;
  
  // Handle root path
  if (url === '/') {
    url = '/index.html';
  }
  
  // Handle paths without file extensions (assume they're routes)
  if (!path.extname(url) && !url.endsWith('/')) {
    url = \`\${url}.html\`;
  }
  
  // Handle paths ending with / (add index.html)
  if (url.endsWith('/')) {
    url = \`\${url}index.html\`;
  }
  
  // Resolve file path
  const filePath = path.join(__dirname, url);
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If file doesn't exist, try serving 404.html
      const notFoundPath = path.join(__dirname, '404.html');
      fs.access(notFoundPath, fs.constants.F_OK, (err404) => {
        if (err404) {
          // If 404.html doesn't exist, send a simple 404 response
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('404 Not Found');
          return;
        }
        
        // Serve 404.html
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(notFoundPath).pipe(res);
      });
      return;
    }
    
    // Get file extension and content type
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // Serve the file
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});
`

  fs.writeFileSync(path.join(__dirname, "../dist/server.js"), serverContent)
  console.log(`${colors.green}✓ Server file created${colors.reset}\n`)
} catch (error) {
  console.error("Error creating server file:", error)
  process.exit(1)
}

console.log(`${colors.bright}${colors.green}Build process completed successfully!${colors.reset}`)
console.log(`
${colors.bright}To run the production build:${colors.reset}
  cd dist
  node server.js

${colors.bright}Or using npm:${colors.reset}
  npm start
`)
