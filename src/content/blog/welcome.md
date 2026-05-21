---
title: "欢迎来到 TheSend"
pubDate: 2026-05-20
description: "这是 TheSend 博客的第一篇文章，介绍博客系统的特性和使用方法。"
category: "技术"
tags: ["astro", "blog", "markdown"]
---

## 关于 TheSend

TheSend 是一个基于 Astro 框架开发的纯静态博客系统，采用 2000 年代风格的黑白极简设计。

### 主要特性

- **纯静态生成**：使用 Astro 构建，无需服务器端运行时
- **Markdown 支持**：使用 Markdown 编写文章，支持代码高亮
- **LaTeX 公式**：支持数学公式渲染
- **极简设计**：黑白配色，阅读优先

## 开始使用

要创建新文章，只需在 `src/content/blog/` 目录下创建 Markdown 文件：

```markdown
---
title: "文章标题"
pubDate: 2026-05-20
category: "分类"
tags: ["标签1", "标签2"]
---

文章内容...
```

## 代码示例

```javascript
console.log('Hello, TheSend!');
```

## 数学公式

行内公式：$E = mc^2$

块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 结语

希望你喜欢这个简洁的博客系统！