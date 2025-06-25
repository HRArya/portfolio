# 🧠 Harshit Raj Arya – Portfolio Website

A **modern**, **visually engaging** developer portfolio website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.  
It showcases personal information, projects, a contact form, smooth animations, and a mobile‑first responsive design.

---

## ✨ Features

- 🧑‍💻 Developer portfolio with dynamic sections  
- ⚙️ Built using **Next.js App Router**  
- 🎨 Fully responsive design with **Tailwind CSS**  
- 🌈 Smooth page transitions via **Framer Motion**  
- 🧩 Modular UI components using **shadcn/ui**  
- 📬 Contact form with animated loading/success states (API route)  
- 🖼️ Animated project showcase slider (**Swiper.js**)  
- 🧠 Custom font integration (JetBrains Mono)  
- 📱 Dark‑mode friendly & mobile‑optimized  

---

## 🧱 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework & App Router |
| **Tailwind CSS** | Utility‑first responsive styling |
| **Framer Motion** | Page & component animations |
| **shadcn/ui** | Accessible UI primitives |
| **React Icons / Lucide Icons** | Iconography |
| **Swiper.js** | Project carousel |

---

## 📁 Project Structure

```text
portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├──api/contact
│   │   │  └── route.js     # API route for contact form
│   │   ├── contact
│   │   │   └── page.jsx
│   │   ├── project
│   │   │   └── page.jsx
│   │   └── resume
│   │       └── page.jsx
│   ├── layout.jsx          # Layout (fonts, transitions, header)
│   ├── page.jsx            # Home page
│   └── golbals.css         # Global css
│
├── components/
│   ├── Header.jsx
│   ├── MoblieNav.jsx
│   ├── PageTransition.jsx
│   ├── StairTransition.jsx
│   ├── Nav.jsx
│   ├── Photo.jsx
│   ├── Social.jsx
│   ├── Stair.jsx
│   ├── WorkSliderBtns.jsx
│   └── ui/                 # Inputs, buttons, textarea, tooltip
│
├── public/
│   └── assets/             # Images, logos, favicon        
│
├── .elintrc.json
│
├── package.json   
│
├── README.md
└── tailwind.config.js      # Tailwind base styles
```
---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/HRA/portfolio-nextjs.git
cd portfolio-nextjs

npm install

npm run dev

```

---

## 🌐 Deployment

### Deploy on Vercel in one command:

```bash

npx vercel
```

```text
Or follow the manual deployment guide.
```

## 🧪 Development Notes

- Fonts imported via next/font/google (JetBrains Mono)
- Metadata & favicon configured in layout.jsx
- Contact form handled by /api/contact POST route
- Button states (sending, sent) managed with React useState
- Responsive layout follows Tailwind’s mobile‑first approach

## 📬 Contact

| Field   | Details                         |
|---------|----------------------------------|
| **Author** | Harshit Raj Arya               |
| **Email**  | [harshitrajarya@gmail.com](mailto:harshitrajarya@gmail.com) |
| **GitHub** | [@HRA](https://github.com/HRA) |

## 📄 License

Released under the **MIT License** — feel free to **fork**, **improve**, and **use** it for personal or commercial projects.

> _“Show, don’t tell” — this portfolio speaks your skills._ 🚀

