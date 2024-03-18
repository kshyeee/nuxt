<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin Page" />
      <PageDescription description="Admin Layout 실습을 위한 페이지 입니다." />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// 해당 admin 레이아웃을 정의하고 싶다면 define page meta 함수를 이용
definePageMeta({
  layout: 'admin',
  // middleware: ['admin-only'], // 미들웨어를 1개를 설정할거라면 'admin-only' 문자열로 넣어도되고, 여러개라면 ['admin-only'] 배열로 설정하면된다.
});
</script>

<style lang="scss" scoped></style>
