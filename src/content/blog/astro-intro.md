---
title: "Astro 框架介绍"
pubDate: 2026-05-19
description: "Astro 是一个用于构建快速内容网站的现代 Web 框架。"
category: "技术"
tags: ["astro", "framework", "web"]
---

## 什么是 Astro？

Astro 是一个用于构建快速内容网站的现代 Web 框架。它采用岛屿架构（Islands Architecture），默认情况下发送零 JavaScript 到浏览器。

### 主要特点

1. **内容优先**：专为内容丰富的网站设计
2. **服务器优先**：使用服务器端渲染，减少客户端 JavaScript
3. **默认快速**：零 JavaScript 默认设置
4. **易于使用**：使用熟悉的前端语言

## 内容集合

Astro 提供了强大的内容集合功能，可以类型安全地管理 Markdown 内容：

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});
```

## 路由系统

Astro 使用基于文件的路由系统：

- `src/pages/index.astro` -> `/`
- `src/pages/about.astro` -> `/about`
- `src/pages/blog/[slug].astro` -> `/blog/:slug`

## 组件化

支持多种 UI 框架：

- React
- Vue
- Svelte
- Preact
- Solid

```astro
---
import MyComponent from '../components/MyComponent.jsx';
---
<MyComponent client:load />
```