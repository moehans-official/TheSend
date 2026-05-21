# Google SEO 配置指南

## 已完成的 SEO 优化

### 1. 基础 Meta 标签
- [x] Title 和 Description
- [x] Canonical URL
- [x] Robots Meta（支持 noindex/nofollow）
- [x] Author 和 Copyright
- [x] Keywords
- [x] Language
- [x] Theme Color（深色/浅色模式）

### 2. Open Graph
- [x] og:title, og:description
- [x] og:type, og:url
- [x] og:image（1200x630 推荐）
- [x] og:site_name, og:locale
- [x] Article 专用标签（发布时间、作者、标签）

### 3. Twitter Card
- [x] twitter:card（summary_large_image）
- [x] twitter:title, twitter:description
- [x] twitter:image
- [x] twitter:site, twitter:creator

### 4. 结构化数据（Schema.org）
- [x] WebSite 类型（首页）
- [x] BlogPosting 类型（文章页）
- [x] BreadcrumbList（面包屑）
- [x] SearchAction（站内搜索）

### 5. 技术 SEO
- [x] Sitemap 自动生成
- [x] RSS Feed
- [x] robots.txt
- [x] humans.txt
- [x] Canonical URL
- [x] 响应式设计
- [x] 语义化 HTML

### 6. 性能优化
- [x] 预加载关键资源
- [x] DNS 预解析
- [x] 字体预连接
- [x] 骨架屏

---

## 需要配置的 SEO 项

### 1. Google Search Console 验证

编辑 `src/config/site.ts`：

```typescript
seo: {
  // 其他配置...
  
  // Google Search Console 站点验证
  // 获取方式：https://search.google.com/search-console
  // 选择 "HTML 标记" 验证方式，复制 content 属性值
  googleSiteVerification: 'YOUR_GOOGLE_VERIFICATION_CODE',
  
  // Bing Webmaster Tools 验证
  // https://www.bing.com/webmasters
  bingSiteVerification: 'YOUR_BING_VERIFICATION_CODE',
  
  // 百度搜索资源平台验证
  // https://ziyuan.baidu.com/
  baiduSiteVerification: 'YOUR_BAIDU_VERIFICATION_CODE',
}
```

### 2. Open Graph 图片

**推荐尺寸：** 1200 x 630 像素

```typescript
seo: {
  // 默认 OG 图片路径（放在 public 目录下）
  ogImage: '/og-image.png',
}
```

**创建 OG 图片：**
1. 使用 Canva 或 Figma 设计
2. 尺寸：1200 x 630px
3. 格式：PNG 或 JPG
4. 放置在 `public/og-image.png`

### 3. 站点基本信息

```typescript
export const siteConfig = {
  name: 'Your Blog Name',           // 站点名称
  subtitle: 'Your blog subtitle',   // 副标题
  description: 'Site description',  // SEO 描述（150-160字符）
  siteUrl: 'https://yourdomain.com', // 正式域名
  lang: 'zh-CN',                    // 语言
  
  author: {
    name: 'Your Name',              // 作者名
    email: 'you@example.com',
    github: 'https://github.com/you',
    twitter: '@yourhandle',         // Twitter 用户名
  },
}
```

### 4. Twitter 卡片

```typescript
seo: {
  twitterHandle: '@yourhandle',  // Twitter 用户名（带 @）
}
```

### 5. robots.txt

已自动生成在 `public/robots.txt`，修改 `Sitemap` URL：

```
Sitemap: https://yourdomain.com/sitemap-index.xml
```

---

## Google Search Console 配置步骤

### 1. 添加网站
1. 访问 https://search.google.com/search-console
2. 登录 Google 账号
3. 点击 "添加属性"
4. 选择 "网址前缀"，输入：`https://yourdomain.com`

### 2. 验证网站所有权
选择 **HTML 标记** 方式：
```html
<meta name="google-site-verification" content="YOUR_CODE" />
```

复制 `content` 值到 `site.ts` 的 `googleSiteVerification`。

### 3. 提交 Sitemap
1. 在 Search Console 左侧菜单点击 "Sitemap"
2. 添加新的 sitemap：`sitemap-index.xml`
3. 点击 "提交"

### 4. 检查索引状态
- "覆盖率" 报告：查看哪些页面被索引
- "增强功能"：检查结构化数据
- "体验"：Core Web Vitals 性能报告

---

## SEO 最佳实践检查清单

### 内容优化
- [ ] 每篇文章都有唯一的 title（50-60 字符）
- [ ] 每篇文章都有 description（150-160 字符）
- [ ] 使用语义化标题结构（H1-H6）
- [ ] 图片添加 alt 文本
- [ ] 内部链接建设
- [ ] 外部权威链接

### 技术检查
- [ ] HTTPS 启用
- [ ] 移动端适配
- [ ] 页面加载速度 < 3s
- [ ] Core Web Vitals 通过
- [ ] 无重复内容（Canonical URL）
- [ ] 无死链

### 结构化数据
- [ ] WebSite 类型（首页）
- [ ] BlogPosting 类型（文章）
- [ ] BreadcrumbList（面包屑）
- [ ] SearchAction（搜索）

---

## 验证工具

### 1. 富媒体测试结果
https://search.google.com/test/rich-results

测试结构化数据是否正确。

### 2. 移动设备适合性测试
https://search.google.com/test/mobile-friendly

检查移动端适配。

### 3. PageSpeed Insights
https://pagespeed.web.dev/

分析页面速度和 Core Web Vitals。

### 4. Schema Markup Validator
https://validator.schema.org/

验证 Schema.org 结构化数据。

---

## robots.txt 配置

已自动配置，位于 `public/robots.txt`：

```
User-agent: *
Allow: /

# 允许访问
Allow: /blog/
Allow: /archive/
Allow: /search/

# 禁止访问
Disallow: /api/
Disallow: /admin/

# 站点地图
Sitemap: https://yourdomain.com/sitemap-index.xml
```

---

## 常见问题

### Q: 为什么我的网站在 Google 搜不到？
A: 新网站通常需要 1-4 周被索引。确保：
1. 已提交 sitemap
2. 网站可公开访问
3. 有外部链接指向
4. 内容质量高

### Q: 如何加速索引？
A: 
1. 在 Search Console 请求索引
2. 创建高质量内容
3. 分享到社交媒体
4. 建立外部链接

### Q: robots.txt 和 meta robots 有什么区别？
A: 
- `robots.txt`：告诉爬虫哪些页面不要爬取
- `meta robots`：告诉爬虫如何索引已爬取的页面

---

## 文件位置

```
src/
  config/
    site.ts          # SEO 配置
  layouts/
    BaseLayout.astro # SEO Meta 标签
public/
  robots.txt         # 爬虫规则
  humans.txt         # 网站信息
  sitemap-index.xml  # 自动生成
  rss.xml           # 自动生成
```

---

**完成配置后，记得重新构建并部署网站！**
