# Code Documenter

## Overview

Code Documenter generates consistent technical documentation from files or full repositories. It is especially useful for legacy codebases, onboarding, and reducing documentation gaps after implementation work.

## What this agent does

- generates technical documentation from code
- explains modules, files, and major logic paths
- improves onboarding for new developers
- helps maintain consistency in repository documentation

## Workflow position

This agent is often used **after implementation starts** or when documenting an existing system.

### Common places in the chain

- after Code Planner Agent and coding work
- before or after Code Reviewer
- independently for legacy repositories

## Recommended chaining

### Good previous inputs

- implementation output from coding work
- repository source code
- module or service files

### Best next agents

- **Code Reviewer**
- **Project Status Reporter** for progress context
- human onboarding / documentation workflows

### What to pass forward

- generated technical explanations
- module summaries
- README content
- maintenance notes
- known risks and complexity hotspots

## Inputs

- source code
- file or repository content

## Outputs

- formatted text documentation per language standard

## Coverage / Scope

Supported technologies include:

- Java
- Python
- .NET / C#
- JavaScript
- Node.js
- React
- TypeScript

## Invocation

Use this agent through:

- IDE Plugin
- EncoraGPT

## Notes / Validation

- validated with OpenAI models
- quality depends on code clarity
- best results come from repositories with meaningful names and stable structure

## When to use

Use this agent when:

- documenting a legacy codebase
- preparing onboarding material
- filling documentation gaps
- creating repository or service summaries

## When NOT to use

Avoid using this agent when:

- the code is a throwaway prototype
- the implementation is changing too fast to document meaningfully
- the repository structure is too incomplete to explain reliably

## Business value

- improves maintainability
- speeds up onboarding
- reduces documentation effort
- helps teams scale knowledge transfer

## Known limitations

- documentation quality depends on code clarity
- poor naming and weak structure reduce usefulness
- still benefits from human validation on critical systems

## Suggested adoption metric

- **% repos documented using AIVA**

## What good output looks like

A strong result should help a new developer understand:

- what the module does
- how it fits into the system
- what the key dependencies are
- what risks or complexity areas deserve extra attention

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate technical documentation for this code, including purpose, main logic, dependencies, and usage notes.
```

### Prompt 2 — Repository documentation prompt

```txt
Generate documentation for this repository.
Explain the overall purpose, the responsibility of each major module, key flows, important dependencies, and what a new developer should understand before making changes.
```

### Prompt 3 — Legacy code onboarding prompt

```txt
Document this legacy codebase in a way that helps onboarding.
Focus on the role of each module, system structure, and the parts that may be risky, fragile, or hard to maintain.
```

### Prompt 4 — File-level explanation prompt

```txt
Generate documentation for this file using these sections:
1. File purpose
2. Main classes / functions
3. Inputs and outputs
4. Key logic decisions
5. Dependencies
6. Risks / notes
```

### Prompt 5 — README generation prompt

```txt
Create a README for this service including overview, setup notes, folder structure, key flows, dependencies, and maintenance considerations.
```

### Prompt 6 — Strict engineering style prompt

```txt
Generate documentation in a concise engineering style.
Use these sections only:
- Overview
- Responsibilities
- Key flows
- Dependencies
- Risks / Notes
- Maintenance considerations
```

### Prompt 7 — Documentation gap finder

```txt
Review this repository and generate documentation, but first identify the most important documentation gaps and knowledge risks that a new maintainer would face.
```

### Prompt 8 — Chaining prompt to Code Reviewer

```txt
Generate module-level documentation for this code and also create a short review checklist that the Code Reviewer can later use to verify whether the implementation matches the documented intent.
```

## Example handoff prompt to the next step

```txt
Use the attached documentation and source code to review whether the implementation is consistent, maintainable, and aligned with the documented module responsibilities.
```

## Best practices

- run it on stable code, not volatile drafts
- document key modules first in very large repos
- use generated docs to improve onboarding material
- pair repository docs with later code review for stronger quality control
