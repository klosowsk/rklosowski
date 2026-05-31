---
title: "Why I Built Lisa: A Project Manager for the Age of AI Agents"
slug: why-i-built-lisa-a-project-manager-for-the-age-of-ai-agents
date: '2026-01-19'
canonicalUrl: https://blog.rklosowski.com/why-i-built-lisa-a-project-manager-for-the-age-of-ai-agents/
---

![](/blog/images/2026/01/IMG_5916.webp)

*Meet Lisa. A Project Manager for the Age of AI Agents.*

⭐️ **[github.com/klosowsk/lisa](https://github.com/klosowsk/lisa)**

AI writes code faster than you can spec it. That's the new reality.

I've been questioning how I could implement best practices for agentic coding working with my team. Imagine a fast-moving startup where context is sparse, specs are vague, and half the decisions live in someone's head or a Slack thread from three weeks ago.

The bottleneck isn't coding anymore. It's everything that happens before coding: the specs, the context, the decisions that used to live in someone's head.

* * *

PMs (myself included) got lazy. We wrote tickets like:

-   "Make it faster"
-   "Add dark mode" (which of the 47 components? what theme system?)
-   "Fix the auth thing" (what thing? when?)

It worked when humans filled the gaps. It doesn't work when your executor has amnesia and takes instructions literally.

* * *

## What Already Exists (And What's Missing)

I love spec-driven frameworks. [BMAD](https://github.com/bmad-code-org/BMAD-METHOD) is great at planning: thorough discovery, good structure for thinking through problems. But it lacks the execution layer and gets easily too verbose. Specs go in, but there's no clean handoff to implementation or a clear state definition for the decisions you made. Expect random files in random places.

[Spec-kit](https://github.com/github/spec-kit) is good for developers: tight integration with code, works well in the terminal. But it leaves PMs out of the loop.

I wanted both. Planning that PMs can own. Execution that devs (and AI) can run with. Same structure, shared context.

* * *

## How Lisa Works

Lisa uses the same agile structure teams already know: milestones, epics, stories. The same hierarchy you'd see in Linear, Jira, or any planning tool. Nothing new to learn.

It starts with a quick, opinionated discovery process: answer a few questions about your project, and Lisa generates the initial structure for you. No blank page paralysis.

The difference: everything carries context. Each epic has a PRD and architecture doc. Each story has acceptance criteria and references the decisions that were already made.

```
$ lisa status show E1.S2

═══ Story: E1.S2 ═══
Add login form

Acceptance Criteria
  [ ] Email field with format validation
  [ ] Password field with show/hide toggle
  [ ] "Remember me" checkbox
  [ ] Error messages below fields

Architecture Context
  - JWT tokens in httpOnly cookies
  - Refresh token rotation
```

Everything lives in `.lisa/`: plain files you can version control and share.

* * *

## The Fun Part: Building Context in the CLI

Honestly, this is what I enjoy most about Lisa. The CLI becomes a conversation with your project state.

Need to understand why a story exists? Trace it back:

```
$ lisa status why E1.S3

E1.S3: "Add password reset flow"
  ← Epic E1: "Authentication"
    ← Milestone M1: "MVP Launch"
      ← Discovery: "Users need self-service account recovery"
```

Need to know how to implement it? Get the full context:

```
$ lisa status how E1.S3

Implementation Guidance:
  PRD Requirement: E1.R4 - Password reset via email link
  Architecture: Token-based reset, 15min expiry
  Dependencies: E1.S1 (email service) must be done first

  Acceptance Criteria:
    [ ] "Forgot password" link on login form
    [ ] Email with reset token (15min expiry)
    [ ] New password validation (min 8 chars)
```

Everything connects. Requirements trace to stories. Stories trace to architecture decisions. Dependencies are explicit, so the agent knows what needs to be done first without asking.

This is the state that usually lives in someone's head. Now it's queryable. Versionable. Available to any agent that picks up the work.

* * *

## LLM as Runtime

Here's the thing that made Lisa click for me: **commands should return guidance, not just data.**

When you run `lisa status board`, you don't just get a Kanban. You get what to do next. Available commands. Dependency warnings. The same output works for humans (formatted nicely) and AI (structured instructions).

The AI doesn't need special prompting. It reads the same interface you do.

This is what I mean by "LLM as runtime": treating the AI like an operating system that can context-switch between tasks. Lisa provides the state. The agent provides the execution.

* * *

## The Elephant in the Room

Yes, I basically reimplemented Linear in a CLI. I'm aware of the irony.

There's a love-hate thing here.

So I built a janky ticket system in JSON files. It's funny. It works. There's a lot to improve.

I'm already thinking about integrations: syncing with Linear, maybe Jira for the enterprise folks, GitHub issues for the open source crowd. The goal was never to replace these tools, just to bridge them to the AI execution layer.

In the meantime: MCPs. If you haven't gone down the MCP rabbit hole yet, do it. Linear MCP, GitHub MCP, Notion MCP. Suddenly your AI agent can read tickets, check PR status, pull context from anywhere. Lisa plays well with this. Use Lisa for the planning structure, use MCPs to pull in external state. Best of both worlds while we figure out proper integrations.

For now, Lisa manages its own state. PRs welcome.

* * *

## Why "Lisa"?

You've probably heard of "Ralph Wiggum loops": AI agents running autonomously, bumping into walls until tests pass. Named after the Simpsons character who bumps into things.

**Lisa Simpson** is Ralph's classmate. Organized. Plans everything.

*Lisa keeps it organized. The Ralphs get it done.*

* * *

## Getting Started

**[github.com/klosowsk/lisa](https://github.com/klosowsk/lisa)**

*MIT licensed. I built this because I was tired of my own bad specs.*

*Special thanks to my fiancée for helping validate this idea and putting up with my late-night debugging sessions.* ❤️
