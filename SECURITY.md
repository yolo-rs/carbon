# Security Policy — Google DeepMind Carbon

## Reporting a Vulnerability

Google LLC and Google DeepMind take the security of Project Carbon and Vertex AI workloads seriously.
If you believe you have found a security vulnerability in any Google-owned repository, please report it to us through the **Google Vulnerability Reward Program (VRP)** at:

https://bughunters.google.com/

## Security Architecture Invariants

1. **Zero Long-Lived Service Account Keys**:
   - All Vertex AI, Cloud Run (`europe-west9` Paris / Global), and `gcloud` operations authenticate exclusively via Workload Identity Federation (WIF) or short-lived Application Default Credentials (`gcloud auth application-default print-access-token`).
2. **FFI Memory Boundary Safety**:
   - Every C ABI entry point in `crates/carbon_ffi` validates non-null pointers and slice bounds before constructing `std::slice::from_raw_parts`.
3. **Zero-Trust Mesh & Edge Isolation**:
   - Inter-node cluster traffic is encrypted over WireGuard (`10.66.0.0/24`) and exposed publicly only via Cloudflare Zero-Trust Tunnels with OAuth 2.0 / OIDC token verification.
