# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

A responsive landing page built with **React + Vite** based on the Insure design challenge.  
The project includes a desktop and mobile layout, reusable UI components, SCSS styling, and deployment to GitHub Pages.

## Live Demo

- **GitHub Pages:** https://p3lm3shka1.github.io/insure-landing-page-master/

---

## Tech Stack

- **React** (UI)
- **SCSS (Sass)**
- **JavaScript**

---

## Project Features

- Responsive design for desktop and mobile screens
- Reusable component-based architecture
- Mobile navigation with menu toggle
- Features section rendered from data
- CTA (Call To Action) section
- Footer with social links and grouped navigation columns

---

## Project Structure

```text
insure-landing-page-master/
├─ public/
├─ src/
│  ├─ assets/
│  │  ├─ components/
│  │  │  ├─ Buttons/
│  │  │  ├─ CTA/
│  │  │  ├─ Features/
│  │  │  ├─ Footer/
│  │  │  ├─ Hero/
│  │  │  ├─ Layout/
│  │  │  └─ Navbar/
│  │  ├─ Data/
│  │  │  ├─ Features.js
│  │  │  ├─ FooterLinks.js
│  │  │  └─ NavLinks.js
│  │  ├─ design/
│  │  └─ images/
│  ├─ style/
│  │  └─ variables.scss
│  ├─ App.jsx
│  ├─ App.scss
│  └─ main.jsx
├─ vite.config.js
├─ package.json
└─ README.md
```

---

## Main Components

- **Navbar**: top navigation, mobile menu toggle
- **Hero**: main headline, intro text, CTA button, adaptive image behavior
- **Features**: feature cards generated from data
- **CTA**: highlighted call-to-action block
- **Footer**: logo, social icons, and grouped footer links
- **Layout/Container**: shared layout wrapper
- **Buttons**: reusable button styles/variants

---

## Notes

- SCSS variables are centralized in `src/style/variables.scss`.
- Data-driven sections are stored in `src/assets/Data/`.
- If assets fail to load in production, verify relative paths and Vite `base` config.

---

## Author

- GitHub: [p3lm3shka1](https://github.com/p3lm3shka1)
- Frontend Mentor [p3lm3shka1](https://www.frontendmentor.io/profile/p3lm3shka1)
