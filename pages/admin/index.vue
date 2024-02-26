<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">Admin Page</div>
      <p class="q-mt-sm text-grey-8">Admin Layout 실습을 위한 페이지 입니다.</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// 해당 admin 레이아웃을 정의하고 싶다면 define page meta 함수를 이용
definePageMeta({
  layout: 'admin',
});
</script>

<style lang="scss" scoped></style>
