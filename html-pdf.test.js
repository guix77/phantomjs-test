const fs = require('fs')
const pdf = require('html-pdf')

const html = fs.readFileSync('./assets/pdf.service.unit.test.html', 'utf8')

pdf.create(html, {
  format: 'A4',
  orientation: 'landscape',
  border: '1cm',
  viewportSize: {
    width: 1920,
    height: 1080
  }
}).toFile('./test.pdf', function (err, res) {
  if (err) return console.error(err)
})
