# Deployment Guide

Yes, you can easily deploy this repository from GitHub! Since this is a **Vite + React** application, it works seamlessly with modern hosting platforms like **Vercel** and **Netlify**.

## Option 1: Deploy on Vercel (Recommended) &nbsp; <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="20">

Vercel is the creators of Next.js and provides excellent support for React/Vite apps.

1.  **Sign Up/Log In**: Go to [vercel.com](https://vercel.com/) and sign up using your **GitHub** account.
2.  **Add New Project**:
    *   Click "Add New..." -> "Project".
    *   Select your `sorab-portfolio` repository from the list.
3.  **Configure Project**:
    *   Framework Preset: **Vite** (should be auto-detected).
    *   Root Directory: `./` (default).
    *   Build Command: `npm run build` (default).
    *   Output Directory: `dist` (default).
4.  **Deploy**: Click **Deploy**.
    *   Vercel will build your site and give you a live URL (e.g., `sorab-portfolio.vercel.app`) in less than a minute.

## Option 2: Deploy on Netlify &nbsp; <img src="https://www.netlify.com/v3/img/components/logomark.png" height="20">

1.  **Sign Up/Log In**: Go to [netlify.com](https://www.netlify.com/) and sign up with **GitHub**.
2.  **Add New Site**:
    *   Click "Add new site" -> "Import from existing project".
    *   Select **GitHub**.
3.  **Select Repository**: Pick `sorab-portfolio`.
4.  **Build Settings**:
    *   Build command: `npm run build`
    *   Publish directory: `dist`
5.  **Deploy**: Click **Deploy Site**.

## Option 3: GitHub Pages

Since this uses Vite, GitHub Pages requires a bit more configuration (setting a `base` in `vite.config.js`). **Vercel or Netlify are easier** for this specific setup as they handle everything automatically without code changes.

---

### Important Note
Your project is a **Single Page Application (SPA)**.
*   If you deploy to **Vercel** or **Netlify**, the configuration I provided above works out of the box.
*   Since we removed the router and are using standard scroll-to-section links (`#about`), checking "Pretty URLs" or redirect rules is mostly not needed, but Vercel/Netlify handles them if you re-add routing later.
