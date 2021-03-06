const html = require('choo/html')
const css = require('scopedify')
const keys = require('../src/keys')

const topView = require('./top')
const aboutView = require('./about')
const scheduleView = require('./schedule')
const newsView = require('./news')
const accessView = require('./access')
const footerView = require('./footer')

const scope = css('./index.css')

module.exports = function mainView (state, emit) {
  return scope(html`
    <body class="root" onload=${emit.bind(null, keys.load)}>
      ${topView(...arguments)}
      ${aboutView(...arguments)}
      ${scheduleView(...arguments)}
      ${newsView(...arguments)}
      ${accessView(...arguments)}
      ${footerView(...arguments)}
    </body>
  `)
}
