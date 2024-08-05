<script setup lang="ts">
import type { IMovieDetailResponse } from "~/interfaces/api/movie/detail-response";

const router = useRouter();

const { data, status } = useFetch<IMovieDetailResponse>(
  `/api/movie/${router.currentRoute.value.params.movie_id}`,
);

useHead({
  title: "Movie",
});

watch(data, () => {
  if (data.value && data.value.title) {
    useHead({
      title: data.value.title,
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
  <VideoDetail v-if="data && status === 'success'" :data="data" />
</template>
