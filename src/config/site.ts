export const siteConfig = {
  // 基础信息
  name: 'TheSend',
  subtitle: '记录思考与技术的文字空间',
  description: '基于 Astro 的极简博客系统，专注于提供纯粹的阅读体验',
  
  // 作者信息
  author: {
    name: 'Your Name',
    email: 'your@email.com',
    github: 'https://github.com/yourusername',
    twitter: '',
    avatar: '',
  },
  
  // Logo 和 Favicon
  branding: {
    logo: {
      light: '',
      dark: '',
      alt: 'TheSend Logo',
    },
    favicon: {
      svg: '',
      ico: '',
      png16: '',
      png32: '',
      apple: '',
      manifest: '',
    },
  },
  
  // 站点 URL
  siteUrl: 'https://example.com',
  lang: 'zh-CN',
  
  // 导航配置
  navigation: [
    { href: '/', label: '文章' },
    { href: '/archive', label: '归档' },
    { href: '/search', label: '搜索' },
    { href: '/about', label: '关于' },
  ],
  
  // 页脚配置
  footer: {
    copyright: `© ${new Date().getFullYear()}`,
    poweredBy: 'Built with Astro',
  },
  
  // 功能开关
  features: {
    toc: true,
    search: true,
    rss: true,
    sitemap: true,
    readingTime: true,
    wordCount: true,
    darkMode: true,
    backToTop: true,
  },
  
  // 分页配置
  pagination: {
    postsPerPage: 10,
  },
  
  // 代码高亮配置
  codeHighlight: {
    theme: 'github-light',
    darkTheme: 'github-dark',
  },
  
  // 社交链接
  social: {
    rss: true,
    github: 'https://github.com/yourusername',
    twitter: '',
    email: 'your@email.com',
  },
  
  // SEO 配置 - Google 优化
  seo: {
    // 默认 OpenGraph 图片
    ogImage: '',
    
    // Twitter 用户名
    twitterHandle: '',
    
    // Google Search Console 站点验证
    googleSiteVerification: '',
    
    // Bing 站点验证
    bingSiteVerification: '',
    
    // Baidu 站点验证
    baiduSiteVerification: '',
    
    // 默认作者
    author: 'Your Name',
    
    // 默认关键词
    keywords: ['blog', 'astro', 'tech', '极简主义'],
    
    // 主题色（用于 PWA 和浏览器主题）
    themeColor: '#1a1a1a',
    
    // 背景色
    backgroundColor: '#fefefe',
    
    // RSS 订阅地址
    rss: '/rss.xml',
    
    // 搜索引擎索引设置
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },
};

export const { name, subtitle, description, author, siteUrl, lang, navigation, footer, features, branding, seo } = siteConfig;
