<template>
  <footer
    class="w-5/6 mx-auto flex flex-col gap-14 md:flex-row md:gap-0 md:justify-between slidesBts"
  >
    <div class="flex justify-center flex-col items-center md:items-start">
      <h6 class="t-gray">Let's connect</h6>
      <div class="flex gap-5 order-1">
        <a
          href="mailto:uzohdaberechi@gmail.com"
          target="_blank"
          class="social-link"
        >
          <span class="icon">
            <i class="fa-solid fa-envelope"></i>
          </span>
        </a>

        <a
          href="https://twitter.com/UzohDhabs"
          target="_blank"
          class="social-link"
        >
          <span class="icon">
            <i class="fa-brands fa-twitter"></i>
          </span>
        </a>
        <a
          href="https://instagram.com/uzohdhabs"
          target="_blank"
          class="social-link"
        >
          <span class="icon">
            <i class="fa-brands fa-instagram"></i>
          </span>
        </a>
        <a
          href="https://linkedin.com/in/uzohdhabslinked"
          target="_blank"
          class="social-link"
        >
          <span class="icon">
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </a>
        <a
          href="https://behance.net/uzohdhabs"
          target="_blank"
          class="social-link"
        >
          <span class="icon">
            <i class="fa-brands fa-behance-square"></i>
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
.social-link {
  text-decoration: none;
}
.social-link:hover,
.social-link:active {
  color: var(--font-active);
  transition: color 0.5s;
}
.slidesBts {
  animation: slideInRight;
  animation-duration: 1.3s;
}
@media (min-width: 768px) {
  .slidesBts {
    animation: slideInUp;
    animation-duration: 1.4s;
  }
}
</style>
