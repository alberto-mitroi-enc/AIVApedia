# AIVApedia – Composable AI Agent Documentation Hub

AIVApedia is a lightweight documentation portal designed to help engineering teams understand, test, and adopt the AIVA composable AI agent ecosystem.

The platform provides structured documentation for each specialized agent involved in the Software Development Life Cycle (SDLC), including usage guidance, chaining workflows, prompt libraries, and best practices.

---

## 🚀 Purpose

AIVApedia helps teams:

- Understand what each AI agent does
- Learn when and how to use agents in real workflows
- Reuse high-quality prompt engineering patterns
- Reduce onboarding friction for new users
- Accelerate internal adoption of AIVA capabilities
- Provide a central knowledge hub for agentic delivery

---

## 🧠 Agent Workflow Coverage

The documentation includes agents supporting:

- Knowledge discovery and summarization
- Requirements refinement and story generation
- Technical planning and implementation orchestration
- Code documentation and quality review
- Test design, automation, and data generation
- CI/CD pipeline creation
- Executive reporting and delivery tracking

Each agent page contains:

- Overview
- Inputs / Outputs
- Usage guidance
- When to use / when not to use
- Business value
- Known limitations
- Recommended chaining with other agents
- Prompt Library with ready-to-use prompts

---

## 📁 Project Structure

/
index.html → Main landing page (AIVApedia home)
docs.css → Global documentation styling
docs.js → Markdown rendering + TOC logic
docs-data.js → Agent metadata + navigation
shared.js → Shared navbar logic

/html
docs.html → Documentation experience layout

/docs
\*.md → Individual agent documentation pages

---

## 🖥️ Local Development

No build step is required.

Simply open:

index.html

in a browser or run a lightweight local server.

Example using VS Code Live Server or:

npx serve .

---

## 🌐 Deployment (GitHub Pages)

This site is designed to be deployed as a static site.

### Steps

1. Push the repository to GitHub
2. Go to **Repository Settings → Pages**
3. Select:

Deploy from branch
Branch: main
Folder: / (root)

4. Access the site at:

https://<your-username>.github.io/<repo-name>/

---

## 🧩 Key Features

- Sidebar navigation across all agents
- Dynamic Markdown rendering
- Dual Table of Contents (Content + Prompt Library)
- Copy-to-clipboard prompt blocks
- Agent workflow chaining guidance
- Responsive layout optimized for internal documentation
- Lightweight, framework-free architecture

---

## ✍️ Contributing

When adding a new agent:

1. Create a new `.md` file inside `/docs`
2. Add metadata entry in `docs-data.js`
3. Follow the standard documentation structure:

Overview
What this agent does
Workflow position
Recommended chaining
Inputs
Outputs
Prompt Library
Best practices

---

## 📌 Recommended Improvements (Future)

- Sidebar search
- Scroll-spy TOC highlighting
- Prompt tagging (Quick / Advanced / Chain)
- Agent category grouping
- Analytics for documentation usage
- Versioned documentation

---

## 📄 License

Internal usage – Encora AIVA documentation ecosystem.
