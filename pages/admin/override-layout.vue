<template>
  <div>
    <NuxtLayout name="admin">
      <template #header>
        <q-header elevated class="bg-primary text-white">
          <q-toolbar>
            <q-toolbar-title>Vue & Nuxt Mastery Admin</q-toolbar-title>
            <q-separator dark vertical />
          </q-toolbar>
        </q-header>
      </template>
      <div class="q-my-xl text-center">
        <PageTitle title="레이아웃 재정의" />
        <PageDescription
          description="Admin Layout 실습을 위한 페이지 입니다."
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  // layout: false // 레이아웃 안보이게하기 위해서는 비활성화 false
});
</script>

<style lang="scss" scoped></style>
