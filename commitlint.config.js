module.exports = {
  extends: ['cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        '新增',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
      ],
    ],
    'type-empty': [2, 'always'],
    'subject-full-stop': [0, 'never'],
    'subject-empty': [2, 'always'],
    'subject-case': [0, 'never'],
  },
}
