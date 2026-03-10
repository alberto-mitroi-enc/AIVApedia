# JIRA User-Story Generator

## Overview

JIRA User-Story Generator transforms broad requirements into small, testable user stories. It is one of the most important bridging agents because it converts vague business language into planning-ready work items.

## What this agent does

- breaks broad requirements into smaller stories
- creates planning-ready backlog items
- includes Definition of Done
- includes happy path, edge cases, and security-related scenarios such as 401 and 403 handling
- helps teams move from problem statements to actionable delivery units

## Workflow position

This is usually the **second agent** in the chain.

### Recommended order

1. Knowledge Summarization Agent
2. **JIRA User-Story Generator**
3. SRD Generator

## Recommended chaining

### Best previous agent

- **Knowledge Summarization Agent**

### Best next agent

- **SRD Generator**

### What to pass forward

- refined user stories
- acceptance intent
- Definition of Done
- edge cases
- security scenarios
- sprint or release context

## Inputs

- requirements
- sprint metadata
- optional summary from prior agent

## Outputs

- user stories
- Definition of Done
- planning-ready story breakdown

## Coverage / Scope

The output considers:

- happy path
- edge cases
- 401 / 403 security-related scenarios

## Invocation

Use this agent through:

- EncoraGPT

## Notes / Validation

- ready for planning and reporting
- performs best when business context is explicit
- story quality depends on the quality of original requirements

## When to use

Use this agent when:

- refining backlog items
- preparing for sprint planning
- converting broad requirements into smaller units
- improving the testability of planned work

## When NOT to use

Avoid using this agent when:

- business context is missing
- the feature intent is still unresolved
- stakeholders have not aligned on scope boundaries

## Business value

- improves planning quality
- creates smaller, more testable units of work
- helps estimation discussions
- supports better reporting and handoff to technical planning

## Known limitations

- depends on the quality of original requirements
- may need PO / BA review before planning
- cannot fully resolve missing business decisions on its own

## Suggested adoption metric

- **# stories generated per sprint**

## What good output looks like

A strong result should include:

- one story per coherent unit of value
- Definition of Done
- acceptance criteria or equivalent testable checks
- edge cases
- dependencies or sequencing notes when relevant

## Prompt Library

### Prompt 1 — Quick start

```txt
Transform these requirements into small, testable Jira user stories with Definition of Done.
```

### Prompt 2 — Story generation from summary output

```txt
Use the attached project summary to generate Jira stories.
Return stories that are small, clear, and testable.
For each story include:
- title
- user story statement
- short description
- Definition of Done
- happy path notes
- edge cases
- 401/403 security considerations where relevant
```

### Prompt 3 — Backlog refinement prompt

```txt
Convert these broad requirements into backlog-ready Jira stories for a refinement session.
Keep each story independently understandable, estimable, and testable.
Also identify stories that appear too large and should be split.
```

### Prompt 4 — Sprint-scoped prompt

```txt
Generate Jira stories from these requirements for the next sprint.
Prioritize implementation-ready stories, note dependencies, and identify anything that should be deferred because it is too vague or too large.
```

### Prompt 5 — Security-aware prompt

```txt
Generate user stories from these requirements and explicitly include security-related considerations, especially 401 and 403 access patterns, authorization boundaries, and invalid-user flows where relevant.
```

### Prompt 6 — Strong format prompt

```txt
Generate Jira stories and return them in this format:
1. Story title
2. User story statement
3. Why it matters
4. Acceptance checks
5. Definition of Done
6. Dependencies
7. Risks / missing information
```

### Prompt 7 — Split oversized requirements

```txt
Review these requirements and split them into the smallest useful Jira stories possible without losing business meaning.
Flag any requirement that still remains too large after decomposition.
```

### Prompt 8 — Chaining prompt to SRD Generator

```txt
Generate final user stories that are ready to be passed directly into the SRD Generator.
Structure them so the next agent can easily derive UI scope, services, data requirements, integration points, and technical constraints.
```

## Example handoff prompt to the next step

```txt
Use the attached Jira stories as input for the SRD Generator.
Create a phased technical plan across UI, services, data, and integrations, preserving Definition of Done, assumptions, and dependencies.
```

## Best practices

- include business goals, not only feature bullets
- keep stories small enough to estimate
- explicitly carry edge cases into the output
- include release or sprint context when useful
- pass unresolved questions forward to the SRD step
