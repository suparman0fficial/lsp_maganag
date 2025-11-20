# lsp_maganag Security Guidelines

This document defines the security principles and best practices for the **lsp_maganag** project, ensuring a robust, secure, and trustworthy Language Server Protocol (LSP) implementation by design. All contributors and maintainers should adhere to these guidelines throughout the project lifecycle.

---

## 1. Security by Design & Secure Defaults

- **Embed security early:** Incorporate threat modeling and risk assessment before implementing features. Identify sensitive operations (e.g., file I/O, plugin loading) and define security controls up front.  
- **Secure out of the box:** Ship the server with minimal permissions, disabled experimental features, and conservative configuration. Require explicit opt-in for elevated capabilities (e.g., workspace edits, diagnostic publishing).
- **Least privilege:** Grant the process and any child threads only the file-system and network access strictly necessary for LSP operations.

## 2. Authentication & Access Control

While typical LSP servers run locally, scenarios involving remote TCP connections require:  

- **Mutual TLS (mTLS) or token‐based authentication:** For networked deployments, enforce TLS 1.2+ and validate client certificates or bearer tokens.  
- **Fine‐grained permissions:** Define roles (e.g., readonly client vs. editor client) and enforce server‐side checks before executing workspace/applyEdit requests.  
- **Session management:** If stateful sessions are used, generate unpredictable identifiers, enforce timeouts, and provide an explicit “shutdown” handshake.

## 3. Input Validation & JSON‐RPC Hardening

- **Strict JSON schema validation:** Validate every incoming JSON‐RPC message against the official LSP schemas. Reject or log malformed or unexpected requests without processing.
- **Prevent injection:** Never execute strings from client requests as shell commands or dynamic code. Use safe APIs for file paths, URIs, and workspace edits.
- **Size and rate limiting:** Impose sane upper bounds on message size, request frequency, and overall session lifetime to mitigate DoS attempts.
- **Schema‐aware dispatching:** Map method names to handler functions via a whitelist. Reject unknown or deprecated methods explicitly.

## 4. Output Encoding & Error Handling

- **Sanitize responses:** Escape any user‐provided content (e.g., file paths, diagnostic messages) to prevent accidental command‐line or editor plugin injection.  
- **Minimal error disclosure:** Log internal errors on the server side, but send only generic error codes and messages to the client. Avoid exposing stack traces or file system details.
- **Fail securely:** In case of unrecoverable errors, shut down the server or specific handler gracefully, ensuring no partial state remains exposed.

## 5. Plugin & Extension Security

- **Sandboxing:** Load third‐party extensions or language analysis modules in isolated sandboxes (e.g., WebAssembly, separate processes with restricted rights).  
- **Signed plugins & integrity checks:** Require digital signatures or checksums for all extension packages. Verify integrity before loading.  
- **Controlled API surface:** Expose only a minimal host API to plugins. Deny direct file‐system or network access unless explicitly authorized by configuration.
- **Version pinning:** Encourage users to pin plugin versions and validate `lockfile` integrity to prevent supply‐chain tampering.

## 6. Configuration Management

- **Secure defaults:** Load configuration from workspace settings or environment variables, but default to read‐only workspace mode.  
- **Validate config:** Enforce schema validation on user‐provided settings. Reject unknown keys and out‐of‐range values.  
- **Environment isolation:** Avoid reading untrusted environment variables. Allow only whitelisted variables (e.g., `LSP_PORT`, `LSP_LOG_LEVEL`).

## 7. Data Protection & Privacy

- **No logging of PII or source code:** Treat all workspace contents as sensitive. Log only abstract metrics (e.g., number of requests, method names).  
- **Secure logging:** Write logs to a protected location with file permissions set to owner‐only. Rotate logs regularly and avoid verbose debug mode in production.
- **Encryption in transit:** For TCP‐based LSP, enforce TLS 1.2+. Disable weaker cipher suites and protocols (SSLv3, TLS 1.0/1.1).

## 8. Dependency & Supply Chain Security

- **Use vetted libraries:** Choose JSON‐RPC, parsing, and cryptography libraries with strong security reputations and regular maintenance.  
- **Lockfiles & reproducible builds:** Commit `package-lock.json`/`yarn.lock` or equivalent to pin transitive dependencies.  
- **Automated scanning:** Integrate Software Composition Analysis (SCA) in CI/CD to detect known CVEs. Block merges on high‐severity alerts.
- **Minimal footprint:** Only include dependencies essential to LSP compliance and analysis. Remove unused packages promptly.

## 9. CI/CD & Infrastructure Hardening

- **Least‐privileged builders:** Run CI pipelines in ephemeral containers with no elevated privileges.  
- **Secrets management:** Store tokens and certificates in a secrets manager (e.g., Vault, GitHub Secrets). Avoid hardcoding in the repo.  
- **Automated security checks:** Integrate linting, SAST, dependency scanning, and fuzz testing for JSON‐RPC handlers.  
- **Secure releases:** Sign binary or package artifacts. Publish checksums and signatures alongside releases.

## 10. Ongoing Maintenance & Incident Response

- **Regular updates:** Keep the core server, dependencies, and sandbox runtimes (if any) up to date.  
- **Vulnerability disclosure policy:** Provide clear instructions in `SECURITY.md` for reporting security issues.  
- **Incident playbook:** Define steps for triaging, patching, and releasing security fixes. Communicate transparently with users.

---

Adherence to these guidelines is mandatory for all contributors. Security is a shared responsibility—whenever in doubt, seek a formal code review or raise an issue for discussion.