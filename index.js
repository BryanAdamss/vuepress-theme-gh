const path = require('path')
const removeMd = require('remove-markdown')
const readingTime = require('./plugins/reading-time')

module.exports = (themeConfig = {}, ctx) => {
  // 默认标题
  const DEFAULT_NAVS = [
    {
      text: 'Blog',
      link: '/',
    },
    {
      text: 'Posts',
      link: '/posts/',
    },
    {
      text: 'Tag',
      link: '/tag/',
    },
  ]

  const mergedThemeConfig = Object.assign({}, themeConfig, {
    nav: themeConfig.nav || DEFAULT_NAVS,
    summary:
      typeof themeConfig.summary === 'boolean' ? themeConfig.summary : true,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: typeof themeConfig.pwa === 'boolean' ? themeConfig.pwa : true,
  })

  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/posts/',
        // layout: 'IndexPost', defaults to `Layout.vue`
        layout: 'PostPageList',
        itemLayout: 'PostPage',
        frontmatter: { title: '文章' },
        itemPermalink: 'posts/:year/:month/:day/:slug',
        pagination: {
          layout: 'PostPageList',
        },
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
        // layout: 'Tag',  defaults to `FrontmatterKey.vue`
        layout: 'Tags',
        scopeLayout: 'SingleTagList',
        frontmatter: { title: 'Tag' },
        pagination: {
          layout: 'SingleTagList',
        },
      },
    ],
  }

  const { modifyBlogPluginOptions } = mergedThemeConfig

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions

  const plugins = [
    'vuepress-plugin-disqus',
    'vuepress-plugin-seo',
    readingTime,
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-reading-progress',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-nprogress',
    ['@vuepress/plugin-blog', blogPluginOptions],
    [
      '@vuepress/plugin-search',
      {
        searchMaxSuggestions: 10,
      },
    ],
  ]

  if (mergedThemeConfig.socialShare && mergedThemeConfig.socialShareNetworks) {
    plugins.push([
      'vuepress-plugin-social-share',
      { networks: mergedThemeConfig.socialShareNetworks },
    ])
  }

  if (mergedThemeConfig.sitemap && mergedThemeConfig.hostname) {
    plugins.push([
      'vuepress-plugin-sitemap',
      {
        hostname: mergedThemeConfig.hostname,
      },
    ])
  }

  if (mergedThemeConfig.googleAnalytics) {
    plugins.push([
      '@vuepress/plugin-google-analytics',
      {
        ga: mergedThemeConfig.googleAnalytics,
      },
    ])
  }

  if (mergedThemeConfig.pwa) {
    plugins.push([
      '@vuepress/plugin-pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: mergedThemeConfig.paginationComponent
        ? mergedThemeConfig.paginationComponent
        : 'Pagination',
    },
    globalLayout: path.resolve(__dirname, './layouts/GlobalLayoutCustom.vue'),
  }

  /**
   * Generate summary.
   * 生成摘要
   */
  config.extendPageData = function ($page) {
    const strippedContent = $page._strippedContent
    if (!strippedContent) {
      return
    }

    const sanitizedContent = strippedContent.trim().replace(/^#+\s+(.*)/, '')

    if (mergedThemeConfig.summary) {
      $page.summary =
        removeMd(sanitizedContent.slice(0, mergedThemeConfig.summaryLength)) +
        ' ...'
    }

    $page.content = removeMd(sanitizedContent)

    // 挂载最终合并的主题配置
    $page.$mergedThemeConfig = mergedThemeConfig
  }

  return config
}
