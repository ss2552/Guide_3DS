/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import * as i18n from './i18n'

process.env.VITE_EXTRA_EXTENSIONS = 'ini,gm9'

export default defineConfig({
  title: "3DS Hacks Guide",
  description: "A complete guide to 3DS custom firmware",
  head: [
    ['link', { rel: 'icon', href: '/images/site-config/favicon.ico' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-760Y60FQ3T' }],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-760Y60FQ3T');`]
  ],
  locales: {
    root: i18n.en_US
  },
  themeConfig: {
    outline: {
      level: 'deep'
    },
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/MWxPgEp' },
      { icon: 'github', link: 'https://github.com/hacks-guide/Guide_3DS' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        }
      ]
    }
  },
  srcExclude: [
    '**/_include/**',
    '**/_internal/**',
    'af_ZA/**',
    'ar_SA/**',
    'bg_BG/**',
    'ca_ES/**',
    'cs_CZ/**',
    'da_DK/**',
    'de_DE/**',
    'el_GR/**',
    'en_PT/**',
    'es_ES/**',
    'et_EE/**',
    'fi_FI/**',
    'fr_FR/**',
    'he_IL/**',
    'hr_HR/**',
    'hu_HU/**',
    'id_ID/**',
    'it_IT/**',
    'ja_JP/**',
    'ko_KR/**',
    'ms_MY/**',
    'nl_NL/**',
    'no_NO/**',
    'pl_PL/**',
    'pt_BR/**',
    'pt_PT/**',
    'ro_RO/**',
    'ru_RU/**',
    'sr_SP/**',
    'sv_SE/**',
    'th_TH/**',
    'tr_TR/**',
    'uk_UA/**',
    'vi_VN/**',
    'zh_CN/**',
    'zh_TW/**'
  ]
})
