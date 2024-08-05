<template>
  <div>
    <AppBar />
    <div class="flex w-full justify-center">
      <div class="bg-red-6 w-full max-w-screen-xl">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
