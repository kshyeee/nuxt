import { createI18n } from 'vue-i18n'; // vue-i18n은 다국어 처리를 위한 모듈이고 Vuei18n은 이러한 모듈을 vue에서 편하게 사용하게 해주는 라이브러리이다.

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: useCookie('locale').value || useDefaultLocale().value,
    messages: {
      en: {
        home: 'Home',
        about: 'About',
        youtube: 'Youtube',
        admin: 'Admin',
        login: 'Login',
        logout: 'Logout',
      },
      ko: {
        home: '홈',
        about: '어바웃',
        youtube: '유튜브',
        admin: '관리자',
        login: '로그인',
        logout: '로그아웃',
      },
    },
  });

  vueApp.use(i18n);
});
