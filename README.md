# Anime Treasury — Next.js Store

Official anime merchandise storefront by **Moulick Rana**.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- No external UI dependencies

---

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

---

## Deploy to Vercel (Recommended — Free)

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done — you'll get a live URL.

### Option B: Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Click **Deploy** — no config needed, Vercel auto-detects Next.js

---

## Deploy to Netlify

```bash
npm run build
# Upload the `.next` folder or connect your GitHub repo on netlify.com
```

---

## Customizing Products

Edit `components/products.ts` to:
- Change prices
- Update product names and descriptions
- Add new products (add image to `public/images/` first)
- Add new series filters

## Adding New Images

Drop image files into `public/images/` and reference them as `/images/filename.jpg` in `products.ts`.

---

## Project Structure

```
anime-treasury/
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout + SEO metadata
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx         # Top navigation bar
│   ├── Hero.tsx           # Hero / landing section
│   ├── ProductsSection.tsx # Filterable product grid
│   ├── ProductCard.tsx    # Individual product card
│   ├── ProductModal.tsx   # Product detail modal
│   ├── About.tsx          # About section
│   ├── Footer.tsx         # Footer with contact info
│   └── products.ts        # Product data (edit here!)
├── public/
│   └── images/            # All product & logo images
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Contact / Update Email

In `components/Footer.tsx`, update the email and social handle on lines with `📧` and `📱`.

© Anime Treasury — Moulick Rana
