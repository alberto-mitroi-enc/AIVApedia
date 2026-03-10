# Test Data Generator

## Overview

Test Data Generator creates synthetic relational test data, including edge cases, for manual QA and automated testing. It is most effective when test cases or requirements clearly define field rules.

## What this agent does

- generates synthetic datasets from requirements or test cases
- covers positive, negative, and boundary scenarios
- helps QA prepare realistic data faster
- supports per-case or batch generation

## Workflow position

This usually comes **after Test Case Generator**.

### Typical order

1. Test Case Generator
2. **Test Data Generator**
3. Automation Test Script Generator or manual QA execution

## Recommended chaining

### Best previous agent

- **Test Case Generator**

### Best next agents

- manual QA execution
- **Automation Test Script Generator**

### What to pass forward

- synthetic data sets
- field-level value combinations
- edge values
- invalid data combinations
- dataset notes for execution teams

## Inputs

- test cases
- requirements
- field specifications

## Outputs

- text data sets
- structured synthetic values

## Coverage / Scope

Supports:

- positive coverage
- negative coverage
- boundary coverage

Can generate outputs:

- per test case
- in batch

## Invocation

Use this agent through:

- EncoraGPT

## Notes / Validation

- can generate per case or in batch
- strongest results require field definitions and rules
- quality depends on specification quality

## When to use

Use this agent when:

- preparing data before test execution
- generating realistic test inputs for QA
- expanding validation to include edge and invalid data
- reducing manual data preparation effort

## When NOT to use

Avoid using this agent when:

- the data model is undefined
- field specifications are incomplete
- required validation rules are unknown

## Business value

- improves defect detection before production
- strengthens QA preparation
- reduces manual test data work
- improves scenario coverage depth

## Known limitations

- depends on field specification quality
- weak data definitions reduce usefulness
- may need review for domain-sensitive scenarios

## Suggested adoption metric

- **% test cases with synthetic data generated**

## What good output looks like

A strong output should clearly separate:

- valid data
- invalid data
- boundary values
- case-specific data notes

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate synthetic test data for these test cases, including valid, invalid, and boundary-value scenarios.
```

### Prompt 2 — Field-spec prompt

```txt
Generate synthetic test data from these field specifications.
For each field, consider data type, required/optional behavior, range rules, length rules, and special validation constraints.
```

### Prompt 3 — Per-test-case prompt

```txt
Generate test data separately for each attached test case.
For each case, provide data that supports the intended validation path and clearly label positive, negative, and boundary inputs.
```

### Prompt 4 — Batch-generation prompt

```txt
Generate a batch of synthetic relational test data for this feature.
Include realistic combinations, invalid combinations, duplicates where relevant, and edge values that are likely to surface defects.
```

### Prompt 5 — API validation prompt

```txt
Generate synthetic request and field data for these API validation scenarios.
Include missing fields, invalid formats, out-of-range values, unauthorized combinations, and valid baseline requests.
```

### Prompt 6 — Strict output prompt

```txt
Return test data in this format:
- Test case reference
- Field name
- Value
- Expected behavior
- Coverage type (positive / negative / boundary)
```

### Prompt 7 — Domain realism prompt

```txt
Generate synthetic data that feels realistic for this business domain while remaining safe for non-production environments.
Include edge cases and invalid variants that are still plausible enough to catch logic issues.
```

### Prompt 8 — Chaining prompt to automation

```txt
Generate synthetic test data in a format that can be reused by the Automation Test Script Generator.
Make values explicit, stable, and easy to map into automated test inputs.
```

## Example handoff prompt to the next step

```txt
Use the attached approved test cases and synthetic data to generate Selenium Java automation scripts with reusable structure, clear setup, and assertions.
```

## Best practices

- provide field names, types, and rules
- include validation constraints explicitly
- separate positive and negative coverage when possible
- review generated data before sharing it across QA assets
