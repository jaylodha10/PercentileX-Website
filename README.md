# PercentileX Landing Page Website

An educational, high-converting responsive landing page website for **PercentileX** built with React + Vite + Vanilla CSS.

## Features
- **Floating Header**: Sleek floating capsule navigation bar with blur backdrop filters.
- **Mockup Canvas**: Custom pure-CSS iPhone mockups with notch and border outlines displaying the app screenshots.
- **Spotlight Cards**: Mouse movement-controlled spotlight border highlight tracing for the feature grid.
- **Percentile Estimator**: Interactive live composite score calculator translating score entries into predicted percentiles.
- **Scroll Tracker widget**: A persistent page-scroll achievement widget unlocking CAT landmarks as you read.

## Local Development

1. Navigate to this directory in your terminal:
   ```bash
   cd percentilex_website
   ```
2. Start the hot-reloading development server:
   ```bash
   npm run dev
   ```

## Production Build

To test the production compile locally:
```bash
npm run build
npm run preview
```

## Vercel Deployment 🚀

This project is fully ready for zero-configuration deployments on Vercel:

### Option 1: Vercel CLI
Run the following commands in this directory:
```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard (GitHub Sync)
1. Push your repository to GitHub.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Import your repository.
4. Under **Root Directory**, click edit and select the `percentilex_website` directory.
5. Click **Deploy**. Vercel will auto-detect the Vite configuration and host it instantly!
