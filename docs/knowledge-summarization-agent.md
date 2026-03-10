# Knowledge Summarization Agent

## Overview

Knowledge Summarization Agent summarizes documents into executive briefs or detailed reports with traceability. It is the best entry point when project information is scattered across Word files, PDFs, screenshots, visual assets, meeting notes, or mixed discovery material.

## What this agent does

- Summarizes large document sets into a usable brief
- Produces executive summaries or more detailed reports
- Identifies duplicated information and likely inconsistencies
- Helps teams align before they generate stories, plans, or tests
- Extracts insights that can be reused by downstream agents

## Workflow position

This is usually the **first agent** in the chain.

### Start with this agent when

- requirements are spread across many documents
- leadership wants a concise brief before delivery work starts
- there are conflicting inputs from multiple teams
- users are unsure what is important and what is noise

## Recommended chaining

### Typical next agent

- **JIRA User-Story Generator**

### Possible next agents

- **SRD Generator** if stories already exist and only technical planning is needed
- **Project Status Reporter** for executive communication on review findings

### What to pass forward

Pass these outputs to the next step:

- executive brief
- detailed summary
- assumptions
- inconsistencies
- open questions
- traceability notes

## Inputs

Supported input types include:

- Word documents
- PDF files
- audio content
- visual content
- mixed project material

## Outputs

- executive brief
- detailed report
- insights and observations
- inconsistencies and redundancy notes

## Coverage / Scope

- detects inconsistencies
- identifies redundancy
- supports traceability-oriented summarization
- works well for large document reviews and executive briefings

## Invocation

Use this agent through:

- EncoraGPT

## Notes / Validation

- provides actionable intelligence
- works best when the source material is coherent enough to compare
- summary quality depends on document clarity and completeness
- fragmented or contradictory inputs should still be reviewed by a human

## When to use

Use this agent when:

- preparing an executive briefing
- reviewing many related documents quickly
- aligning multiple stakeholders before story generation
- identifying duplicate or conflicting requirements

## When NOT to use

Avoid using this agent when:

- critical source documents are missing
- the material is too fragmented to establish traceability
- you already have a clean, approved summary and no new information was added

## Business value

- speeds up decision-making
- reduces manual document analysis effort
- improves team alignment
- makes the next agent step more reliable

## Known limitations

- traceability depends on document clarity
- fragmented documentation reduces result quality
- not a replacement for domain-owner validation in high-stakes decisions

## Suggested adoption metric

- **Time saved in document analysis**

## What good output looks like

A strong output from this agent should include:

- a short executive brief
- major themes and goals
- key assumptions
- conflicting statements
- missing information
- a short recommendation for the next agent

## Prompt Library

### Prompt 1 — Quick start summary

```txt
Summarize this document set into a concise executive brief. Highlight the project goal, major requirements, technical constraints, assumptions, and open questions.
```

### Prompt 2 — Detailed analysis for downstream story generation

```txt
Analyze the attached documents and create a structured summary that can be passed to the JIRA User-Story Generator.
Return these sections:
1. Business goals
2. Core user needs
3. Functional requirements
4. Non-functional constraints
5. Risks and assumptions
6. Open questions
7. Information that appears duplicated or inconsistent
```

### Prompt 3 — Executive briefing version

```txt
Create an executive brief from these documents.
Keep it decision-oriented.
Focus on business goals, delivery risks, unresolved dependencies, and the most important next actions.
```

### Prompt 4 — Traceability-focused prompt

```txt
Summarize these documents with traceability in mind.
For each major requirement or insight, indicate which source material appears to support it.
Also flag contradictions, duplicated statements, and unclear ownership.
```

### Prompt 5 — Missing information detector

```txt
Review these materials and produce a summary, but first identify the information gaps that would block downstream agents such as story generation or technical planning.
If possible, continue with a best-effort summary and clearly label assumptions.
```

### Prompt 6 — Discovery workshop prep

```txt
Use this material to prepare a discovery workshop brief.
Return:
- a one-page summary
- the top 10 questions that need clarification
- major risks
- likely scope boundaries
- recommended next agent
```

### Prompt 7 — Mixed media analysis

```txt
Summarize the attached Word, PDF, image, and meeting-note content into one unified report.
Separate confirmed facts from assumptions and identify where multiple sources disagree.
```

### Prompt 8 — Chaining prompt to the next agent

```txt
Create a final summary that is ready to be passed directly into the JIRA User-Story Generator.
Structure the output so the next agent can easily extract user needs, business goals, constraints, edge cases, and unresolved questions.
```

## Example handoff prompt to the next step

```txt
Use the attached Knowledge Summarization Agent output as the source input.
Transform the summarized business goals, requirements, constraints, and open questions into small, testable Jira stories with Definition of Done.
```

## Best practices

- group related documents before running analysis
- remove clearly outdated material if possible
- choose executive brief vs detailed report intentionally
- ask for missing information explicitly instead of hoping the agent infers it
- always pass assumptions and open questions to the next agent
