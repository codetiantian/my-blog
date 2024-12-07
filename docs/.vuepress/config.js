import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/my-blog/',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: 'logo.png',
    repo: 'https://github.com/codetiantian/my-blog.git',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'vue',
        link: '/vue/compatibility'
      }
    ]
  }),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  head: [
    ['link', { rel: 'icon', href: 'logo.png'}]
  ]
})