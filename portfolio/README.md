# Developer Portfolio

A modern, responsive portfolio website built with React, featuring smooth animations and a clean design.

## Features

- 🎨 Modern, minimal UI with smooth animations
- 📱 Fully responsive design
- 🚀 Fast performance with Vite
- 📦 Easy project management
- 📝 Contact form integration with Formspree
- 🌐 GitHub Pages deployment ready

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Adding New Projects

1. Add project images to `src/assets/projects/`
2. Update `src/data/projects.js` with your project details:
```javascript
{
  title: "Project Name",
  description: "Project description",
  image: "/projects/project-image.jpg",
  video: "/projects/project-demo.mp4", // Optional
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/project",
  live: "https://project-demo.com"
}
```

## Deployment

1. Update `package.json` with your GitHub repository URL:
```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Custom Domain Setup

1. Purchase a domain from your preferred provider
2. Add a CNAME file in the `public` folder with your domain
3. Configure DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Add A records for GitHub Pages IPs
4. Update `package.json` homepage to your custom domain
5. Redeploy: `npm run deploy`

## Built With

- React
- Vite
- React Router
- Framer Motion
- Font Awesome
- Formspree

## License

MIT License - feel free to use this template for your own portfolio!
