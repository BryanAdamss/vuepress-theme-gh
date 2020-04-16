/**
 * @author GuangHui
 * @description 统计阅读时间
 */

const readingTime = require('reading-time')

module.exports = (options, ctx) => {
  return {
    extendPageData($page) {
      const { _strippedContent } = $page

      if (_strippedContent) {
        $page.readingTime = readingTime(_strippedContent).time
        $page.charCount = _strippedContent.length
      }
    },
  }
}
