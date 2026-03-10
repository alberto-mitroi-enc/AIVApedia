# Test Case Generator

## Overview

Test Case Generator creates structured test cases from requirements, summaries, stories, or screenshots. It is often the first QA-focused agent in the chain.

## What this agent does

- transforms requirements into test cases
- supports structured outputs such as Gherkin-like scenarios
- helps QA teams define coverage earlier
- improves consistency in validation planning

## Workflow position

This agent usually appears **after requirements or implementation are sufficiently clear**.

### Typical order

1. Knowledge Summarization Agent or JIRA User-Story Generator
2. SRD Generator *(optional depending on team process)*
3. **Test Case Generator**
4. Test Data Generator
5. Automation Test Script Generator

## Recommended chaining

### Best previous inputs

- requirements
- user stories
- screenshots
- review findings from Code Reviewer

### Best next agents

- **Test Data Generator**
- **Automation Test Script Generator**

### What to pass forward

- approved test cases
- edge scenarios
- preconditions
- expected results
- validation coverage plan

## Inputs

- requirements
- context in text and/or image form

## Outputs

- text test cases
- structured QA scenarios

## Coverage / Scope

- no external tools required
- can create cases from text or screenshots

## Invocation

Use this agent through:

- EncoraGPT

## Notes / Validation

- no memory refinement yet
- validated with OpenAI models
- output quality depends on requirement detail

## When to use

Use this agent when:

- refining requirements into QA coverage
- preparing test design
- creating validation assets from stories
- covering high-risk scenarios after code review

## When NOT to use

Avoid using this agent when:

- requirements are too vague
- acceptance criteria are missing
- the business flow is not yet understood

## Business value

- improves test coverage
- increases QA consistency
- reduces manual test design effort
- supports better validation handoff to automation

## Known limitations

- no memory/refinement capability yet
- weak requirements produce weak cases
- complex flows may still need manual QA enrichment

## Suggested adoption metric

- **# test cases generated per sprint**

## What good output looks like

A strong output should include:

- test title or ID
- preconditions
- steps
- expected result
- clear coverage of positive, negative, and edge cases

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate structured test cases from these requirements, including happy path, negative cases, and validation scenarios.
```

### Prompt 2 — Detailed QA coverage prompt

```txt
Create comprehensive test cases from these requirements.
Include:
- happy path
- negative scenarios
- boundary cases
- validation rules
- expected results
- preconditions where relevant
```

### Prompt 3 — Gherkin-style prompt

```txt
Generate Gherkin-style test cases from these requirements.
Include feature, scenario, given/when/then steps, and cover both positive and negative flows.
```

### Prompt 4 — Screenshot-based prompt

```txt
Based on these screenshots and requirement notes, generate structured test cases that cover UI behavior, validation, navigation flow, and likely user mistakes.
```

### Prompt 5 — Requirement refinement prompt

```txt
Generate QA-ready test cases from these draft requirements and identify any missing business rules or unclear acceptance criteria that should be clarified before execution.
```

### Prompt 6 — Strict output format prompt

```txt
Generate test cases in this format:
- Test case ID
- Title
- Preconditions
- Steps
- Expected result
- Type (positive / negative / boundary)
Use the attached requirements as source input.
```

### Prompt 7 — Risk-driven prompt from code review

```txt
Use the attached Code Reviewer findings to generate test cases that target the highest-risk areas, likely regressions, missing validations, and edge cases.
```

### Prompt 8 — Chaining prompt to Test Data Generator

```txt
Generate final test cases in a format that can be passed directly into the Test Data Generator.
For each case, make the relevant fields, inputs, and validation conditions explicit.
```

## Example handoff prompt to the next step

```txt
Use the attached approved test cases to generate synthetic test data with positive, negative, and boundary coverage for all relevant fields.
```

## Best practices

- include acceptance criteria whenever possible
- add screenshots only when they provide real context
- review generated cases for missing business rules
- separate approved cases from draft cases before passing them to the next agent
