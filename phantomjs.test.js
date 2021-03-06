const phantom = require('phantom')

const test = async () => {
  const instance = await phantom.create()
  const page = await instance.createPage()
  page.property('viewportSize', {
    width: 1011,
    height: 768
  })
  const openStatus = await page.open('https://github.com')
  const renderStatus = await page.render('test.png')
  await instance.exit()
}

test()
