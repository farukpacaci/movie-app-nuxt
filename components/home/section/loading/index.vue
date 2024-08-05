<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-start justify-start">
    <USkeleton class="h-8 w-72" />
    <div class="h-4" />
    <div class="flex w-full scroll-m-32 gap-5 overflow-scroll">
      <ul v-for="(item, index) in new Array(8)">
        <li :key="index">
          <HomeSectionLoadingCard />
        </li>
      </ul>
    </div>
  </div>
</template>
