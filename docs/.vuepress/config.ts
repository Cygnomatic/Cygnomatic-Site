import { UserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

const config: UserConfig = {
  title: 'Cygnomatic',
  description: 'Cygnomatic Lab',
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  theme: recoTheme({
    author: 'Cygnomatic Lab',
    componentsDir: 'docs/.vuepress/components',
  }),
}

export default config
