/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import * as i18n from './i18n'

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
  srcExclude: ['**/_include/**', '**/_internal/**']
})
