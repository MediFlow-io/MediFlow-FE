# MediFlow Frontend Guide

## Location

All current frontend files are in `FE/FUTA Health Centre Project`.

| Area | Files |
|---|---|
| Public pages | `index.html`, `public index.html`, `homepage.js` |
| Authentication | `login.html`, `js/login.js`, `register.html`, `js/register.js`, `auth-guard.js` |
| Dashboard | `dashboard.html`, `dashboard main.html`, `js/dashboard.js` |
| Patient records | `patient-form.html`, `patient form.html`, `js/patient-form.js`, `patient form.js` |
| Admin students | `admin-users.html`, `js/admin-users.js`, `admin-guard.js` |
| Styling | `public style.css` |
| AI UI | `ai-assistant.js`, `ai-widget.js` |

Some files have a space and a hyphenated duplicate because both versions exist
in the current project. Keep both copies synchronized until the duplicate pages
are consolidated.

## How the frontend works

Pages are plain HTML. Scripts are loaded at the bottom of each page. The
frontend uses browser `fetch` calls to the relative `/api/...` routes served by
`server.js`; this keeps local and deployed paths consistent.

Authentication is cookie-based:

1. `js/login.js` posts credentials to `/api/login`.
2. The server sets an HTTP-only `session` cookie.
3. `auth-guard.js` checks `/api/session` before protected pages continue.
4. `admin-guard.js` additionally requires `role: "admin"`.

## Making a frontend change

1. Find the page and script in the table above.
2. Reuse existing classes from `public style.css`.
3. Keep API calls relative (`/api/...`).
4. Add loading, success, and error states for network actions.
5. Escape user content before inserting it into HTML. Prefer `textContent`.
6. If a page is protected, include `auth-guard.js`; if it is admin-only,
   include `admin-guard.js`.
7. Test the page through `npm start`, not only by opening the HTML file directly.

## AI surfaces

- The larger inline assistant is `ai-assistant.js`.
- The authenticated bottom-right notification box is `ai-widget.js`.
- Both call `POST /api/ai/ask`.
- The widget first checks `/api/session`, so it appears only after login.

## Frontend validation

```powershell
Get-ChildItem -Recurse -Filter *.js | ForEach-Object { node --check $_.FullName }
git diff --check
```
