import { UserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

const config: UserConfig = {
  title: 'Cygnomatic',
  description: 'Cygnomatic Lab',
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  theme: recoTheme({
    author: 'Cygnomatic Lab',
    componentsDir: 'docs/.vuepress/components',
    friendshipLinks: [
      {
        title: "Jerry Faraday's Blog",
        logo: 'https://jerryfaraday.github.io/avatar/JerryFaraday.jpg',
        link: 'https://jerryfaraday.github.io/'
      },
      {
        title: 'Richard Yang',
        logo: 'https://avatars.githubusercontent.com/u/23440907?v=4',
        link: 'https://github.com/yang-zhongtian'
      },
    ],
  }),
}

export default config
