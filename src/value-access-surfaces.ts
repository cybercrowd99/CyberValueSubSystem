/**
 * VALUE — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by VALUE.
 *
 * Ownership boundary:
 *
 *   VALUE
 *    │
 *    ├── VALUE-DEFINITION
 *    ├── VALUE-IDENTITY
 *    ├── VALUE-CONTINUITY
 *    └── VALUE-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform value definitions
 * - enrich evidence
 * - create relationships
 * - transfer ownership
 *
 * It only declares the VALUE access-surface structure.
 */

export default {
  value: {
    definition: "VALUE-DEFINITION",
    identity: "VALUE-IDENTITY",
    continuity: "VALUE-CONTINUITY",
    evidence: "VALUE-EVIDENCE",
  },
};
