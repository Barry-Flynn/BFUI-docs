import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'Guide',
      children: [
        '/en/guide/',
        '/en/guide/getting-started',
        '/en/guide/design-concepts',
        '/en/guide/faq',
        '/en/guide/i18n',
        '/en/guide/contributing',
        '/en/guide/changelog',
      ],
    },
  ],
}