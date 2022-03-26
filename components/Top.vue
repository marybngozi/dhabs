<template>
  <header class="w-full flex justify-center items-center">
    <div class="w-full flex flex-col justify-center items-center">
      <router-link to="/" class="flex justify-center">
        <Logo />
      </router-link>
      <nav class="w-full flex justify-center gap-1 mt-2.5">
        <router-link class="px-2 ml-3.5" to="/works">Works</router-link>
        <span>|</span>
        <router-link class="px-2" to="/contact">Contact</router-link>
      </nav>
    </div>

    <div class="hidden md:block">
      <SwitchBtn />
    </div>
  </header>
</template>

<script>
export default {
  name: "Top",
};
</script>
<style scoped></style>
