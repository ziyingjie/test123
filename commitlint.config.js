module.exports = {
  extends: ['cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    'type-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
  },
}
