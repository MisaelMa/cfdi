module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        // https://commitlint.js.org/#/reference-rules
        // Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
        // Applicable always|never: never inverts the rule.
        // Value: value to use for this rule.
        "subject-case": [2, 'always', ['lower-case', 'sentence-case']],
        "body-max-line-length": [2, 'always', 200]
    }
}