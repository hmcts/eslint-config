const defaults = require('./index');

module.exports = {
  extends: defaults.extends,
  rules: Object.assign({}, defaults.rules, {
    'arrow-body-style': 'off',
    'newline-per-chained-call': 'off'
  })
}
