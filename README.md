<div align="center">

# ops → ai

### The free learning path from Operations to AI Engineering

**For DevOps, SRE, and Platform Engineers who want to learn AI — with real code, in Go, no paywall.**

[🌐 Live Site](https://opstoai.com) · [🗺️ Roadmap](https://opstoai.com/roadmap) · [📝 Blog](https://opstoai.com/blog)

</div>

---

## Why this exists

Every DevOps, SRE, and Platform engineer is being asked the same question: *where do I start with AI?*

The problem is that every AI course assumes you're a Python data scientist. Nothing speaks to the engineer who lives in Kubernetes, Go, and bash — who wants to use AI in production, not in a notebook.

**ops → ai** is the bridge. Free, project-based courses that respect what you already know and show you exactly what's new.

---

## What's inside

| Course | What you'll learn | Status |
|--------|-------------------|--------|
| **AI for DevOps Engineers** | LLMs, RAG, AI Agents, MCP, AIOps — then build InfraBot, a real AI agent in Go | ✅ Live |
| **OpenShift — Beginner to Advanced** | Architecture, oc CLI, deployments, RBAC, Operators, GitOps, cluster admin | ✅ Live |
| Kubernetes Deep Dive | Production K8s for platform teams | 🔜 Coming |
| CI/CD with GitHub Actions | Pipeline-as-code from scratch | 🔜 Coming |
| Observability | Prometheus, Grafana, Loki, OpenTelemetry | 🔜 Coming |
| Terraform / OpenTofu | Infrastructure as Code | 🔜 Coming |

Plus an **interactive roadmap** with progress tracking, a **community blog**, and a **"What's New" learning feed**.

---

## Tech stack

This whole platform is intentionally simple — pure web fundamentals, no build step:

- **HTML / CSS / vanilla JavaScript** — no framework, no bundler
- **GSAP + Lenis** — smooth, Apple-style animations (desktop)
- **Supabase** — Postgres database, GitHub auth, progress tracking, blog
- **Netlify** — free static hosting with CI/CD from this repo

It's a [JAMstack](https://jamstack.org/) approach: fast, free to host, and scales effortlessly.

---

## Running it locally

```bash
# Clone the repo
git clone https://github.com/rahulagrawal0796/ops-to-ai.git
cd ops-to-ai

# Serve it with any static server
python3 -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000`.

To enable the blog and progress tracking, add your Supabase credentials to `config.js`.

---

## Contributing

This is built in public and free forever. If a guide helped you, share it with someone else who needs it.

Found a bug or have an idea? Open an issue.

---

<div align="center">

**Built with care for the Ops community.** Free, forever.

</div>
