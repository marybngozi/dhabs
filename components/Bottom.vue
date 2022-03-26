<template>
  <footer
    class="w-5/6 mx-auto flex flex-col gap-14 md:flex-row md:gap-0 md:justify-between"
  >
    <div class="flex justify-center flex-col items-center md:items-start">
      <h6 class="t-gray">Let's connect</h6>
      <div class="flex gap-4 order-1">
        <a
          href="https://twitter.com/marybngozi"
          target="_blank"
          class="social-link"
        >
          <span class="icon">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
        </a>

        <a href="https://twitter.com/marybngozi" target="_blank">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </span>
        </a>
        <a href="https://twitter.com/marybngozi" target="_blank">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </span>
        </a>
        <a href="https://twitter.com/marybngozi" target="_blank">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </span>
        </a>
        <a href="https://twitter.com/marybngozi" target="_blank">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'behance-square']" />
          </span>
        </a>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center md:items-end order-2 md:order-3"
    >
      <p class="t-gray">Say hello</p>
      <p>
        <a href="mailto:uzohdaberechi@gmail.com">uzohdaberechi@gmail.com</a>
      </p>
    </div>

    <div
      class="t-gray flex justify-center items-end order-3 md:order-2 text-xs md:text-sm"
    >
      &copy; {{ new Date().getFullYear() }} Uzoh Dhabs
    </div>
  </footer>
</template>

<script>
export default {
  name: "Bottom",
};
</script>

<style scoped>
h6 {
  font-weight: 750;
}
.t-gray {
  color: var(--font-gray);
}
</style>
