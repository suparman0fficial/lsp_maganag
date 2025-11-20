# Project Requirements Document for lsp_maganag

## 1. Project Overview

lsp_maganag is an open-source, language-agnostic skeleton for building and managing Language Server Protocol (LSP) servers. It aims to give developers a clear starting point for creating LSP servers or tooling by handling the low-level protocol details—connection management, JSON-RPC messaging, and essential method dispatch—so they can focus on language analysis and custom features. By providing a minimal but complete foundation, lsp_maganag solves the common pain of reinventing boilerplate code and wiring whenever you start a new LSP project.

This project is being built to speed up LSP-based integrations in editors and IDEs, to foster a plugin ecosystem, and to enforce consistent best practices. Key objectives include: 1) a working LSP server skeleton that supports initialization over stdio or TCP, 2) handlers for core methods such as hover, completion, definition, and diagnostics, 3) an abstraction layer for parsing multiple languages, 4) a dynamic configuration and extension system, and 5) a test suite with example workspaces. Success will be measured by a fully compliant LSP handshake, correct method responses in tests, and ease of adding new languages or plugins.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (First Version)**
- README, `.gitignore`, and `LICENSE` setup
- Basic project structure in TypeScript with a Node.js environment
- Core LSP server skeleton handling JSON-RPC over stdio/TCP
- Implementation of essential LSP methods:
  - textDocument/hover
  - textDocument/completion
  - textDocument/definition
  - textDocument/publishDiagnostics
- Language-agnostic analysis layer interface (parsing, AST, token streams)
- Configuration loader (workspace settings, environment variables)
- Extension API for registering new handlers or overriding defaults
- Automated test framework (unit and integration tests)
- Example workspaces demonstrating JSON, Markdown, or placeholder languages

**Out-of-Scope (Later Phases)**
- Advanced LSP features (rename, code actions, formatting, workspaceSymbols)
- Language-specific plugins beyond example stubs
- Performance tuning for large files or complex grammars
- Graphical user interfaces or editor integrations (beyond standard LSP client support)
- Publishing to language marketplaces or registries

## 3. User Flow

A developer clones the `lsp_maganag` repository, runs `npm install`, and inspects the `README.md` for quickstart instructions. They then create a workspace configuration file (e.g., `.lspconfig.json`) to define parser settings or plugin paths. By running `npm run start -- --stdio` or `--tcp`, the developer starts the server. The server logs connection details and waits for a client (editor or CLI) to connect via the chosen transport.

Once a client connects, the developer’s editor sends an `initialize` request. The server responds with `InitializeResult`, advertising hover, completion, definition, and diagnostic capabilities. In the editor, as the user hovers over code, requests flow through the JSON-RPC layer into the analysis interface, which returns hover text. Similarly, typing triggers completion, clicking a symbol triggers a definition lookup, and real-time diagnostics appear as red underlines. Behind the scenes, tests in the `/tests` folder automatically validate each method’s behavior against example workspaces.

## 4. Core Features

- **Project Initialization**: Scripts to scaffold files, enforce `.gitignore`, and set MIT license.
- **LSP Server Skeleton**: Connection manager for stdio/TCP, JSON-RPC dispatcher, logging.
- **Initialization Handler**: Parses `initialize` params, returns server capabilities.
- **Method Handlers**:
  - `textDocument/hover`
  - `textDocument/completion`
  - `textDocument/definition`
  - `textDocument/publishDiagnostics`
- **Analysis Layer**: Abstract parser interface for tokenization, AST construction, symbol resolution.
- **Configuration Module**: Reads workspace settings, environment variables, merges defaults.
- **Extension Framework**: API for plugins to register or override protocol handlers.
- **Automated Testing**: Jest-based unit and integration tests, example workspaces under `/examples`.

## 5. Tech Stack & Tools

- **Language & Runtime**: TypeScript on Node.js (v14+)
- **LSP Library**: `vscode-languageserver` npm package for JSON-RPC and protocol types
- **Parser Framework**: Pluggable—initial stub, with recommendations to use [Tree-sitter](https://tree-sitter.github.io/) in future
- **Testing**: Jest for unit/integration tests
- **Code Quality**: ESLint (with TypeScript rules), Prettier for formatting
- **Tooling & IDE**: VSCode recommended; supports debugging via `launch.json`
- **Version Control**: Git with a standard `.gitignore`

## 6. Non-Functional Requirements

- **Performance**: Method handlers should respond under 100ms for typical small files.
- **Security**: No arbitrary code execution; parser runs in a sandboxed manner.
- **Compliance**: Fully adhere to the LSP JSON-RPC 3.0 specification.
- **Usability**: Clear startup logs, human-readable error messages, self-healing reconnection on dropped stdio streams.
- **Cross-Platform**: Support Windows, macOS, and Linux environments.

## 7. Constraints & Assumptions

- Node.js v14 or higher is available in the environment.
- Clients will support LSP over stdio or TCP.
- Tree-sitter or other parsers are optional—initial analysis layer is a stub.
- Plugin authors will follow the provided Extension API (no dynamic code loading outside that scope).
- The project structure and naming conventions will remain stable for initial versions.

## 8. Known Issues & Potential Pitfalls

- **JSON-RPC Stream Framing**: Improper header parsing can break communication. Mitigation: use well-tested library (`vscode-languageserver`).
- **Asynchronous Concurrency**: Race conditions when handling multiple requests. Mitigation: queue requests or use per-document locking.
- **Large File Handling**: Without incremental parsing, large files may cause slow diagnostics. Mitigation: plan for incremental AST updates in a later phase.
- **Plugin Isolation**: A misbehaving extension could crash the server. Mitigation: wrap plugin calls in try/catch and log errors without stopping the server.
- **Version Mismatches**: Clients and server spec versions must align. Mitigation: include capability negotiation and warnings if versions differ.

---

This PRD lays out a clear roadmap for lsp_maganag’s first release. It defines what the AI or any developer needs to build a minimal, compliant, and extensible Language Server Protocol foundation without ambiguity. Subsequent technical documents (Tech Stack, Frontend/Backend Structure, App Flow, File Structure, IDE Rules) can now be drafted based on these requirements.