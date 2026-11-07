# AGENTS.md — Google DeepMind Carbon (`yolo-rs/carbon`)

Operational rules for autonomous agents working in the **Google DeepMind Carbon** polyglot monorepo (`Rust 2024` + `Upstream Bun v1.4.4+` + `Python uv` + `Go 1.27`).

## 1. Golden Rules

- **Zero Node.js / Zero npm**: Always use `bun`, `bun check`, `bun lint`, `bun fmt`, `bun test`, `bun compile`.
- **Zero Hardcoded Paths**: Resolve native libraries (`.dll`, `.so`, `.dylib`) and sibling repositories (`YOLO_WEB_ROOT`, `BUN_SRC_ROOT`, `CARBON_FFI_PATH`) dynamically across Windows, Linux, and macOS.
- **Keyless Google AI Ultra**: Authenticate via `@yolo-web/auth` Chrome profile sync (`yohanpierre15@gmail.com` -> `aphrody-yolo`) and `BardFrontendService/StreamGenerate` without requiring external API keys.
- **GPUI Zed-Fork Convergence**: Target native Rust GPUI (`yolo-gpui`) instead of Electron for desktop and IDE surfaces.
- **Autonomous Pipeline**: Run `bun run scripts/pipeline.ts` and `go test ./go/...` before concluding any change.
