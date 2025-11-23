<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repository -->
# Copilot / AI Agent Instructions for ctest

This repository is a simple MERN app (React client + Express/Mongoose server). The goal of these instructions is to give an AI agent the immediate, actionable context needed to be productive.

- **Architecture (big picture):**
  - Two top-level services: `client/` (React app) and `server/` (Express API). Data flows: React -> Axios -> Express `/api/strings` -> Mongoose -> MongoDB Atlas.
  - Key server files: `server/server.js`, `server/routes/strings.js`, `server/models/String.js`.
  - Key client files: `client/src/components/StringForm.js`, `client/src/App.js`.

- **Run / dev workflow (what works today):**
  - Start backend: `cd server && npm run dev` (both `start` and `dev` use `nodemon`).
  - Start frontend: `cd client && npm start` (CRA dev server).
  - The `.env` belongs in `server/` and must include `MONGODB_URI` (Atlas). `PORT` defaults to `5001`.

- **Project-specific conventions & patterns:**
  - ES module syntax is used (`"type": "module"` in `server/package.json`) — use `import`/`export`, not `require`.
  - API mount point: the strings router is mounted at `/api/strings` in `server/server.js`.
  - Mongoose model is exported as default from `server/models/String.js` and named `String` (schema fields: `value`, `createdAt`).
  - Client Axios calls are hard-coded to `http://localhost:5001/api/strings` in `client/src/components/StringForm.js` — update when changing server port or enabling proxy.

- **Integration points & external dependencies:**
  - MongoDB Atlas via `MONGODB_URI` — do not commit credentials. The repo includes `mongodb-memory-server` as a devDependency (available for test setups but no tests are configured yet).
  - CORS is enabled server-side with default options in `server/server.js` (currently permissive for localhost development).

- **API surface (examples):**
  - `POST /api/strings` — expects JSON `{ value: string }`. File: `server/routes/strings.js`.
  - `GET /api/strings` — returns saved strings sorted by newest. File: `server/routes/strings.js`.

- **Editing guidance (practical tips for changes):**
  - When editing server code remember ES modules and top-level `await` is not used — keep async functions in routes.
  - Update CORS origin in `server/server.js` if you change the client host or enable HTTPS.
  - If adding tests that touch MongoDB, prefer `mongodb-memory-server` to avoid needing Atlas credentials in CI.

- **Where to look for examples in the codebase:**
  - Route + controller pattern: `server/routes/strings.js` (simple route handler with validation and error responses).
  - Data model: `server/models/String.js` (Mongoose schema with `value` and `createdAt`).
  - Frontend usage: `client/src/components/StringForm.js` (Axios POST, local state management, and simple UI styles inline).

- **Scripts & debugging:**
  - Backend logs to console on successful MongoDB connection and server start (see `server/server.js`). Use those logs to confirm environment variables are loaded.
  - Use `nodemon` for server hot-reload; change `server/package.json` scripts only if you understand the development workflow.

If anything here is unclear or you want more examples (unit tests, CI hints, or a small integration test using `mongodb-memory-server`), tell me which area to expand and I will update this file.
