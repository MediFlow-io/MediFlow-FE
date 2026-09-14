# MediFlow Backend Guide

## Location and runtime

The current development backend is:

```text
FE/FUTA Health Centre Project/server.js
```

It uses only Node.js built-ins and has no npm dependencies. Start it with:

```powershell
cd "FE\FUTA Health Centre Project"
npm start
```

`package.json` defines the start command. The server serves both the static
frontend and the API on `PORT` (default `3000`).

## Configuration

| Variable | Purpose |
|---|---|
| `PORT` | HTTP port; defaults to `3000` |
| `SESSION_SECRET` | Reserved deployment configuration; set a long random value |
| `ADMIN_PASSWORD` | Password used when the initial admin user is created |

For production, replace the JSON storage and in-memory sessions with a real
database and a durable session or token system. Do not use the fallback admin
password in production.

## API contract

| Method | Route | Auth | Purpose |
|---|---|---|---|
| `POST` | `/api/login` | No | Create a session |
| `POST` | `/api/logout` | No | End a session |
| `GET` | `/api/session` | Session | Return current user |
| `POST` | `/api/register` | No | Create a staff account |
| `POST` | `/api/admin/users` | Admin | Create a student account |
| `POST` | `/api/ai/ask` | Session | Return an AI/first-aid answer |
| `GET` | `/api/patients?search=` | Session | List/search patients |
| `GET` | `/api/patients/:id` | Session | Read one patient |
| `POST` | `/api/patients` | Session | Create a patient |
| `PUT` | `/api/patients/:id` | Session | Update a patient |
| `DELETE` | `/api/patients/:id` | Session | Delete a patient |

JSON errors use the shape:

```json
{ "message": "Human-readable error" }
```

## Data and security

- Users are stored in `data/users.json`.
- Patients are stored in `data/patients.json`.
- Passwords are stored as PBKDF2 hashes, never plaintext.
- Sessions are held in memory and expire after eight hours.
- Admin authorization is enforced on the server, not only in the browser.
- Do not store real health records in this JSON development backend.

## Adding an endpoint

1. Add the route in `handleApi` in `server.js`.
2. Validate request body types, lengths, and required fields.
3. Check authentication with `requireUser` or `requireAdmin`.
4. Return consistent status codes and `{ message }` errors.
5. Update [ARCHITECTURE.yml](./ARCHITECTURE.yml).
6. Update the frontend guide if a browser script consumes it.
7. Test both authorized and unauthorized requests.
