const removeMd = require('remove-markdown')

const path = require('path')

module.exports = (themeConfig, ctx) => {
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

  themeConfig = Object.assign(themeConfig, {
    nav: themeConfig.nav || DEFAULT_NAVS,
    summary:
      typeof themeConfig.summary === 'boolean' ? themeConfig.summary : true,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: typeof themeConfig.pwa === 'boolean' ? themeConfig.pwa : true,
    heroImage:
      themeConfig.heroImage || 'https://source.unsplash.com/random/800x600',
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

  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions =
    typeof modifyBlogPluginOptions === 'function'
      ? modifyBlogPluginOptions(defaultBlogPluginOptions)
      : defaultBlogPluginOptions

  const plugins = [
    'disqus',
    // TODO:研究下seo报错原因
    // 'seo',
    'reading-time',
    'smooth-scroll',
    'reading-progress',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    ['@vuepress/blog', blogPluginOptions],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
  ]

  if (themeConfig.socialShare && themeConfig.socialShareNetworks) {
    plugins.push([
      'social-share',
      { networks: themeConfig.socialShareNetworks },
    ])
  }

  if (themeConfig.sitemap && themeConfig.hostname) {
    plugins.push([
      'sitemap',
      {
        hostname: themeConfig.hostname,
      },
    ])
  }

  if (themeConfig.googleAnalytics) {
    plugins.push([
      '@vuepress/google-analytics',
      {
        ga: themeConfig.googleAnalytics,
      },
    ])
  }

  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
    globalLayout: path.resolve(__dirname, './layouts/GlobalLayoutCustom.vue'),
  }

  /**
   * Generate summary.
   */
  config.extendPageData = function (pageCtx) {
    const strippedContent = pageCtx._strippedContent
    if (!strippedContent) {
      return
    }

    const sanitizedContent = strippedContent.trim().replace(/^#+\s+(.*)/, '')

    if (themeConfig.summary) {
      pageCtx.summary =
        removeMd(sanitizedContent.slice(0, themeConfig.summaryLength)) + ' ...'
    }

    pageCtx.content = removeMd(sanitizedContent)
  }

  return config
}
