<template>
  <div class="body">
    <Top />

    <main class="w-5/6 mx-auto mt-10 md:mt-16 block md:flex justify-between">
      <div
        class="w-full md:w-4/6 pr-7 block md:flex flex-col justify-center slidesRights"
      >
        <h2 class="text-2xl md:text-3xl mb-7">Say hello <span>👋</span></h2>

        <p class="mb-2">
          Want to have a chat with me about design, UX, a project, career,
          surviving in this country (lol), talk about movies, or just buy me a
          cup of coffee?
        </p>
        <br />

        <p>
          Shoot me an email
          <a class="t-yellow" href="mailto:uzohdaberechi@gmail.com"
            >uzohdaberechi@gmail.com</a
          >
        </p>
        <br />

        <p class="mb-5">
          Or connect with me on all socials
          <span class="t-yellow">@uzohdhabs</span>
        </p>

        <p>Attributes:</p>
        <p>
          Frontend development by:
          <a class="t-yellow" href="https://marybngozi.herokuapp.com/">
            MaryBlessing
          </a>
        </p>
      </div>

      <div class="mt-14 md:mt-0 w-full md:w-2/6 slidesLefts">
        <img
          src="@/assets/images/dhabs_emoji.svg"
          alt="Dhabs Emoji"
          class="w-64 h-64 md:w-96 md:h-96 mx-auto"
        />
      </div>
    </main>

    <Bottom class="pt-16 pb-10" />
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {};
  },
};
</script>
<style scoped>
h2,
.t-yellow {
  font-weight: 750;
}
h2 span {
  font-size: 32px;
}
p {
  font-weight: 350;
  @apply text-xs md:text-lg;
  line-height: 18px;
}
.t-yellow {
  color: var(--font-yellow);
}
.slidesLefts {
  animation: slideInLeft;
  animation-duration: 1.3s;
}
.slidesRights {
  animation: slideInRight;
  animation-duration: 1.3s;
}
@media (min-width: 768px) {
  p {
    line-height: 27px;
  }
  .slidesRights {
    animation: slideInLeft;
    animation-duration: 1.4s;
  }
  .slidesLefts {
    animation: slideInRight;
    animation-duration: 1.4s;
  }
}
</style>
