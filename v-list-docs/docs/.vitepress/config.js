export default {
  title: 'v-list',
  outDir: './dist',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Zhang Fanhang',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'vue2版本', link: '/two' },
      { text: 'vue3版本', link: '/three' },
      { text: 'react版本', link: '/react' },
    ],
    sidebar: [
      {
        text: 'v-list',
        items: [
          { text: 'vue2版本', link: '/two' },
          { text: 'vue3版本', link: '/three' },
          { text: 'react版本', link: '/react' },
        ]
      }
    ],
    siteTitle: '',
    logo: 'https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/VListLogo.PNG',
  },
}
