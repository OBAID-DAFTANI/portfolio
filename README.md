# Obaid Ur Rehman — Portfolio

A single-page portfolio built with React (Vite) + Tailwind on the frontend, and Node/Express +
MongoDB on the backend (for a real, working contact form — not a fake mailto link).

## Folder Structure

```
portfolio/
├── frontend/     — React + Vite + Tailwind (the site itself)
└── backend/      — Node.js + Express + MongoDB (contact form API)
```

## Running Locally (Windows / VS Code)

### 1. Backend first

```
cd backend
npm install
```

Copy `.env.example` to `.env` and fill in:
- `MONGODB_URI` — use the same MongoDB Atlas account you used for Firaasat. Create a **new
  database** (e.g. name it `portfolio`) so contact messages don't mix with Firaasat's data.
- `CLIENT_URL` — leave as `http://localhost:5173` for local development.

Then:
```
npm run dev
```
You should see `MongoDB connected` and `Portfolio API running on port 5050`.

### 2. Frontend (in a new terminal)

```
cd frontend
npm install
npm run dev
```
Open the URL it prints (usually `http://localhost:5173`).

## Deploying (same playbook as Firaasat)

- **Backend** → Render (Root Directory: `backend`, Build: `npm install`, Start: `npm start`,
  add the same environment variables as your local `.env`, but set `CLIENT_URL` to your live
  Vercel URL once you have it).
- **Frontend** → Vercel (Root Directory: `frontend`, set environment variable
  `VITE_API_BASE_URL` to your Render backend URL + `/api`, e.g.
  `https://portfolio-backend-xyz.onrender.com/api`).

If you get stuck on any step, it's the exact same process we used for Firaasat — CORS included
(remember to update `CLIENT_URL` on Render after you get your Vercel URL).

## Editing Content

- **Projects** — edit `frontend/src/data/projects.js`
- **Skills** — edit `frontend/src/data/skills.js`
- **Hero / Approach / Experience text** — edit the matching file directly in
  `frontend/src/components/`
