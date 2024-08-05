<script setup lang="ts">
import type { ISwitchItem } from "~/interfaces/switch-item";
import type { PropType } from "vue";
import type { HomeCategories } from "~/enums/home";
import type { IUndetailedResults } from "~/interfaces/api/undetailed-results";

defineProps({
  category: {
    type: String as PropType<HomeCategories>,
    required: true,
  },
  switchItems: {
    type: Array as PropType<ISwitchItem[]>,
    required: false,
  },
  cards: {
    type: Array as PropType<IUndetailedResults[]>,
    required: true,
  },
  backgroundUrl: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="h-[373px] w-full">
    <div class="flex items-center gap-5">
      <HomeTitle :title="category" />
      <HomeSwitch
        v-if="switchItems"
        :items="switchItems"
        :category="category"
      />
    </div>
    <div class="h-5" />
    <!-- Cards -->
    <div class="flex w-full scroll-m-32 gap-5 overflow-x-scroll">
      <div v-for="card in cards">
        <HomeCard :movie="card" />
      </div>
    </div>
  </div>
</template>
