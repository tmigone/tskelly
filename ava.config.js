export default {
  files: [
    'test/*',
    '!test/fixtures',
    '!test/lib'
  ],
  extensions: [
    'ts'
  ],
  require: [
    'ts-node/register'
  ]
}
