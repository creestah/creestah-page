# creestah-page 💕

A tiny, cute landing page for Christa, deployed at **https://creestah.com**.

The site is a simple static page built with HTML + CSS + a sprinkle of JavaScript.  
It has:

- A soft, pastel, rounded card layout
- A **global smooch counter** backed by a tiny API
- A **secret page** at `/for-christa`
- Favicons and Apple touch icons
- Hosted on **GitHub Pages**, fronted by **Cloudflare**

---

## Tech stack

- Plain **HTML**
- **CSS** (no framework)
- A few lines of vanilla **JavaScript** for the smooch counter
- A simple **API endpoint** for the global count (`/api/smooches`)
- Deployed using **GitHub Pages**

No build step, no bundler, no framework ✨

---

## Project structure

```text
.
├── index.html                  # Main page (Creestah loves to get smooches)
├── for-christa/
│   └── index.html              # Secret page at /for-christa
├── assets/
│   ├── css/
│   │   └── style.css           # Shared styles
│   ├── js/
│   │   └── smooch-counter.js   # Counter logic + hearts
│   └── img/
│       ├── creestah.jpg        # Main image
│       └── creestah2.jpg       # Secret page image
├── apple-touch-icon.png
├── favicon-32x32.png
├── favicon-16x16.png
├── site.webmanifest
└── .gitignore
```

---

## Smooch counter

The smooch counter is global and backed by a tiny API endpoint:

- Both pages call `/api/smooches` to fetch and increment the count.
- When running locally (file:// or localhost), it points at
  `https://creestah.com/api/smooches`.

No tracking, just a simple shared count.

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

Any pushes to `main` automatically redeploy the site.

---

## Notes

This project exists purely for fun, affection, and smooches.  
If you’re reading this and your name is Christa: hi, smooches from Vlad 😘
