<script setup lang="ts">
import type { IMovieDetailResponse } from "~/interfaces/api/movie/detail-response";
import type { IMovieReleaseDate } from "~/interfaces/api/movie/movie-id/release-date";
import type { ITvDetailResponse } from "~/interfaces/api/tv/detail-response";
const props = defineProps({
  data: {
    type: Object as PropType<IMovieDetailResponse | ITvDetailResponse>,
    required: true,
  },
});

const { data: releaseDateData } = useFetch<IMovieReleaseDate>(
  `/api/movie/${props.data.id}/release_dates`,
);

const title = ref<string>("");
const releaseDate = ref<string>();
const certification = ref<string>();
const runtime = ref<number>();

onMounted(() => {
  if ("title" in props.data) {
    // IMovieDetailResponse
    title.value = props.data.title;
    releaseDate.value = props.data.release_date;
    runtime.value = props.data.runtime;
  } else {
    // ITvDetailResponse
    title.value = props.data.name;
    releaseDate.value = props.data.first_air_date;
  }
});

watch(releaseDateData, () => {
  if (releaseDateData) {
    certification.value = releaseDateData?.value?.results.find(
      (item) => item.iso_3166_1 === "TR",
    )?.release_dates[0].certification;
  }
});
</script>

<template>
  <div class="relative h-[570px] w-full">
    <NuxtImg
      provider="tmdb"
      :src="data.backdrop_path"
      :alt="data.backdrop_path"
      class="absolute h-full w-full object-cover"
    />
    <div class="absolute h-full w-full bg-black opacity-60" />
    <div class="absolute flex h-full w-full px-[30px] py-10">
      <VideoDetailComponentsHeaderBackdropPoster
        :poster-path="data.poster_path"
      />
      <div class="flex flex-col px-10">
        <!-- Title, Release Year, Genres and Time -->
        <div class="flex flex-wrap gap-x-2 text-4xl text-white">
          <p class="font-bold">{{ title }}</p>
          <p class="opacity-80">({{ releaseDate?.slice(0, 4) }})</p>
        </div>
        <!-- Certification, Release Date and Genres -->
        <div class="flex items-center">
          <!-- Certification -->
          <div
            v-if="certification"
            class="opactiy-60 mr-[7px] rounded-sm border border-white py-1 pl-[0.06em] pr-[0.15em] text-white"
          >
            <p>{{ certification }}</p>
          </div>
          <!-- Release Date -->
          <p class="text-white">
            {{ releaseDate?.replaceAll("-", "/") }}
          </p>
          <!-- Genres -->
          <div v-if="props.data.genres.length !== 0" class="flex items-center">
            <div class="mx-2 size-1 rounded-full bg-white" />
            <p
              v-for="(genre, index) in props.data.genres"
              class="gap-x-1 text-white"
            >
              {{ genre.name }}
              {{ index !== props.data.genres.length - 1 ? "," : "" }}
            </p>
          </div>
          <!-- Runtime -->
          <div v-if="runtime" class="flex items-center">
            <div class="mx-2 size-1 rounded-full bg-white" />
            <p class="text-white">
              {{
                (runtime / 60).toString().split(".")?.[0]
                  ? (runtime / 60).toString().split(".")?.[0] + "h"
                  : ""
              }}
              {{
                (runtime / 60).toString().split(".")?.[1]?.slice(0, 2)
                  ? (runtime / 60).toString().split(".")?.[1]?.slice(0, 2) + "m"
                  : ""
              }}
            </p>
          </div>
        </div>
        <!-- Vote Average -->
        <div
          v-if="props.data.vote_average"
          class="mt-2 flex w-fit items-baseline gap-1 rounded-full px-2 py-1 font-medium text-white"
          :class="props.data.vote_average > 7 ? 'bg-green-800' : 'bg-red-800'"
        >
          <p>
            {{ props.data.vote_average }}
          </p>
          <p class="text-xs font-light">
            ({{ props.data.vote_count ? props.data.vote_count : "-" }})
          </p>
        </div>
        <div class="h-10" />
        <!-- Tagline -->
        <p class="text-sm italic text-white opacity-70">
          {{ props.data.tagline }}
        </p>
        <!-- Overview -->
        <div v-if="props.data.overview" class="mt-2 text-white">
          <p class="text-xl font-semibold">Overview</p>
          <p class="mt-2">{{ props.data.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
