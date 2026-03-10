# Code Planner Agent

## Overview

Code Planner Agent generates phased implementation prompts using a 6-phase pipeline. It is ideal when a team wants coding agents or engineers to work from a structured implementation plan instead of vague requirements.

## What this agent does

- creates detailed prompts per implementation phase
- structures engineering work before coding begins
- makes downstream delegation more consistent
- improves clarity across UI, service, data, integration, and exception handling work

## Workflow position

This is usually the **fourth agent** in the chain.

### Recommended order

1. Knowledge Summarization Agent
2. JIRA User-Story Generator
3. SRD Generator
4. **Code Planner Agent**
5. coding work
6. Code Documenter / Code Reviewer

## Recommended chaining

### Best previous agent

- **SRD Generator**

### Common next steps

- coding agents or developers
- **Code Documenter**
- **Code Reviewer**

### What to pass forward

- detailed prompts per phase
- implementation order
- responsibilities by layer
- assumptions and constraints
- exception-handling requirements

## Inputs

- stories
- SRD / PDR
- tickets in `.md` format

## Outputs

- detailed prompts per phase

## Coverage / Scope

The 6-phase pipeline includes:

1. UI Component
2. UI Service
3. Business Service
4. Data Service
5. Integration Service
6. Exception Handling

It aligns with the **AGENTS.md LOE pipeline**.

## Invocation

Use this agent through:

- IDE Plugin
- Continue.dev
- EncoraGPT

## Notes / Validation

- validated with GPT-4o
- quality is strongly tied to SRD completeness
- best used before delegating to coding agents

## When to use

Use this agent when:

- planning non-trivial implementation work
- preparing a feature for coding agents
- creating structured engineering handoff prompts
- reducing ambiguity across multiple technical layers

## When NOT to use

Avoid using this agent when:

- the change is a very small fix
- the work is trivial and does not need phased planning
- the SRD is too incomplete to support decomposition

## Business value

- improves implementation structure
- increases handoff clarity
- reduces prompt-writing effort for coding work
- makes engineering flow more repeatable

## Known limitations

- weak SRD input leads to weak phase prompts
- not necessary for very small changes
- still benefits from human review before large implementation work begins

## Suggested adoption metric

- **% features following 6-phase pipeline**

## What good output looks like

A strong output should give teams one usable prompt for each phase, not a vague summary.

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate phased implementation prompts for this feature using the 6-phase pipeline.
```

### Prompt 2 — Full 6-phase planner

```txt
Use the attached SRD and generate detailed implementation prompts for these phases:
1. UI Component
2. UI Service
3. Business Service
4. Data Service
5. Integration Service
6. Exception Handling
For each phase include objective, responsibilities, input dependencies, expected output, and implementation notes.
```

### Prompt 3 — Coding-agent handoff prompt

```txt
Create implementation prompts that can be given directly to coding agents.
Each prompt should be specific, scoped, and written so that the next engineering step is obvious.
```

### Prompt 4 — Backend-heavy planning prompt

```txt
Generate phased prompts for this backend-focused feature.
Put extra emphasis on business service boundaries, data access responsibilities, integrations, and error handling.
```

### Prompt 5 — Frontend-heavy planning prompt

```txt
Generate phased prompts for this UI-focused feature.
Clarify component responsibilities, UI service orchestration, state handling, API interaction points, and error states.
```

### Prompt 6 — Dependency-aware planning prompt

```txt
Create a phased implementation plan and explicitly call out dependencies between phases, prerequisites, and any parts that should not begin until a prior phase is complete.
```

### Prompt 7 — Strict output prompt

```txt
Return the implementation plan in this format for each phase:
- Phase name
- Goal
- Inputs required
- Work to perform
- Risks / assumptions
- Expected output
- Ready-for-review checklist
```

### Prompt 8 — Chaining prompt to Code Reviewer

```txt
Generate implementation prompts and also provide a review checklist that can later be used by the Code Reviewer to validate the completed work against the original plan.
```

## Example handoff prompt to the next step

```txt
The implementation was created from the attached Code Planner Agent output.
Review the resulting code against the planned phase responsibilities, architecture assumptions, and exception-handling expectations.
```

## Best practices

- use it after SRD generation, not before
- keep feature scope clean and specific
- ask for one prompt per phase, not one giant implementation blob
- carry assumptions forward into review and documentation steps
