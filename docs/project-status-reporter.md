# Project Status Reporter

## Overview

Project Status Reporter extracts stories from JIRA and generates an HTML status report using a predefined template. It is the stakeholder-facing reporting agent in the chain.

## What this agent does

- reads sprint or date-based Jira data
- creates HTML email-ready reports
- summarizes progress, blockers, and execution state
- reduces manual reporting effort near sprint close

## Workflow position

This is usually the **final agent** in the chain.

### Typical order

- after sprint execution
- after code, test, and pipeline work are visible in Jira or related status inputs
- after enough information exists to summarize real progress

## Recommended chaining

### Good previous agents

- any delivery agent that produced planning, test, implementation, or pipeline context
- especially useful after Build Script Generator or sprint execution updates

### Common input sources

- JIRA story state
- sprint/date parameters
- delivery notes
- risk notes

### Final output use

- leadership reporting
- executive updates
- sprint summaries
- email-ready communication

## Inputs

- sprint/date parameters
- JIRA PAT
- JIRA data

## Outputs

- HTML email-ready report

## Coverage / Scope

- uses a predefined report template
- focused on standardized status reporting

## Invocation

Use this agent through:

- EncoraGPT

## Notes / Validation

- validated with OpenAI models
- quality depends on Jira data completeness and accuracy
- best suited for teams that maintain current sprint tracking

## When to use

Use this agent when:

- closing a sprint
- preparing executive reporting
- summarizing progress for stakeholders
- reducing reporting overhead

## When NOT to use

Avoid using this agent when:

- Jira data is incomplete
- workflow states are stale or unreliable
- important delivery information is not reflected in the source data

## Business value

- reduces manual reporting effort
- improves consistency of stakeholder communication
- speeds up executive status preparation
- supports standardized sprint reporting

## Known limitations

- depends on Jira data accuracy
- cannot correct poor underlying project hygiene
- may still need human polish for executive audiences

## Suggested adoption metric

- **Time saved per sprint on reporting**

## What good output looks like

A strong report should include:

- what is done
- what is in progress
- blockers and risks
- notable achievements
- next actions or decisions needed

## Prompt Library

### Prompt 1 — Quick start

```txt
Generate an HTML status report for this sprint using Jira data. Highlight completed work, in-progress items, blockers, and next steps.
```

### Prompt 2 — Executive reporting prompt

```txt
Create an executive-ready HTML status report from the attached Jira sprint data.
Focus on progress, delivery confidence, major blockers, risks, and the most important stakeholder takeaways.
```

### Prompt 3 — Sprint close prompt

```txt
Generate a sprint closing report using Jira stories for this sprint.
Summarize completed work, carry-over work, blocked items, quality signals, and noteworthy delivery achievements.
```

### Prompt 4 — Date-range prompt

```txt
Generate an HTML status report for the specified date range using Jira data.
Include major changes in status, completed stories, blocked work, and any trend that leadership should know.
```

### Prompt 5 — Delivery-readiness prompt

```txt
Create a status report that includes project progress plus delivery-readiness indicators such as testing progress, pipeline readiness, and major unresolved risks.
```

### Prompt 6 — Strict output prompt

```txt
Generate the report using these sections only:
1. Executive summary
2. Completed work
3. In-progress work
4. Blockers / risks
5. Delivery confidence
6. Next actions
```

### Prompt 7 — Leadership-friendly prompt

```txt
Generate an HTML report that is concise, decision-oriented, and suitable for leadership review.
Avoid low-value detail and focus on what changed, what is at risk, and what help may be needed.
```

### Prompt 8 — End-of-chain prompt

```txt
Use the latest Jira data plus the delivery context from planning, testing, and CI/CD work to generate a final project status report.
Make the report readable for both delivery managers and executives.
```

## Best practices

- make sure Jira story states are current before running it
- use consistent sprint naming and tagging
- review the generated report before sending externally
- pair it with real blockers and risk ownership, not just raw story counts
