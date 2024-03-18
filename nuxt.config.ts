// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt', // needed
    '@pinia-plugin-persistedstate/nuxt',
  ],
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
    /* */
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },
  ssr: true,
  app: {
    head: {
      title: 'vue & nuxt 강의',
      meta: [
        { name: 'description', content: '서네가 따라하는 넉스트 강의입니다.' },
      ],
    },
  },
});
