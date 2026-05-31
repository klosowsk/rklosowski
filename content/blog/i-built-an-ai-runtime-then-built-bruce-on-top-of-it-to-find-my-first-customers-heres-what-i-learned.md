---
title: "I built an AI runtime, then built Bruce on top of it to find my first customers: here's what I learned"
slug: i-built-an-ai-runtime-then-built-bruce-on-top-of-it-to-find-my-first-customers-heres-what-i-learned
date: '2026-02-24'
canonicalUrl: https://blog.rklosowski.com/i-built-an-ai-runtime-then-built-bruce-on-top-of-it-to-find-my-first-customers-heres-what-i-learned/
---

I've been building an AI runtime engine for the past few months.

Not a wrapper. An actual runtime: agent orchestration, tool calling, multi-tenant context, session management. The kind of infrastructure that lets you build real AI products, not just ChatGPT clones.

The first product I built on top of it was Bruce.

> Bruce is a signal radar. It monitors Reddit, Hacker News, and RSS feeds, scores every item 0-100 against your product context, and learns from your feedback. The idea: instead of keyword matching (the F5Bot model), you describe your product, your ICP, and your competitors, and the AI figures out what's actually relevant.

I launched it two weeks ago. The usual anxiety: will anyone care?

Here's what I discovered in the process of trying to find my first customers, and why it completely changed how I think about outbound.

## Cold email is cooked

I tried the traditional playbook first. Built a list, warmed a domain, wrote sequences.

The results were exactly what the data says they'd be: 1-3% reply rate. Open rates below 25%. Most emails never made it to the inbox.

The real problem isn't deliverability. It's that cold email is an interrupt. You're reaching out to someone who never asked to hear from you. You know their job title. Maybe their company size. That's it. You're guessing they have a problem.

You're always guessing.

## Reddit DMs are different

When someone posts on Reddit, asking "What's the best tool for monitoring brand mentions?", "F5Bot alternative?", "How do you handle alert fatigue?", they're not guessing they have a problem.

They have a problem. Right now. Actively asking strangers for help.

You know:

-   The exact problem they have (they described it)
-   How urgent it is (they're posting publicly, it's urgent)
-   What they've already tried (they usually list it)
-   Their budget expectations (pricing discussions happen in the open)

That changes everything about the conversation. Reply rate on Reddit DMs: 25-40% for the teams doing this right.

## The playbook

1.  Find the signal. Search for threads like "alternative to X", "what tool do you use for Y", "how do you handle Z". These are buying signals disguised as Reddit posts.
2.  Comment first. Don't cold DM. Drop a genuinely helpful comment on their post. Answer the question. Recommend 2-3 options. This builds credibility and warms up the DM, so they recognize your username when you reach out.
3.  Then DM with context. One message. No drip sequence. No "just following up." You're not interrupting. You're continuing a conversation they started.
4.  Let it flow. Reddit DMs are casual. People respond faster. The conversation moves naturally toward a demo or trial without the stiffness of email.

## Dogfooding: Bruce finds its own customers

I used Bruce to find the first users for Bruce.

That's the part that still feels a little surreal. I set up a project, described the product, defined my ICP (SaaS founders, indie hackers, GTM teams), added the competitor list, and configured feeds for "F5Bot alternative", "brand monitoring tool", "social listening", and 25 other queries.

![](/blog/images/2026/02/image.webp)

Within 48 hours, it surfaced threads I would have missed. Real conversations. Real people with the problem I'm solving.  
  
That's the whole bet with the AI runtime I built: tools that actually understand context, not just match patterns. Bruce is the first product. There will be more.

I'm still in the early stages of figuring out what Bruce should be. If you try it and have thoughts (on the scoring model, the feed setup, the signal quality), let me know! [klosowsk@gmail.com](mailto:klosowsk@gmail.com). Free tier at [smartbruce.com](https://smartbruce.com?utm_source=blog&utm_campaign=launch). No pitch, just building in public.
