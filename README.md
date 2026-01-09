# Music App - API From Spotify

# Music Vibes 🎵

A modern React music application powered by the Spotify API, built with Vite for optimal performance and developer experience.

**Developer:** Firenze Higa Putra  
**Student ID:** 0110223014

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)

## Features
- 🎵 Browse new music releases
- 🔥 Discover popular songs
- 📝 Create and manage playlists
- 🎨 Modern, responsive UI with styled-components
- 🚀 Fast development with Vite
- 📱 Mobile-friendly design

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (usually comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (for cloning the repository)
  - Download from [git-scm.com](https://git-scm.com/)

### System Requirements
- **Operating System:** Windows 10+, macOS 10.15+, or Linux
- **RAM:** 4GB minimum (8GB recommended)
- **Storage:** 1GB free space

## Installation

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/firenzehiga/music-vibes.git
cd music-vibes
```

### 2. Install Dependencies
```bash
npm install
```

This will install all the required dependencies listed in `package.json`, including:
- React and React DOM
- React Router for navigation
- Styled Components for styling
- Axios for API requests
- React Icons for UI icons
- Vite for development and building

### 3. Environment Setup
Create a `.env` file in the root directory and add your Spotify API credentials:

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
```

**To get Spotify API credentials:**
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create App"
4. Fill in the app details
5. Copy the Client ID and Client Secret
6. Add `http://localhost:5173/callback` to the Redirect URIs

## Configuration

### Development Configuration
The project uses Vite for development with the following default settings:
- **Port:** 5173
- **Hot Module Replacement:** Enabled
- **Source Maps:** Enabled in development

### Production Configuration
- **Build Output:** `dist/` directory
- **Asset Optimization:** Enabled
- **Code Splitting:** Automatic

## Development

### Start Development Server
```bash
npm run dev
```

This will start the development server at `http://localhost:5173`. The page will automatically reload when you make changes to the code.

### Development Features
- **Hot Module Replacement (HMR)** for instant updates
- **Fast refresh** for React components
- **ESLint integration** for code quality
- **Source maps** for debugging

## Building for Production

### Create Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified and optimized code
- Asset bundling and compression
- Tree shaking for smaller bundle sizes

### Preview Production Build
```bash
npm run preview
```

This serves the production build locally for testing before deployment.

## Available Scripts

| Script | Description | Usage |
|--------|-------------|-------|
| `npm run dev` | Start development server | Development |
| `npm run build` | Create production build | Deployment |
| `npm run preview` | Preview production build | Testing |
| `npm run lint` | Run ESLint code analysis | Code quality |

### Additional Commands
```bash
# Install a new dependency
npm install package-name

# Install a development dependency
npm install --save-dev package-name

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

## Project Structure

```
music-vibes/
├── public/                 # Static assets
│   ├── audio/             # Audio files
│   ├── photo/             # Images
│   ├── video/             # Video files
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── utils/             # Utility functions and constants
│   ├── assets/            # Images and other assets
│   ├── Layout/            # Layout components
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── index.html             # HTML template
```

## Technologies Used

### Core Technologies
- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool and development server
- **React Router DOM 7.6.2** - Client-side routing

### Styling & UI
- **Styled Components 6.1.18** - CSS-in-JS styling
- **Emotion** - CSS-in-JS styling library
- **React Icons 5.5.0** - Icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React support for Vite

### API Integration
- **Axios 1.9.0** - HTTP client for API requests
- **Spotify Web API** - Music data source

## Troubleshooting

### Common Issues

#### 1. Node.js Version Error
```bash
Error: This version of Node.js requires...
```
**Solution:** Update to Node.js 16+ from [nodejs.org](https://nodejs.org/)

#### 2. Permission Errors (macOS/Linux)
```bash
EACCES: permission denied
```
**Solution:** Use npm with proper permissions or configure npm properly:
```bash
sudo chown -R $(whoami) ~/.npm
```

#### 3. Port Already in Use
```bash
Port 5173 is already in use
```
**Solution:** Kill the process using the port or use a different port:
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

#### 4. Spotify API Errors
```bash
401 Unauthorized
```
**Solution:** Check your Spotify API credentials in the `.env` file

#### 5. Build Errors
```bash
Module not found
```
**Solution:** Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### 6. Slow Installation
If npm install is slow, try using a different registry:
```bash
npm install --registry https://registry.npmjs.org/
```

### Getting Help

If you encounter issues not covered here:

1. **Check the Console:** Look for error messages in the browser console
2. **Check Terminal:** Review any error messages in the terminal
3. **Clear Cache:** Try clearing browser cache and npm cache
4. **Restart Development Server:** Stop and restart `npm run dev`
5. **Check Dependencies:** Ensure all dependencies are properly installed

### Performance Tips

1. **Use React DevTools** for debugging React components
2. **Monitor bundle size** with the build analyzer
3. **Optimize images** in the `src/assets` directory
4. **Use lazy loading** for large components

---

## License

This project is created for educational purposes.

## Contributing

This is a student project. For suggestions or improvements, please contact the developer.

---

**Happy Coding! 🚀**