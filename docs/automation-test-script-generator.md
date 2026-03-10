# Automation Test Script Generator

## Overview

Automation Test Script Generator creates automation scripts from approved test cases and the selected framework. In the current MVP, the main supported path is Selenium in Java.

## What this agent does

- converts test cases into executable automation code
- accelerates automation backlog work
- creates a bridge between QA design and engineering execution
- can be paired directly with Test Case Generator and Test Data Generator

## Workflow position

This agent usually comes **after test cases are approved** and preferably after synthetic data is prepared.

### Typical order

1. Test Case Generator
2. Test Data Generator *(recommended)*
3. **Automation Test Script Generator**
4. Build Script Generator

## Recommended chaining

### Best previous agents

- **Test Case Generator**
- **Test Data Generator**

### Best next agents

- **Build Script Generator**
- manual review by QA automation engineers

### What to pass forward

- automation code
- reusable helpers or script structure
- setup and assertion notes
- framework-specific conventions

## Inputs

- test cases
- framework
- implementation context

## Outputs

- automation code
- download link or downloadable output

## Coverage / Scope

Current MVP support:

- Selenium in Java

## Invocation

Use this agent through:

- IDE Plugin
- EncoraGPT
- IDE UI

## Notes / Validation

- can orchestrate with Test Case Generator
- framework support is currently limited
- best results come from approved and specific test cases

## When to use

Use this agent when:

- accelerating automation backlog delivery
- converting approved tests into scripts
- building initial regression or smoke automation assets
- reducing repetitive scripting effort

## When NOT to use

Avoid using this agent when:

- the framework is not supported
- the test cases are incomplete or ambiguous
- the team expects output for a stack outside the current MVP scope

## Business value

- accelerates automation development
- reduces manual scripting effort
- helps QA scale more quickly
- improves handoff from test design to executable assets

## Known limitations

- currently Selenium in Java only
- output may need cleanup for framework conventions
- depends on the structure and quality of the input test cases

## Suggested adoption metric

- **% automation scripts generated with AIVA**

## What good output looks like

A strong result should include:

- setup / initialization logic
- clear test flow
- assertions aligned to expected results
- maintainable method naming and structure

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate Selenium Java automation scripts for these test cases, including setup, execution flow, and assertions.
```

### Prompt 2 — Reusable automation prompt

```txt
Generate Selenium Java automation scripts using a reusable structure.
Prefer maintainable methods, clear assertions, readable naming, and minimal duplication.
```

### Prompt 3 — Smoke suite prompt

```txt
Generate automation scripts for these high-priority smoke test cases.
Optimize for reliability, readable structure, and fast execution.
```

### Prompt 4 — Regression suite prompt

```txt
Generate automation scripts for this regression set.
Group related scenarios logically and keep setup, data usage, and assertions consistent across cases.
```

### Prompt 5 — Data-aware prompt

```txt
Use these approved test cases and synthetic test data to generate Selenium Java scripts.
Map the generated data clearly to each case and keep the code easy to update.
```

### Prompt 6 — Strict output prompt

```txt
Generate automation code and return:
1. test class name
2. reusable setup notes
3. test methods
4. assertions used
5. dependencies / assumptions
```

### Prompt 7 — Framework limitation-safe prompt

```txt
Generate Selenium Java automation only.
If any requested behavior falls outside that framework or requires missing implementation detail, flag it explicitly instead of guessing.
```

### Prompt 8 — Chaining prompt to Build Script Generator

```txt
Generate Selenium Java automation scripts and include any build or execution assumptions that should be considered when creating the Jenkinsfile in the next step.
```

## Example handoff prompt to the next step

```txt
Use the attached Selenium Java automation assets and repository files to generate a Jenkinsfile that validates, builds, tests, and deploys in the correct order without inventing unsupported steps.
```

## Best practices

- use only approved test cases
- keep framework selection explicit
- validate selectors, waits, and assertions before execution
- pass build assumptions into the CI/CD step
