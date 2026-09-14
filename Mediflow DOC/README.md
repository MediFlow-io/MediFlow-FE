# MediFlow Documentation

This folder is the change guide for the current MediFlow checkout. Read this
file first, then the area-specific document:

- [Frontend guide](./FRONTEND.md)
- [Backend guide](./BACKEND.md)
- [AI guide](./AI.md)
- [Architecture and API map](./ARCHITECTURE.yml)
- [Change checklist](./CHANGE-CHECKLIST.md)

## Current repository reality

This checkout currently contains a browser frontend and a small Node.js
development backend in `FE/FUTA Health Centre Project`. The larger MediFlow
microservices described in the root project README (Django, Go, Flask,
FastAPI, and Laravel) are not present in this checkout yet.

Do not add a second server or duplicate API contract without first updating
`ARCHITECTURE.yml` and the backend guide.

## Quick start

```powershell
cd "FE\FUTA Health Centre Project"
$env:SESSION_SECRET = "replace-with-a-long-random-secret"
$env:ADMIN_PASSWORD = "replace-with-a-secure-admin-password"
npm start
```

Open `http://localhost:3000`.

The local server creates the initial admin user on first start. Local
development records are stored in `FE/FUTA Health Centre Project/data`.
Never commit real patient data, credentials, or production secrets.
