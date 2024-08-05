<script setup lang="ts">
import type { IFooterCategory } from "~/interfaces/app/footer-category";

const items: IFooterCategory[] = [
  {
    title: "The Basics",
    items: [
      {
        label: "About TMDB",
        to: "/",
      },
      {
        label: "Contact Us",
        to: "/",
      },
      {
        label: "Support Forums",
        to: "/",
      },
      {
        label: "API",
        to: "/",
      },
      {
        label: "System Status",
        to: "/",
      },
    ],
  },
  {
    title: "Get Involved",
    items: [
      {
        label: "Contribution Bible",
        to: "/",
      },
      {
        label: "3rd Party Applications",
        to: "/",
      },
      {
        label: "Add New Movie",
        to: "/",
      },
      {
        label: "Add New TV Show",
        to: "/",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Guidelines",
        to: "/",
      },
      {
        label: "Discussions",
        to: "/",
      },
      {
        label: "Leaderboard",
        to: "/",
      },
      {
        label: "Twitter",
        to: "/",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        label: "Terms of Use",
        to: "/",
      },
      {
        label: "API Terms of Use",
        to: "/",
      },
      {
        label: "Privacy Policy",
        to: "/",
      },
    ],
  },
];
</script>

<template>
  <div class="mt-8 flex w-full items-center justify-center bg-tprimary pb-20">
    <div class="flex w-full max-w-screen-md items-start justify-between py-10">
      <!-- Logo and User Button -->
      <div>
        <NuxtImg
          src="/logos/primary-full-blue.svg"
          alt="logo"
          background="bg-transparent"
          class="w-[130px]"
        />
        <div class="h-10" />
        <UButton
          label="Sign Up!"
          color="white"
          class="font-bold text-tsecondary"
          to="/"
          size="xl"
        />
      </div>
      <div v-for="item in items" class="mt-10">
        <AppFooterCategories :category="item" />
      </div>
    </div>
  </div>
</template>
