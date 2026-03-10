# Code Reviewer

## Overview

Code Reviewer reviews code using configurable quality guidelines and provides actionable feedback. It is best used before PR merge, after refactors, and after meaningful implementation work.

## What this agent does

- reviews source code against expected quality standards
- highlights maintainability, readability, correctness, and quality concerns
- identifies risky changes before merge
- produces text feedback with actionable observations

## Workflow position

This agent is usually used **after coding work** and often after Code Planner Agent guidance has already been applied.

### Common order

1. Code Planner Agent
2. coding work
3. Code Documenter *(optional but useful)*
4. **Code Reviewer**
5. fix cycle
6. test generation or merge

## Recommended chaining

### Good previous inputs

- changed code or repository path
- implementation prompts from Code Planner Agent
- technical notes from Code Documenter

### Good next agents

- engineering fix cycle
- **Test Case Generator** for validation expansion
- **Project Status Reporter** for summary of delivery risks

### What to pass forward

- defects or concerns
- architecture drift notes
- validation gaps
- maintainability observations
- review checklist results

## Inputs

- code or GitHub repository path

## Outputs

- text review with observations

## Coverage / Scope

Supported technologies include:

- Java
- Python
- C# / .NET
- JavaScript
- Node.js
- React

## Invocation

Use this agent through:

- IDE Plugin
- Continue.dev
- EncoraGPT

## Notes / Validation

- validated with GPT-4o
- quality depends on provided context and review rules
- strongest results come when coding standards are explicit

## When to use

Use this agent when:

- reviewing a pull request before merge
- validating large refactors
- checking non-trivial code changes
- increasing consistency across teams

## When NOT to use

Avoid using this agent when:

- the change is formatting-only and linters already cover it
- no project context or standards are provided
- the change is too tiny to justify review overhead

## Business value

- reduces early defects
- lowers technical debt risk
- improves review consistency
- supports better engineering quality at scale

## Known limitations

- depends on provided context and rules
- does not replace final human approval on critical changes
- may miss business-intent issues if not enough context is supplied

## Suggested adoption metric

- **% PRs reviewed with AIVA**

## What good output looks like

A strong review should include:

- a prioritized list of issues
- clear reasoning
- suggested fixes or directions
- separation between critical and optional improvements

## Prompt Library

### Prompt 1 — Quick start

```txt
Review this code change and identify potential bugs, maintainability issues, missing validations, and readability problems.
```

### Prompt 2 — PR review prompt

```txt
Review this pull request using our engineering standards.
Focus on correctness, maintainability, security concerns, performance issues, and consistency with the existing architecture.
Return actionable feedback grouped by severity.
```

### Prompt 3 — Backend review prompt

```txt
Review this backend code for business-logic issues, validation gaps, service-boundary problems, error-handling weaknesses, and technical debt.
Suggest practical improvements.
```

### Prompt 4 — Frontend review prompt

```txt
Review this frontend implementation for component structure, state handling, UI consistency, accessibility concerns, API usage, and maintainability.
Highlight risky patterns and unnecessary complexity.
```

### Prompt 5 — Refactor validation prompt

```txt
Review this refactor and determine whether behavior appears preserved, responsibilities remain clear, and any complexity or hidden risk was introduced.
```

### Prompt 6 — Strict output format prompt

```txt
Review this code and return the result in the following format:
1. Critical issues
2. High-priority improvements
3. Medium-priority observations
4. Positive findings
5. Suggested next actions
Focus on code quality, correctness, architecture alignment, and maintainability.
```

### Prompt 7 — Review against planned implementation

```txt
Review this code against the attached Code Planner Agent output.
Check whether each phase responsibility appears implemented correctly and whether exception handling and integration boundaries are aligned with the original plan.
```

### Prompt 8 — Chaining prompt to Test Case Generator

```txt
Review this code and identify the most important risk areas that should immediately be turned into test cases.
At the end of the output, list the scenarios that the Test Case Generator should cover next.
```

## Example handoff prompt to the next step

```txt
Use the attached review findings and the changed code to generate test cases that cover the highest-risk areas, negative scenarios, and validation gaps identified during review.
```

## Best practices

- provide repository context, not only snippets
- include coding standards when possible
- use it before merge, not after release
- carry review findings into testing when the risk is meaningful
