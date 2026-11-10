# auth.md

## Overview
This website (https://kishanm.me) is a public developer portfolio and technical showcase.

## Agent Registration Instructions
- **Registration Endpoint**: Automated agents can register or declare presence at `https://kishanm.me/api/agent/register` (refer to the OAuth metadata at `/.well-known/oauth-authorization-server`).
- **Identity Types**: Anonymous querying and standard agent identities (`supported_identity_types: ["anonymous", "agent_id"]`) are supported.
- **Credential Types**: Bearer tokens (`bearer_token`).
- **Authorization Server**: `https://kishanm.me` (Discovery metadata published at `/.well-known/oauth-authorization-server` and `/.well-known/openid-configuration`).
- **Resource Identifier**: `https://kishanm.me` (Resource metadata published at `/.well-known/oauth-protected-resource`).

## Public Access & Rate Limiting
- All public pages (`/`, `/education`, `/experience`, `/projects`, `/achievements`, `/contact`) are readable without credentials.
- Machine-readable context files (`/llms.txt`, `/llms-full.txt`, `/.well-known/*`) have an open policy (`Access-Control-Allow-Origin: *`).
- Contact and partnership inquiries: `kishanmpatil1@gmail.com`.
