# TheSend

为专注而设计的极简博客系统，基于 [Astro](https://astro.build) 构建。

## 快速开始

```bash
npm install
npm run dev
```

访问 http://localhost:4321

## 写文章

在 `src/content/blog/` 目录创建 Markdown 文件：

```markdown
---
title: "文章标题"
description: "简短描述"
date: 2024-01-01
category: "分类"
tags: ["标签1", "标签2"]
showToc: true
---

正文内容...
```

## 命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |

## 许可证

MIT
