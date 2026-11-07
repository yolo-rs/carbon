# Graph Report - carbon (2026-11-07)

## Corpus Check

- cluster-only mode — file stats not available

## Summary

- 460 nodes · 649 edges · 31 communities (24 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)

- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30

## God Nodes (most connected - your core abstractions)

1. `scripts` - 22 edges
2. `scripts` - 13 edges
3. `handleWebRequest()` - 13 edges
4. `compilerOptions` - 13 edges
5. `handleMcpRequest()` - 12 edges
6. `executeGemma4NativeForwardStep()` - 12 edges
7. `runCliCommand()` - 11 edges
8. `getNativeEngineVersion()` - 11 edges
9. `annotations` - 10 edges
10. `queryBunCodebaseGraph()` - 10 edges

## Surprising Connections (you probably didn't know these)

- `1. Gemini 4 Argon (High Reasoning) Deep Code Review of Prior Session` --references--> `queryBunCodebaseGraph()` [INFERRED]
  docs/ARCHITECTURE-AND-BEST-PRACTICES.md → packages/graph-engine/src/index.ts
- `1. Upstream Bun Codebase Dataset & Continuous Harvesting` --references--> `formatGemmaInstructionPair()` [INFERRED]
  docs/UNIFIED-CLUSTER-AND-GEMMA-ARCHITECTURE.md → packages/dataset/src/index.ts
- `1. Gemini 4 Argon (High Reasoning) Deep Code Review of Prior Session` --references--> `parseCargoDependencies()` [INFERRED]
  docs/ARCHITECTURE-AND-BEST-PRACTICES.md → packages/graph-engine/src/index.ts
- `1. Gemini 4 Argon (High Reasoning) Deep Code Review of Prior Session` --references--> `parseWorkspaceMembers()` [INFERRED]
  docs/ARCHITECTURE-AND-BEST-PRACTICES.md → packages/graph-engine/src/index.ts
- `cli_entry()` --calls--> `get_native_engine_version()` [INFERRED]
  python/carbon_cli/carbon_cli/main.py → python/carbon_core/carbon_core/ffi.py

## Import Cycles

- None detected.

## Communities (31 total, 7 thin omitted)

### Community 0 - "Community 0"

Cohesion: 0.09
Nodes (47): runCliCommand(), cwdDll, getNativeEngineVersion(), libCarbon, localDll, nativeCosineSimilarity(), nativeDotProduct(), nativeGeGluMlp() (+39 more)

### Community 1 - "Community 1"

Cohesion: 0.08
Nodes (18): cli_entry(), get_native_engine_version(), native_cosine_similarity(), native_dot_product(), native_geglu_mlp(), native_gemma_layer_step(), native_rmsnorm_gemma(), native_softmax() (+10 more)

### Community 2 - "Community 2"

Cohesion: 0.07
Nodes (34): bin, carbon, dependencies, @carbon/core@workspace:_, @carbon/dataset@workspace:_, @carbon/graph-engine@workspace:_, @carbon/mcp-server@workspace:_, @carbon/mesh-cluster@workspace:* (+26 more)

### Community 3 - "Community 3"

Cohesion: 0.06
Nodes (32): autoscaling.knative.dev/maxScale, autoscaling.knative.dev/minScale, run.googleapis.com/cpu-throttling, run.googleapis.com/description, run.googleapis.com/execution-environment, run.googleapis.com/ingress, run.googleapis.com/launch-stage, run.googleapis.com/startup-cpu-boost (+24 more)

### Community 4 - "Community 4"

Cohesion: 0.09
Nodes (18): 1. Gemini 4 Argon (High Reasoning) Deep Code Review of Prior Session, 2. Upstream Bun v1.4.4+ Toolchain Reference, 3. Astral `uv` & Ruff Python Standards, Google DeepMind Carbon — Gemini 4 Argon Code Review & Architecture Reference, BestPracticeItem, CarbonData, ChangelogItem, CliSetupStep (+10 more)

### Community 5 - "Community 5"

Cohesion: 0.11
Nodes (23): dependencies, @carbon/core@workspace:_, @carbon/dataset@workspace:_, @carbon/graph-engine@workspace:_, @carbon/mcp-server@workspace:_, @carbon/mesh-cluster@workspace:_, @carbon/webgpu-gemma@workspace:_, @carbon/core (+15 more)

### Community 6 - "Community 6"

Cohesion: 0.21
Nodes (17): carbon_cosine_similarity(), carbon_dot_product(), CARBON_ENGINE_VERSION, carbon_engine_version(), carbon_free_string(), carbon_geglu_mlp(), carbon_gemma_layer_step(), carbon_matvec_f32() (+9 more)

### Community 7 - "Community 7"

Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleDetection, moduleResolution, noEmit (+14 more)

### Community 8 - "Community 8"

Cohesion: 0.09
Nodes (22): scripts, check, cli, cli:bench, cli:changelog, cli:gcloud, cli:gemma, cli:graph (+14 more)

### Community 9 - "Community 9"

Cohesion: 0.10
Nodes (20): command, env, imageUri, bootDiskSizeGb, bootDiskType, displayName, name, value (+12 more)

### Community 10 - "Community 10"

Cohesion: 0.13
Nodes (18): dependencies, @carbon/core@workspace:_, @carbon/dataset@workspace:_, @carbon/graph-engine@workspace:_, @carbon/mesh-cluster@workspace:_, @carbon/webgpu-gemma@workspace:*, @carbon/core, @carbon/dataset (+10 more)

### Community 11 - "Community 11"

Cohesion: 0.12
Nodes (16): images, options, logging, machineType, steps, args, entrypoint, id (+8 more)

### Community 12 - "Community 12"

Cohesion: 0.16
Nodes (13): author, description, devDependencies, bun-types@1.4.4, @types/bun@latest, license, name, private (+5 more)

### Community 13 - "Community 13"

Cohesion: 0.20
Nodes (10): dependencies, @carbon/core@workspace:*, @carbon/core, license, main, name, private, sideEffects (+2 more)

### Community 14 - "Community 14"

Cohesion: 0.20
Nodes (10): dependencies, @carbon/core@workspace:*, @carbon/core, license, main, name, private, sideEffects (+2 more)

### Community 15 - "Community 15"

Cohesion: 0.20
Nodes (10): dependencies, @carbon/core@workspace:*, @carbon/core, license, main, name, private, sideEffects (+2 more)

### Community 16 - "Community 16"

Cohesion: 0.22
Nodes (8): 1. Upstream Bun Codebase Dataset & Continuous Harvesting, 2. Gemma 4 E2B Training, Post-Training & Fine-Tuning Pipeline, 3. Zero-Dependency WebGPU Gemma 4 In-Browser Engine, 4. Unified Distributed Mesh & Single-Cluster Rack, 5. Execution Commands, Gemini 4 Carbon // Unified Real-Time AI & Distributed Mesh Architecture, Unified Cluster Aggregate Capacity, formatGemmaInstructionPair()

### Community 17 - "Community 17"

Cohesion: 0.22
Nodes (8): dependencies, license, main, name, private, sideEffects, type, version

### Community 18 - "Community 18"

Cohesion: 0.22
Nodes (8): dependencies, license, main, name, private, sideEffects, type, version

### Community 19 - "Community 19"

Cohesion: 0.22
Nodes (8): 1. Executive Vision & Architecture, 2. Repository Layout, 3. Quick Start & Verification Commands, 4. License, Astral `uv` Python Monorepo, Google DeepMind Carbon (Project Carbon), Rust Bare-Metal Kernel Compilation & Tests, Upstream Bun v1.4.4+ Monorepo & Standalone AoT Binary

### Community 20 - "Community 20"

Cohesion: 0.40
Nodes (4): 1. Fact-Checked Upstream Bun Reality, 2. Ingested Codebase Graph Statistics (`@carbon/graph-engine`), 3. Usage in Carbon & Gemma 4 Tuning, Upstream Bun Knowledge Base & Architecture Ground Truth (v1.4.4)

### Community 21 - "Community 21"

Cohesion: 0.50
Nodes (3): Contributing to Google DeepMind Carbon, Contributor License Agreement (CLA), Engineering & Style Standards (`google/styleguide`)

### Community 22 - "Community 22"

Cohesion: 0.50
Nodes (4): carbon-cli, carbon-core, carbon-web, gemma-train

### Community 23 - "Community 23"

Cohesion: 0.50
Nodes (3): Reporting a Vulnerability, Security Architecture Invariants, Security Policy — Google DeepMind Carbon

## Knowledge Gaps

- **5 isolated node(s):** `carbon_ffi`, `carbon-cli`, `carbon-graph`, `carbon-web`, `gemma-train`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 257 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `formatGemmaInstructionPair()` connect `Community 16` to `Community 0`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **What connects `carbon_ffi`, `carbon-cli`, `carbon-graph` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09378531073446328 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08019323671497584 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06722689075630252 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.0625 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
