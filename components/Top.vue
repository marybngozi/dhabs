<template>
  <header
    class="relative w-full flex justify-center items-end h-28 md:h-52 md:items-center"
  >
    <div class="w-full flex flex-col justify-end items-center">
      <router-link to="/" class="flex justify-center">
        <Logo class="slidesIn" />
      </router-link>

      <nav class="w-full flex justify-center gap-1 mt-2.5 fadesIns">
        <router-link v-if="pathName != 'about'" class="px-2" to="/about">
          About
        </router-link>

        <span v-if="pathName != 'about'">|</span>

        <router-link v-if="pathName != 'works'" class="px-2" to="/works">
          Works
        </router-link>

        <span v-if="pathName != 'contact' && pathName != 'works'">|</span>

        <router-link v-if="pathName != 'contact'" class="px-2" to="/contact">
          Contact
        </router-link>
      </nav>
    </div>

    <div class="hidden md:block absolute right-20 top-16">
      <SwitchBtn />
    </div>
  </header>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      pathName: this.$nuxt.$route.name,
    };
  },
};
</script>
<style scoped>
a:hover {
  color: var(--font-active);
}
.slidesIn {
  animation: backInDown;
  animation-duration: 1s;
}
.fadesIns {
  animation: fadeIn;
  animation-duration: 3.6s;
}
</style>
