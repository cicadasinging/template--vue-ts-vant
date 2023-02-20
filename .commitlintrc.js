// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert", "wip"]],
    "subject-case": [0],
  },
};
