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
    'type-empty': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
  },
}
