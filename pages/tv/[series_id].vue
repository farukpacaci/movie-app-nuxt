<script setup lang="ts">
import type { ITvDetailResponse } from "~/interfaces/api/tv/detail-response";

const router = useRouter();

const { data, status, error } = useFetch<ITvDetailResponse>(
  `/api/tv/${router.currentRoute.value.params.series_id}`,
);

useHead({
  title: "TV Series",
});

watch(data, () => {
  if (data.value && data.value.name) {
    useHead({
      title: data.value.name,
    });
  }
});

onUnmounted(() => {
  useHead({
    title: "The Movie Database",
  });
});
</script>

<template>
  <VideoDetailLoading v-if="status === 'pending'" />
  <VideoDetailError v-if="status === 'error'" />
  <VideoDetail v-if="data" :data="data" />
</template>
