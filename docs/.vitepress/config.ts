import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ChatNeo',
  description: '跨平台 AI 聊天客户端',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    logo: '/images/logo.png',

    nav: [
      { text: '基础', link: '/basic/getting-started', activeMatch: '/basic/' },
      { text: '进阶', link: '/advanced/tools', activeMatch: '/advanced/' },
      {
        text: '下载',
        link: 'https://github.com/0xxb/chatneo-releases/releases',
      },
    ],

    sidebar: {
      '/basic/': [
        {
          text: '基础',
          items: [
            { text: '快速上手', link: '/basic/getting-started' },
            { text: '提供商配置', link: '/basic/providers' },
            { text: '对话功能', link: '/basic/chat' },
            { text: '外观设置', link: '/basic/appearance' },
          ],
        },
      ],
      '/advanced/': [
        {
          text: '进阶',
          items: [
            { text: '内置工具', link: '/advanced/tools' },
            { text: 'MCP 服务', link: '/advanced/mcp' },
            { text: '知识库 (RAG)', link: '/advanced/knowledge-base' },
            { text: '插件', link: '/advanced/plugins' },
            { text: '语音交互', link: '/advanced/voice' },
            { text: '图片与视频生成', link: '/advanced/media-generation' },
            { text: '导出与截图', link: '/advanced/export' },
            { text: '备份与同步', link: '/advanced/backup' },
            { text: '快捷键', link: '/advanced/shortcuts' },
            { text: '模型参数', link: '/advanced/model-params' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xxb/chatneo-releases' },
    ],

    footer: {
      copyright: `All rights reserved © 2018-${new Date().getFullYear()} <a href="https://huohuastudio.com">Spark Studio</a>`
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/0xxb/chatneo-releases/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: {
      label: '页面导航',
    },
  },
})
