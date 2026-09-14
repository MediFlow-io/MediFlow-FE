# MediFlow Change Checklist

## Before editing

- Read the relevant guide in this folder.
- Confirm whether the change is frontend, backend, AI, or cross-cutting.
- Check existing routes and scripts before adding new ones.
- Do not overwrite unrelated worktree changes.

## During editing

- Keep API request and response shapes documented.
- Validate user input on the server.
- Keep authorization server-side.
- Avoid logging passwords, session cookies, or patient details.
- Update the relevant guide and `ARCHITECTURE.yml`.

## Before handing over

```powershell
cd "FE\FUTA Health Centre Project"
Get-ChildItem -Recurse -Filter *.js | ForEach-Object { node --check $_.FullName }
git diff --check
npm start
```

Verify in a browser:

- Login and logout.
- Protected-page redirect when logged out.
- Admin-only student account creation.
- Patient create, edit, search, and delete.
- Bottom-right AI widget after login.
- AI service error handling.

For backend changes, also test an unauthorized request and an invalid input
request; both must fail safely with an appropriate HTTP status.
