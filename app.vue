<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Vue & Nuxt Mastery Class');
const description = ref(
  '짐코딩과 함께 Vue3 기본부터 실전, 활용! 그리고 넉스트 Framework까지 함께 배워봐요',
);
useHead({
  title,
  meta: [{ name: 'description', content: description }],
});
</script>
