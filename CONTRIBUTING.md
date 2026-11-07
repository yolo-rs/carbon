# Contributing to Google DeepMind Carbon

Thank you for your interest in contributing to **Project Carbon** (Google DeepMind Paris Beta / Global Vertex AI Runtime & Telemetry Platform).

## Contributor License Agreement (CLA)

Contributions to this project must be accompanied by a Contributor License Agreement (CLA). You (or your employer) retain the copyright to your contribution; this simply gives Google permission to use and redistribute your contributions as part of the project. Head over to <https://cla.developers.google.com/> to see your current agreements on file or to sign a new one.

## Engineering & Style Standards (`google/styleguide`)

Project Carbon enforces strict polyglot engineering rules across its three execution planes:

1. **Rust 2024 Bare-Metal FFI Plane (`crates/carbon_ffi`)**:
   - Edition `2024`, `#[unsafe(no_mangle)]` C ABI exports, explicit `unsafe { ... }` blocks inside `unsafe extern "C" fn`.
   - Release profile must maintain `panic = "unwind"`, `lto = "fat"`, `codegen-units = 1`, `opt-level = 3`.
   - Zero heap allocations on hot tensor paths (`carbon_dot_product`, `carbon_rmsnorm_gemma`, `carbon_geglu_mlp`, `carbon_rope_inplace`).

2. **Upstream Bun v1.4.4+ Host & Web Plane (`packages/*`, `src/*`)**:
   - 100% native `Bun.*` and `bun:*` APIs (`Bun.serve`, `bun:ffi`, `Bun.file`). Zero Node.js/npm legacy wrappers.
   - All workspace packages must declare `"sideEffects": false` for AoT dead-code elimination (`bun compile --trim`).
   - Quality gates before every commit: `bun fmt --check`, `bun lint`, `bun check`, `bun test`.

3. **Astral `uv` Python 3.11+ ML & Fine-Tuning Plane (`python/*`)**:
   - Managed exclusively via `uv sync` and `uv run`.
   - Linted and formatted via `uv run ruff check python` and `uv run ruff format python`.

4. **Knowledge Graph Synchronization (`graphify`)**:
   - After modifying source files, run `graphify update .` to keep `graphify-out/graph.json` synchronized with the AST.
