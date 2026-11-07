#!/usr/bin/env bun
// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

/**
 * Universal Autonomous Pipeline Orchestrator (Auto-Format, Lint, Typecheck,
 * Rust/Bun/Python Tests, Binary Compilation, Multi-Registry Verification & Git Ops).
 *
 * Runs seamlessly on Linux, macOS, and Windows.
 */

import { $ } from "bun";
import { resolve } from "node:path";
import { existsSync, readFileSync } from "node:fs";

interface StepResult {
  step: string;
  durationMs: number;
  success: boolean;
  error?: string;
}

const results: StepResult[] = [];

async function runStep(name: string, fn: () => Promise<void>) {
  const t0 = performance.now();
  process.stdout.write(`[*] ${name}... `);
  try {
    await fn();
    const duration = Math.round(performance.now() - t0);
    console.log(`OK (${duration}ms)`);
    results.push({ step: name, durationMs: duration, success: true });
  } catch (err: any) {
    const duration = Math.round(performance.now() - t0);
    console.log(`FAILED (${duration}ms)`);
    console.error(err?.message || err);
    results.push({
      step: name,
      durationMs: duration,
      success: false,
      error: String(err?.message || err),
    });
    throw err;
  }
}

async function main() {
  console.log("=== UNIVERSAL AUTONOMOUS PIPELINE // CARBON & YOLO-WEB ===");
  console.log(`Platform: ${process.platform} (${process.arch})`);
  console.log(
    `Runtime:  Upstream Bun ${Bun.version} + Cargo Rust 2024 + Astral uv`,
  );

  const root = process.cwd();

  // 1. Quality Gates
  await runStep("Bun Format Check", async () => {
    await $`bun fmt --check`.quiet();
  });

  await runStep("Bun Lint Rules (1000+ rules)", async () => {
    await $`bun lint`.quiet();
  });

  await runStep("Bun Typecheck (TS 7)", async () => {
    await $`bun check`.quiet();
  });

  // 2. Rust FFI Kernel Tests & Build
  if (existsSync(resolve(root, "crates/carbon_ffi/Cargo.toml"))) {
    await runStep("Rust Bare-Metal FFI Tests", async () => {
      await $`cargo test --manifest-path crates/carbon_ffi/Cargo.toml`.quiet();
    });

    await runStep("Rust Release Build (LTO Fat)", async () => {
      await $`cargo build --release --manifest-path crates/carbon_ffi/Cargo.toml`.quiet();
    });
  }

  // 3. Monorepo Bun Tests
  await runStep("Bun Tests (Full Suite)", async () => {
    await $`bun test`.quiet();
  });

  // 4. Python uv Tests & Ruff Check
  if (existsSync(resolve(root, "pyproject.toml"))) {
    await runStep("Python Ruff Linter", async () => {
      await $`uv run ruff check .`.quiet();
    });

    await runStep("Python Pytest Suite", async () => {
      await $`uv run pytest`.quiet();
    });
  }

  // 4b. Go Keyless Gemini & Antigravity SDK Tests
  if (existsSync(resolve(root, "go/go.mod"))) {
    await runStep("Go 1.27 Keyless SDK Tests", async () => {
      await $`go test -C go ./...`.quiet();
    });
  }

  // 5. Ahead-of-Time Binary Compilation
  if (existsSync(resolve(root, "src/main.ts"))) {
    await runStep("Compile Standalone AoT Binary", async () => {
      await $`bun run compile:aot`.quiet();
    });
  }

  // 6. Knowledge Graph Sync
  await runStep("Knowledge Graph AST Sync", async () => {
    await $`graphify update . --no-cluster`.quiet();
  });

  // 7. Git Autonomous Snapshot
  if (existsSync(resolve(root, ".git"))) {
    await runStep("Git Automated Local Snapshot", async () => {
      await $`git add -A`.quiet();
      const status = await $`git status --porcelain`.text();
      if (status.trim()) {
        const msg = `chore(auto): pipeline pass ${new Date().toISOString()} [skip ci]`;
        await $`git commit -m ${msg}`.quiet();
      }
    });
  }

  console.log("\n=== PIPELINE SUCCESSFUL // ALL QUALITY GATES PASSED ===");
  for (const r of results) {
    console.log(` - ${r.step.padEnd(35)}: ${r.durationMs}ms`);
  }
}

main().catch((err) => {
  console.error("\n[!] Pipeline terminated with error:", err.message);
  process.exit(1);
});
