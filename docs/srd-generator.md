# SRD Generator

## Overview

SRD Generator converts stories into a phased technical plan spanning UI, services, data, and integrations. It is the bridge between backlog language and engineering implementation planning.

## What this agent does

- transforms Jira stories into a structured technical plan
- creates an SRD document that coding agents can use
- clarifies architecture-aligned scope
- reduces ambiguity before implementation begins

## Workflow position

This is usually the **third agent** in the chain.

### Recommended order

1. Knowledge Summarization Agent
2. JIRA User-Story Generator
3. **SRD Generator**
4. Code Planner Agent

## Recommended chaining

### Best previous agent

- **JIRA User-Story Generator**

### Best next agent

- **Code Planner Agent**

### What to pass forward

- phased technical plan
- stack assumptions
- architecture constraints
- integration notes
- data model implications
- UI / service / integration boundaries

## Inputs

- stories or JIRA items
- stack information
- architecture context

## Outputs

- SRD document

## Coverage / Scope

The SRD can cover:

- UI
- services
- data
- integrations

It is designed to feed downstream coding agents.

## Invocation

Use this agent through:

- AIVA InCode Plugin

## Notes / Validation

- validated with GPT-4o
- precision improves significantly when the stack is defined
- works best after story refinement is already done

## When to use

Use this agent when:

- translating stories into technical scope
- aligning engineering on implementation direction
- preparing a handoff for coding agents
- reducing technical ambiguity before development

## When NOT to use

Avoid using this agent when:

- the stack is undefined
- architecture direction is still undecided
- stories are too vague to support technical planning

## Business value

- reduces ambiguity in technical planning
- improves engineering alignment
- accelerates downstream implementation preparation
- creates a stronger bridge between product and engineering

## Known limitations

- requires a defined stack for precision
- output quality depends on story quality and architecture context
- still benefits from review by engineering leads

## Suggested adoption metric

- **% stories converted to SRD**

## What good output looks like

A strong SRD should include:

- technical scope by layer
- assumptions and constraints
- integration points
- data implications
- implementation considerations for downstream coding work

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate an SRD from these Jira stories using our target stack and architecture context.
```

### Prompt 2 — Full phased technical plan

```txt
Convert these stories into a structured SRD.
Include:
1. feature overview
2. UI scope
3. service-layer responsibilities
4. data-layer considerations
5. integration points
6. assumptions and risks
7. implementation dependencies
```

### Prompt 3 — Stack-specific SRD

```txt
Generate an SRD for these stories using the following stack:
- frontend: React
- backend: Java Spring Boot
- database: PostgreSQL
- integrations: REST services
Preserve business intent while translating the work into technical scope.
```

### Prompt 4 — Architecture alignment prompt

```txt
Create an SRD that aligns with our current architecture.
Prefer separation of concerns, service boundaries, reusable data access, and clear integration contracts.
Flag any story that conflicts with these principles.
```

### Prompt 5 — Risk-aware prompt

```txt
Generate an SRD and explicitly highlight technical risks, unclear dependencies, missing decisions, and any assumptions that should be validated before implementation starts.
```

### Prompt 6 — Handoff-ready prompt for coding agents

```txt
Generate an SRD that is specifically optimized for downstream coding agents.
For each major capability, clarify UI, service, data, and integration responsibilities, plus any exception-handling considerations.
```

### Prompt 7 — Clarification-first prompt

```txt
Before generating the final SRD, identify the missing stack or architecture details that would materially affect technical planning.
If some details are missing but not blocking, continue with labeled assumptions.
```

### Prompt 8 — Chaining prompt to Code Planner Agent

```txt
Generate the SRD in a format that can be passed directly into the Code Planner Agent.
Make the output easy to split into the following phases: UI component, UI service, business service, data service, integration service, and exception handling.
```

## Example handoff prompt to the next step

```txt
Use the attached SRD as the source input.
Create detailed implementation prompts for each phase of the 6-phase pipeline and keep architecture assumptions, service boundaries, and integration notes intact.
```

## Best practices

- always include the target stack
- use approved stories, not draft requirements
- carry unresolved questions forward instead of hiding them
- review integration assumptions carefully
- treat the SRD as a delivery planning artifact, not a substitute for architecture governance
