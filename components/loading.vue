<template>
  <div v-if="loading" class="body flex justify-center items-center">
    <div class="w-4/5 md:w-2/5 flex flex-col items-center">
      <Logo :loading="loading" />

      <p class="my-3">
        Brainstorming
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",

  data() {
    return { loading: false };
  },

  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
      }, 500);

      try {
      } catch (error) {}
    },
  },
};
</script>
<style scoped>
.body {
  height: 100vh;
  overflow: hidden;
}
p {
  font-size: 18px;
  font-weight: 750;
  line-height: 31px;
  color: #161515;
}
</style>
