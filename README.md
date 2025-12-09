# creestah-page 💕

A tiny, cute landing page for Christa, deployed at **https://creestah.com**.

The site is a simple static page built with HTML + CSS + a sprinkle of JavaScript.  
It has:

- A soft, pastel, rounded card layout
- A **smooch counter** stored per-device using `localStorage`
- A **secret page** at `/for-christa`
- Favicons and Apple touch icons
- Hosted on **GitHub Pages**, fronted by **Cloudflare**

---

## Tech stack

- Plain **HTML**
- **CSS** (no framework)
- A few lines of vanilla **JavaScript** for the smooch counter
- Deployed using **GitHub Pages**

No build step, no bundler, no framework ✨

---

## Project structure

```text
.
├── index.html              # Main page (Creestah loves to get smooches)
├── for-christa/
│   └── index.html          # Secret page at /for-christa
├── assets/
│   ├── css/
│   │   └── style.css       # Shared styles
│   └── img/
│       └── creestah.png    # Main image
├── apple-touch-icon.png
├── favicon-32x32.png
├── favicon-16x16.png
├── site.webmanifest
└── .gitignore
```

---

## Smooch counter

The smooch counter is implemented using `localStorage` and is **per-device**:

- Every click on `Send a smooch 💋` increments a number stored under a key
  like `creestah_smooch_count`.
- The same key is used on both the main page and the `/for-christa` page,
  so the count is shared between them on that device.

No backend, no tracking, just local cuteness.

---

## Development

Clone the repo:

```bash
git clone git@github.com:creestah/creestah-page.git
cd creestah-page
```

Open `index.html` directly in a browser, or use a simple local server, for example:

```bash
# Python 3
python -m http.server 8000
```

Then go to `http://localhost:8000`.

---

## Deployment

This repo is deployed via **GitHub Pages**:

- **Source:** `main` branch, root (`/`)
- **Custom domain:** `creestah.com`
- DNS is managed by **Cloudflare**, with:
  - `creestah.com` → CNAME → `creestah.github.io`
  - `www.creestah.com` → CNAME → `creestah.github.io`
  - Both set as **DNS only** (no proxy)

Any pushes to `main` automatically redeploy the site.

---

## Notes

This project exists purely for fun, affection, and smooches.  
If you’re reading this and your name is Christa: hi, you are very loved. 💗
