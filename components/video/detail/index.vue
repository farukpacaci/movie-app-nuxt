<script setup lang="ts">
import type { PropType } from "vue";
import type { IMovieDetailResponse } from "~/interfaces/api/movie/detail-response";
import type { ITvDetailResponse } from "~/interfaces/api/tv/detail-response";

const props = defineProps({
  data: Object as PropType<IMovieDetailResponse | ITvDetailResponse>,
});
</script>

<template>
  <div class="flex flex-1 flex-col">
    <VideoDetailComponentsNavBar />
    <VideoDetailComponentsHeader :data="props.data!" />
  </div>
</template>
