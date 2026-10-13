# Lasfloria Co. — Modern Digital Studio Landing Page

A responsive, bilingual (EN/TH) agency landing page built with Next.js 15, React 19, and Tailwind CSS.

<!-- Replace with your deployed URL if available -->
<!-- 🔗 **Live Demo:** [https://your-lasfloria-demo.vercel.app](https://your-lasfloria-demo.vercel.app) -->

---

## ✨ Features

- **Bilingual Support (EN / TH):** Seamless locale switching with `next-intl`, paired with optimized fonts for each language (Figtree for English, Kanit for Thai).
- **Serverless Contact Form:** Built with **Zod** schema validation and integrated directly with Google Apps Script to handle submissions without maintaining a dedicated backend server.
- **Modern & Responsive UI:** Crafted with **Tailwind CSS v4** and Radix UI primitives, fully responsive across mobile, tablet, and desktop.
- **Interactive Feedback:** Real-time form error clearing as you type, with toast notifications powered by **Sonner**.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, tw-animate-css
- **UI & Icons:** Radix UI primitives, Lucide React
- **Libraries:** next-intl (i18n), Zod (Validation), Sonner (Toasts)

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```
Add your Google Apps Script endpoint:
```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT="your_endpoint_here"
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👤 Author

**Annisa Noivong (Field)**
- GitHub: [@Fielddddd](https://github.com/Fielddddd)
- Email: [annisanoivong@gmail.com](mailto:annisanoivong@gmail.com)

---

## 📄 License

© 2026 Annisa Noivong — All rights reserved. Personal portfolio project.
