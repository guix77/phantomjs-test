const fs = require('fs')
const pdf = require('html-pdf')

const html = fs.readFileSync('./assets/pdf.service.unit.test.html', 'utf8')

// const wrapperStyle = 'transform: scale(0.53);'
const wrapperStyle = 'font-size: 8px;'

const finalHtml = `<html><head><style>img {height: 50px !important; }</style></head><body><div style="${wrapperStyle}">${html}</div></body></html>`

pdf.create(finalHtml, {
  format: 'A4',
  orientation: 'landscape',
  border: '1cm'
}).toFile('./test.pdf', function (err, res) {
  if (err) return console.error(err)
})
