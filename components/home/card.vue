<script setup lang="ts">
import type { PropType } from "vue";
import type { IUndetailedResults } from "~/interfaces/api/undetailed-results";

defineProps({
  movie: {
    type: Object as PropType<IUndetailedResults>,
    required: true,
  },
});

const imageLoading: Ref<boolean> = ref<boolean>(true);

function handleImageLoaded() {
  imageLoading.value = false;
}
</script>

<template>
  <ULink :to="`${movie.title ? 'movie' : 'tv'}/${movie.id}`">
    <div class="w-[150px] hover:scale-x-110">
      <div class="relative h-[225px] w-full rounded-lg">
        <NuxtImg
          provider="tmdb"
          :src="movie.poster_path"
          :alt="movie.title"
          class="absolute h-full w-full rounded-lg object-cover"
          @load="handleImageLoaded"
        />
        <USkeleton
          v-if="imageLoading"
          class="absolute z-10 h-full w-full rounded-lg"
        />
      </div>
      <div class="px-2 pt-3">
        <p class="line-clamp-2 min-h-9 text-base">
          {{ movie.title || movie.name || "-" }}
        </p>
        <p class="text-base font-extralight">
          {{ movie.release_date || movie.first_air_date || "-" }}
        </p>
      </div>
    </div>
  </ULink>
</template>
