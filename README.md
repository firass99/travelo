# ✈️ Travelo

Travelo is a travel booking front-end built with React — browse destinations, search by dates and travelers, add trips to a cart, and manage a simple auth flow (login/register with role-based redirects).

> This is a front-end learning/portfolio project. Authentication and data are currently mocked on the client (see [Known Limitations](#known-limitations) below) — there is no real backend yet.

---

## Tech Stack

| Layer              | Tools                                                |
| ------------------ | ---------------------------------------------------- |
| Framework          | React (Vite)                                         |
| Routing            | React Router v6 (nested routes, layout-route guards) |
| State management   | Redux Toolkit (`cart`, `theme`, `auth` slices)       |
| Forms & validation | React Hook Form + Zod                                |
| UI components      | shadcn/ui, built on **Base UI** (`@base-ui/react`)   |
| Styling            | Tailwind CSS                                         |
| Icons              | lucide-react                                         |
| Carousel           | Swiper                                               |

---

## Features

- 🏝️ **Destination browsing** — grid/carousel of destinations with images, ratings, pricing, and descriptions
- 🔍 **Search widget** — filter by destination, departure/return dates, and traveler count, with validation against each destination's availability window
- 🛒 **Cart** — add destinations to a cart (Redux-backed), adjust quantity, remove items, running total, shown in a slide-out sheet from the navbar
- 🌗 **Theme toggle** — light/dark mode via Redux, synced to `localStorage` and the OS `prefers-color-scheme`
- 🔐 **Auth flow** — login/register forms with Zod-validated fields (email format, password rules, confirm-password matching), role-based redirects (`ADMIN` vs `USER`)
- 🚦 **Route guards** — `GuestOnlyRoute` keeps logged-in users out of `/login` and `/register`; `ProtectedRoute` restricts pages to specific roles
- 📱 **Responsive navbar** — desktop nav links + auth buttons, mobile hamburger menu in a sheet
- 📝 **Blog and contact pages**

---

### Installation

```bash
git clone <your-repo-url>
cd travelo
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

npm run build

## License

This project is for portfolio purposes. Add a license of your choice if you plan to distribute it.
