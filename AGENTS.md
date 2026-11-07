# AGENTS.md — Google DeepMind Carbon (`yolo-rs/carbon`)

Operational rules for autonomous agents working in the **Google DeepMind Carbon** polyglot monorepo (`Rust 2024` + `Upstream Bun v1.4.4+` + `Python uv` + `Go 1.27`).

## 1. Golden Rules

- **Zero Node.js / Zero npm**: Always use `bun`, `bun check`, `bun lint`, `bun fmt`, `bun test`, `bun compile`.
- **Zero Hardcoded Paths**: Resolve native libraries (`.dll`, `.so`, `.dylib`) and sibling repositories (`YOLO_WEB_ROOT`, `BUN_SRC_ROOT`, `CARBON_FFI_PATH`) dynamically across Windows, Linux, and macOS.
- **Keyless Google AI Ultra**: Authenticate via `@yolo-web/auth` Chrome profile sync (`yohanpierre15@gmail.com` -> `aphrody-yolo`) and `BardFrontendService/StreamGenerate` without requiring external API keys.
- **GPUI Zed-Fork Convergence**: Target native Rust GPUI (`yolo-gpui`) instead of Electron for desktop and IDE surfaces.
- **Autonomous Pipeline**: Run `bun run scripts/pipeline.ts` and `go test ./go/...` before concluding any change.

---

## Autonomous NHITL Agent & Context / Token Optimization Best Practices (24/7 Operations)

### 1. Context Window & Token Optimization
- **High-Precision Targeting**: Never dump large raw files into the model context. Use exact byte/line range reads or AST/symbol lookups.
- **Zero-Polling Reactive Wakeup**: When launching background tasks or subagents, do not poll in loops. Yield execution immediately and wait for reactive system events.
- **Compact & High Information Density**: Output concise, fact-based reports with clickable markdown file links (`[file.ext](file:///path/to/file)`). Do not narrate obvious actions.
- **Strict Zero-Emoji Policy**: Zero emojis in all code, comments, commit messages, PRs, logs, and agent communications.

### 2. Autonomous Execution (NHITL - No Human In The Loop)
- **Continuous Grind & Auto-Goal**: Independently identify objectives, resolve compile errors, apply fixes, format (`bun fmt`), lint (`bun lint`), typecheck (`bun check`), test (`bun test` / `cargo test`), commit, and push.
- **Pure Tech Stack**: 100% Upstream Bun v1.4.4+, Rust 2024, Python uv v0.13.7+, Go 1.27+. Zero Node.js, npm, yarn, or pnpm.
- **Strict Isolation & Safe Execution**: Heavy Rust builds run on vps (12 cores) with sccache under shared lock; web and fast tests run on bunos or local Bun.
