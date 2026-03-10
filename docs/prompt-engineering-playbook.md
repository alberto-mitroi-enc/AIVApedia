# Prompt Engineering Playbook

## Purpose

This page is the shared base for all agent pages. It gives users a reusable way to write prompts without overthinking structure.

## The easiest prompt formula

Use this structure in almost every request:

```txt
Goal:
Context:
Input:
Constraints:
Expected output:
Ask clarifying questions if something important is missing.
```

## Why this works

Most weak prompts fail because they are missing one of these:

- the real goal
- enough context
- output format
- constraints
- permission for the agent to flag missing details

## Template library

### Template 1 — Quick start

```txt
Goal: Help me complete this task.
Context: This is part of our AIVA workflow.
Input: [paste content here]
Expected output: Give me a structured result I can directly use.
If anything is unclear, list the missing information first.
```

### Template 2 — Strong structured prompt

```txt
Goal: [what success looks like]
Context: [business and technical background]
Input: [documents, stories, code, screenshots, repo path, etc.]
Constraints:
- [rule 1]
- [rule 2]
- [rule 3]
Expected output:
- [section 1]
- [section 2]
- [section 3]
Also identify risks, assumptions, and missing information.
```

### Template 3 — Strict output prompt

```txt
Use the attached input and return only these sections:
1. Summary
2. Key findings
3. Risks
4. Missing information
5. Recommended next step
Do not add extra sections.
```

### Template 4 — Chaining prompt

```txt
Use the output from the previous AIVA agent as the source input for this task.
Do not restart analysis from scratch.
Preserve important assumptions, risks, and unresolved questions.
Return output that is ready for the next agent in the chain.
```

### Template 5 — Clarification-first prompt

```txt
Before generating the final output, first identify any missing information that would materially reduce quality.
If the missing information is not blocking, proceed with best-effort output and clearly label assumptions.
```

## Prompt quality checklist

Before sending a prompt, check:

- Did I tell the agent **why** I need this?
- Did I include enough **business context**?
- Did I specify the **technology stack** if relevant?
- Did I define the **expected output format**?
- Did I allow the agent to surface **missing information**?
- Did I mention whether this output will be used by the **next agent**?

## Prompt patterns for different needs

### When speed matters

```txt
Give me the fastest usable first draft. Keep it practical, concise, and ready for iteration.
```

### When precision matters

```txt
Be strict and conservative. Do not invent missing details. Flag assumptions explicitly.
```

### When adoption matters

```txt
Write the output so a new team member can understand and use it immediately.
Prefer clarity and structure over shortness.
```

### When chaining matters

```txt
Format the output so it can be passed directly into the next AIVA agent without major cleanup.
```

## Recommended prompt flow for new users

1. Start with the quick-start template.
2. Add business and technical context.
3. Add output format requirements.
4. Add chaining guidance.
5. Save the final prompt in a shared prompt library.

## Shared copy-ready meta prompt

```txt
I am using AIVA and want a strong reusable prompt, not a one-off prompt.
Based on the task below, generate:
1. a quick-start prompt
2. a detailed prompt
3. a strict output prompt
4. a chaining prompt for the next agent
5. a short explanation of when to use each

Task: [describe task]
Context: [paste context]
```

## What to store in the internal prompt database

For every saved prompt, store:

- agent name
- prompt name
- use case
- when to use it
- when not to use it
- required inputs
- output type
- owner
- last validated date

## Final advice

Users should not be expected to write production-grade prompts from memory.

The right model is:

- **start from a known template**
- **adjust only the task-specific inputs**
- **save improved prompts back into the library**
