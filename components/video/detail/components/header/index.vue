<script setup lang="ts">
import type { PropType } from "vue";
import type { IMovieDetailResponse } from "~/interfaces/api/movie/detail-response";
import type { ITvDetailResponse } from "~/interfaces/api/tv/detail-response";

const props = defineProps({
  data: {
    type: Object as PropType<IMovieDetailResponse | ITvDetailResponse>,
    required: true,
  },
});
</script>

<template>
  <div>
    <VideoDetailComponentsHeaderBackdrop :data="props.data" />
  </div>
</template>
