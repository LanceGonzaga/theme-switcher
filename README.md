# Theme Switcher App 

## Overview

This React application allows users to toggle between **Light** and **Dark** themes using the **Context API** and a **custom hook**. It applies the selected theme across multiple components and optionally persists the theme using `localStorage`.

---

## Features

- Global theme state using Context API
- Custom `useTheme` hook to access and toggle theme
- Theme toggle button in the Navbar
- Dynamic styling in Navbar, Content, and Footer
- Theme persistence using `localStorage` (Bonus)

---

## Project Structure
```bash
src/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ └── Content.jsx
├── context/
│ └── ThemeContext.jsx
├── hooks/
│ └── useTheme.js
├── App.jsx
├── index.js
└── styles.css
```
---

## Vercel link
[Live project link](https://theme-switcher-ruby.vercel.app/)
