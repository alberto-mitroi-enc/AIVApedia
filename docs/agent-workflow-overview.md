# Agent Workflow Overview

## Why this page exists

Most users do **not** struggle with the agent names. They struggle with two things:

1. deciding **which agent to use first**
2. writing a **good enough prompt** to get usable output

This guide fixes both problems by showing the recommended chaining order and the handoff data that should move from one agent to the next.

## Recommended default chain

For a typical product or feature flow, use this sequence:

1. **Knowledge Summarization Agent**
2. **JIRA User-Story Generator**
3. **SRD Generator**
4. **Code Planner Agent**
5. **Code Documenter** *(optional during implementation, highly useful after first draft)*
6. **Code Reviewer**
7. **Test Case Generator**
8. **Test Data Generator**
9. **Automation Test Script Generator**
10. **Build Script Generator**
11. **Project Status Reporter**

## Short version of the workflow

### Step 1 — Understand the source material
Start with **Knowledge Summarization Agent** when you have documents, PDFs, requirement decks, notes, screenshots, audio, or mixed project material.

**Goal:** create one trustworthy summary before anyone starts generating stories or technical plans.

### Step 2 — Convert business intent into backlog items
Pass the summary into **JIRA User-Story Generator**.

**Goal:** break broad requirements into small, testable stories with Definition of Done.

### Step 3 — Convert backlog into technical plan
Pass the approved stories into **SRD Generator**.

**Goal:** create a phased technical plan covering UI, services, data, and integrations.

### Step 4 — Prepare engineering execution
Pass the SRD into **Code Planner Agent**.

**Goal:** create detailed implementation prompts across the 6-phase pipeline.

### Step 5 — Document implementation while it is still fresh
Use **Code Documenter** on files, modules, or repos that are changing fast.

**Goal:** avoid the documentation gap that usually appears right after implementation.

### Step 6 — Review code before merge
Use **Code Reviewer** on the changed code or PR.

**Goal:** catch quality problems, architectural drift, validation gaps, and maintainability issues before merge.

### Step 7 — Convert requirements into validation assets
Use **Test Case Generator** from requirements, stories, screenshots, or refined acceptance criteria.

**Goal:** create structured test coverage.

### Step 8 — Generate realistic data for those tests
Use **Test Data Generator** after test cases are available.

**Goal:** prepare positive, negative, and boundary-value data.

### Step 9 — Convert approved test cases into automation
Use **Automation Test Script Generator** with the selected framework.

**Goal:** accelerate automation backlog execution.

### Step 10 — Standardize CI/CD
Use **Build Script Generator** after the repository structure is stable enough.

**Goal:** generate a Jenkinsfile that follows repo reality, not invented assumptions.

### Step 11 — Communicate delivery clearly
Use **Project Status Reporter** near sprint close or in recurring reporting windows.

**Goal:** produce stakeholder-facing HTML status reports from Jira data.

## Recommended handoff map

| Current agent | What to pass forward | Next recommended agent |
|---|---|---|
| Knowledge Summarization Agent | executive brief, assumptions, open questions, risks | JIRA User-Story Generator |
| JIRA User-Story Generator | refined stories, DoD, edge cases | SRD Generator |
| SRD Generator | phased technical plan, stack assumptions, integration notes | Code Planner Agent |
| Code Planner Agent | implementation prompts by phase | coding work, then Code Documenter / Code Reviewer |
| Code Documenter | generated technical explanations | onboarding, codebase maintenance, Project Status Reporter context |
| Code Reviewer | review findings, defects, refactor suggestions | engineering fix cycle, then retest |
| Test Case Generator | structured test cases | Test Data Generator, Automation Test Script Generator |
| Test Data Generator | synthetic datasets | manual QA and automation execution |
| Automation Test Script Generator | automation code | CI/CD setup with Build Script Generator |
| Build Script Generator | Jenkinsfile | pipeline execution and delivery readiness |
| Project Status Reporter | HTML status report | stakeholder communication |

## Recommended paths by scenario

### Scenario A — New feature from messy source material
1. Knowledge Summarization Agent
2. JIRA User-Story Generator
3. SRD Generator
4. Code Planner Agent
5. Test Case Generator
6. Test Data Generator
7. Automation Test Script Generator
8. Build Script Generator
9. Project Status Reporter

### Scenario B — Existing code needs quality and docs
1. Code Documenter
2. Code Reviewer
3. Test Case Generator
4. Test Data Generator
5. Project Status Reporter

### Scenario C — Sprint reporting only
1. Project Status Reporter

### Scenario D — QA acceleration only
1. Test Case Generator
2. Test Data Generator
3. Automation Test Script Generator

## Prompting rules that improve results

- Always mention the **goal**, not only the input.
- Tell the agent what the **output format** should be.
- Include the **technology stack** when relevant.
- Include **business context** when asking for stories or tests.
- Ask the agent to point out **missing information** instead of silently guessing.
- When chaining agents, explicitly mention that the input comes from the prior agent.

## Copy-ready workflow prompt

```txt
I want to use AIVA as a workflow, not as isolated agents.
Start by analyzing the attached material and tell me:
1. which agent should run first
2. which output should be produced at each step
3. what exact prompt I should use for the next step
4. what information is missing before I continue

Assume I want the cleanest end-to-end path from raw requirements to implementation, testing, and reporting.
```

## Anti-patterns to avoid

- Starting with **SRD Generator** before stories are refined
- Starting with **Automation Test Script Generator** before test cases are approved
- Using **Code Reviewer** on tiny formatting-only changes with strong linters already in place
- Using **Build Script Generator** on an incomplete or dirty repository
- Using **Project Status Reporter** when Jira data is stale or partially maintained

## What to tell new users

If a user says *"I do not know what to ask"*, tell them to start with these three docs:

1. **Agent Workflow Overview**
2. **Prompt Engineering Playbook**
3. the first agent they want to run

That usually removes the biggest blocker: blank-page prompt writing.
