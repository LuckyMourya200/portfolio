# PR Review & Code Analysis Workflow

This workflow outlines the step-by-step procedure for evaluating codebase modifications before commits are finalized or pull requests are submitted.

---

## 🏃 Workflow Steps

### Step 1: Code-Review-Graph Initialization
Ensure the codebase knowledge graph is initialized or refreshed to reflect any recent manual changes.
- **Action**: Run `code-review-graph build` or call the `build_or_update_graph_tool`.
- **Validation**: Call `list_graph_stats_tool` or run `code-review-graph status` to ensure the database successfully compiled.

### Step 2: Local Delta Analysis
Understand what files and functions were modified, and the immediate impact of those changes.
- **Action**: Use the `review-delta` skill or check git status and diff.
- **Tools**: Call `detect_changes_tool` to list files and functions modified relative to the last commit.

### Step 3: Call-Chain and Impact Assessment
Check what callers are affected by modified functions to ensure no breaking changes are introduced.
- **Action**: Run the `get_impact_radius_tool` or `get_affected_flows_tool` on any modified functions.
- **Evaluation**: Verify if any upstream dependencies are broken or if they need matching signature updates.

### Step 4: Quality Checks
Verify the code is syntax-clean and meets standards.
- **Action**: Run `npm run lint`.
- **Verification**: Ensure no ESLint rules are violated. If warnings exist, resolve them.
