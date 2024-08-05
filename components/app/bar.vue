<template>
  <div class="flex w-full justify-center bg-tprimary text-white">
    <UDashboardNavbar class="w-full max-w-screen-xl border-none">
      <template #left>
        <ULink to="/">
          <NuxtImg
            src="/logos/alt-short-blue.svg"
            alt="Logo"
            width="154"
            height="20"
          />
        </ULink>
      </template>
      <template #right>
        <UColorModeToggle />
      </template>
    </UDashboardNavbar>
  </div>
</template>
