import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '使用指南',
      children: [
        '/zh/guide/',
        '/zh/guide/getting-started',
        '/zh/guide/design-concepts',
        '/zh/guide/faq',
        '/zh/guide/i18n',
        '/zh/guide/contributing',
        '/zh/guide/changelog',
      ],
    },
  ],
}