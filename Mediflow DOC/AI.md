# MediFlow AI Guide

## Current implementation

The current AI layer is a safe, built-in rule-based responder in:

```text
FE/FUTA Health Centre Project/server.js
```

`aiAnswer(question)` matches basic terms such as bleeding, cut, burn,
choking, fainting, and unconsciousness. It returns general first-aid guidance
and a medical disclaimer. It is not a diagnosis or a replacement for a
clinician.

The browser integrations are:

- `ai-assistant.js`: inline AI help on the public page and dashboard.
- `ai-widget.js`: authenticated bottom-right “AI help” notification box.

Both send:

```http
POST /api/ai/ask
Content-Type: application/json

{ "question": "What should I do for a burn?" }
```

Successful response:

```json
{ "answer": "General first-aid guidance..." }
```

## Replacing the built-in responder

When a real AI service is ready:

1. Keep `/api/ai/ask` as the browser-facing contract.
2. Add a server-side client in `server.js` or, preferably, a dedicated AI
   service module.
3. Keep provider keys server-side in environment variables.
4. Set request timeouts, input limits, rate limits, and audit logging.
5. Never send unnecessary patient identifiers or full medical records.
6. Treat model output as decision support only.
7. Preserve the disclaimer and emergency escalation wording.
8. Update `ARCHITECTURE.yml` with the provider/service boundary.

## Recommended future AI service

The root project README describes a future FastAPI inference service. When it
exists, the Node/Django gateway should authenticate the caller, validate the
request, call FastAPI over a private network, and return a stable response to
the browser. The browser must not call the model provider directly.

## AI change checklist

- Does the answer avoid diagnosis and certainty claims?
- Does it recommend emergency services for urgent symptoms?
- Are prompts and responses length-limited?
- Are secrets kept out of HTML, JavaScript, and git?
- Are failures shown clearly without pretending that an answer was generated?
- Were the widget and inline assistant both tested?
