---
title: I Built Supabase with HA PostgreSQL on Kubernetes - And Why You Might Want To Self-Host
slug: i-built-supabase-with-ha-postgresql-on-kubernetes-and-why-you-might-want-to-self-host-2
date: '2025-11-02'
canonicalUrl: https://blog.rklosowski.com/i-built-supabase-with-ha-postgresql-on-kubernetes-and-why-you-might-want-to-self-host-2/
---

So I recently wrapped up this project that I've been tinkering with for a while. It's called **[Supabase HA Kubernetes](https://github.com/klosowsk/supabase-ha-kubernetes)**, and honestly, it started because I was frustrated with the existing options for running Supabase with high availability.

**→ [Check it out on GitHub](https://github.com/klosowsk/supabase-ha-kubernetes)**

## The Problem

If you've ever tried to self-host Supabase on Kubernetes, you know the deal. The community charts like [supabase-kubernetes](https://github.com/supabase-community/supabase-kubernetes) are great for getting started, but they don't have HA built in. You either end up with a single PostgreSQL instance (pray it doesn't go down), manual clustering setup (operational nightmare), or external managed databases ($$$ and defeats the purpose).

I wanted something that just *works* - where the database can survive a node failure without me getting paged at 3 AM.

## Why Self-Host?

[This post from Vonng](https://blog.vonng.com/cloud/bonus/) crystallized something I'd been feeling: **modern hardware is insanely fast, and cloud pricing hasn't caught up**. NVMe SSDs are 10,000x faster than spinning disks, yet cloud providers charge like it's 2010. A decent bare metal server can handle workloads that would cost you 5-10x more in AWS.

Plus, PostgreSQL's streaming replication ([as PlanetScale explains](https://planetscale.com/docs/postgres/postgres-architecture)) gives you legitimate HA with just 3 nodes - primary + two replicas. One dies? Automatic failover in seconds. It's not rocket science, but it needs proper orchestration.

**Storage matters:** Direct-attached NVMe (like what you get with bare metal) gives you maximum performance with lower I/O latency compared to network-attached storage like EBS. For I/O-intensive database workloads, this is a game-changer. Cloud providers offer this (PlanetScale calls it "Metal"), but you pay a premium. With self-hosting, it's just... your storage.

For me, it's about full control over my stack and not being locked into someone else's pricing model.

## The Solution

I built a Helm chart that combines the [Zalando Postgres Operator](https://github.com/zalando/postgres-operator) with the complete Supabase stack.

**What you get:**

-   3-node (or more) PostgreSQL cluster with automatic failover (Spilo + Patroni - battle-tested tech that's been around for years)
-   All Supabase services (Auth, Storage, Realtime, Functions, etc.)
-   Custom Spilo image with all extensions pre-loaded (pgvector, PostGIS, TimescaleDB, etc.) using [Pigsty](https://pigsty.io/)
-   Auto-configured secrets
-   GitOps-ready (works with ArgoCD/Flux)

**The important part:** This is **true open source** with no vendor lock-in. Everything runs on standard PostgreSQL with community extensions. If Supabase disappeared tomorrow, your database keeps running. You control the operator in your own cluster.

## Quick Start

Installation is pretty simple:

```bash
# Install the operator (once per cluster)
helm install postgres-operator postgres-operator-charts/postgres-operator \
  --namespace postgres-operator \
  --create-namespace

# Deploy Supabase with HA PostgreSQL
helm install supabase-prod ./helm-charts/supabase-ha \
  --namespace prod-supabase \
  --create-namespace \
  --values examples/high-availability/values.yaml
```

## Why This Works

**Built-in redundancy:** With 3-node replication, your data is automatically duplicated. Losing a node? Brief failover, not a backup restore situation.

**Monitoring:** Zalando operator exposes Prometheus metrics out of the box. Full visibility into your cluster.

**Real SLAs:** Automatic failover in seconds means you can hit 99.9% uptime without depending on someone else's incident response.

**Modern hardware performance:** With NVMe drives, PostgreSQL flies. A cheap bare metal server can handle what costs thousands in AWS.

*(I'm planning a follow-up post about my on-premise server setup, racks, and configs. Stay tuned.)*

## PostgreSQL + Supabase = Fast Development

PostgreSQL handles 90% of application needs. Supabase gives you instant REST APIs, auth, realtime subscriptions, and storage on top of it. You can develop incredibly fast with this stack - the only difference is you're running it on your own hardware with full control.

* * *

**Check it out:** [**klosowsk/supabase-ha-kubernetes**](https://github.com/klosowsk/supabase-ha-kubernetes)

PRs and issues welcome!

**Credits:** Zalando Postgres Operator, Supabase, and the Supabase Community Charts that inspired this.
