<script setup lang="ts">
import type { PropType } from "vue";
import { HomeCategories } from "~/enums/home";
import type { ISwitchItem } from "~/interfaces/switch-item";

const homeStore = useHomeStore();

const props = defineProps({
  items: {
    type: Array as PropType<ISwitchItem[]>,
    required: true,
  },
  category: {
    type: String as PropType<HomeCategories>,
    required: true,
  },
});

function handleSelected(value: string) {
  switch (props.category) {
    case HomeCategories.TRENDING:
      homeStore.setSelectedSwitch(
        "selectedSwitchTrending",
        value as "day" | "week",
      );
      break;
    case HomeCategories.FREE_TO_WATCH:
      homeStore.setSelectedSwitch(
        "selectedSwitchFreeToWatch",
        value as "movie" | "tv",
      );
      break;
    case HomeCategories.WHATS_POPULAR:
      homeStore.setSelectedSwitch(
        "selectedSwitchWhatsPopular",
        value as "movie" | "tv",
      );
      break;
    default:
      break;
  }
}

function getSelectedValue(): string {
  switch (props.category) {
    case HomeCategories.TRENDING:
      return homeStore.selectedSwitchTrending;
    case HomeCategories.FREE_TO_WATCH:
      return homeStore.selectedSwitchFreeToWatch;
    case HomeCategories.WHATS_POPULAR:
      return homeStore.selectedSwitchWhatsPopular;
    default:
      return "";
  }
}
</script>

<template>
  <ul class="flex rounded-3xl border-2 border-tprimary dark:border-tertiary">
    <li v-for="item in props.items" :key="item.value">
      <button @click="() => handleSelected(item.value)">
        <div
          class="rounded-3xl"
          :class="`${getSelectedValue() === item.value ? 'bg-tprimary font-semibold text-white dark:bg-tertiary' : null}`"
        >
          <p class="px-5 py-2">{{ item.label }}</p>
        </div>
      </button>
    </li>
  </ul>
</template>
