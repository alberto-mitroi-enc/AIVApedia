# Build Script Generator (Jenkinsfile)

## Overview

Build Script Generator creates production-ready Jenkinsfiles based strictly on the repository files that actually exist. It is useful when teams want a practical CI/CD starting point without hallucinated pipeline steps.

## What this agent does

- analyzes repository files
- generates a Jenkinsfile based on real project structure
- follows validate → build → test → deploy order
- avoids inventing unsupported stages

## Workflow position

This usually comes **after implementation and test automation assets are clear enough**.

### Typical order

1. coding work
2. Code Reviewer
3. Automation Test Script Generator *(if applicable)*
4. **Build Script Generator**
5. Project Status Reporter

## Recommended chaining

### Good previous inputs

- repository files
- build files such as `pom.xml`, `requirements.txt`, or similar indicators
- automation testing assumptions from the previous step

### Best next agents

- CI/CD review and execution
- **Project Status Reporter**

### What to pass forward

- Jenkinsfile
- pipeline assumptions
- execution order
- build / test / deploy notes

## Inputs

- repository files
- build-related files such as:
  - `pom.xml`
  - `requirements.txt`
  - other repo indicators

## Outputs

- Jenkinsfile

## Coverage / Scope

Generated pipeline order:

1. Validate
2. Build
3. Test
4. Deploy

## Invocation

Use this agent through:

- EncoraGPT
- IDE Plugin

## Notes / Validation

- avoids hallucinated steps
- best suited for Jenkins environments
- requires a repository with a recognizable structure

## When to use

Use this agent when:

- setting up CI/CD for a repository
- standardizing Jenkins pipelines
- accelerating pipeline authoring
- reducing manual setup effort

## When NOT to use

Avoid using this agent when:

- the environment is not Jenkins-based
- the repository is incomplete
- build structure is unclear or inconsistent

## Business value

- standardizes deployment process
- reduces CI/CD setup effort
- improves repeatability
- helps teams move faster toward automated delivery

## Known limitations

- requires clean repository structure
- limited to Jenkins-oriented output
- depends on the presence of correct build-relevant files

## Suggested adoption metric

- **% repos with generated Jenkinsfile**

## What good output looks like

A strong output should:

- match repository reality
- avoid invented tools or stages
- include sensible ordering
- be easy for a DevOps engineer to review and refine

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate a production-ready Jenkinsfile for this repository based strictly on the existing build and dependency files.
```

### Prompt 2 — Standard pipeline prompt

```txt
Generate a Jenkinsfile for this repository using the following order:
1. validate
2. build
3. test
4. deploy
Only use steps that are supported by the files present in the repository.
```

### Prompt 3 — Conservative prompt

```txt
Create a Jenkinsfile conservatively.
Do not invent tools, stages, or commands that are not supported by the repository files.
If something required for the pipeline is missing, flag it explicitly.
```

### Prompt 4 — Automation-aware prompt

```txt
Generate a Jenkinsfile for this repository and consider the attached Selenium Java automation assets when deciding how tests should be executed.
Do not invent test commands that are not grounded in the repo.
```

### Prompt 5 — Pipeline standardization prompt

```txt
Generate a Jenkinsfile that follows our standard order of validate, build, test, and deploy while staying faithful to the repository files and dependencies.
```

### Prompt 6 — Strict output prompt

```txt
Generate a Jenkinsfile and also provide:
1. detected build system
2. detected test strategy
3. assumptions made
4. missing repository elements, if any
```

### Prompt 7 — Review-before-use prompt

```txt
Generate a Jenkinsfile and annotate any stage that should be manually reviewed before production usage, especially deploy-related commands and environment assumptions.
```

### Prompt 8 — Chaining prompt to Project Status Reporter

```txt
Generate a Jenkinsfile and provide a short delivery-readiness summary that can later be referenced in a project status report.
Include major assumptions, blockers, and what is now standardized.
```

## Example handoff prompt to the next step

```txt
Use the attached Jira data, implementation progress, and CI/CD readiness notes to generate an HTML project status report for stakeholders.
```

## Best practices

- clean the repository before generation
- make build tooling explicit in repo files
- review deploy stages carefully before production use
- treat the generated Jenkinsfile as a strong starting point, not a blind final artifact
