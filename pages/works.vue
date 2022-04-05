<template>
  <div class="body">
    <Top />

    <main class="mt-16 w-5/6 mx-auto">
      <!-- top section -->
      <section class="w-full md:w-7/12">
        <h1 class="text-7xl md:text-9xl">works</h1>
        <p class="t-info">
          I love to design experiences that not only complete the functional
          value but also is loved by people. Currently researching and learning
          about Web3, while creating end to end solution based products.
        </p>
        <br /><br />

        <p>View selected projects below</p>
      </section>

      <!-- projects section -->
      <section id="projects" class="mt-12">
        <div class="block md:flex justify-between">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/images/projects/Kontract.png"
              alt="Kontrack Project"
              class="h-72 w-80 mx-auto"
            />
          </div>

          <div class="w-full md:w-1/2 mt-10 md:mt-0 block md:flex items-center">
            <div>
              <h6 class="text-2xl md:text-2xl">Kontrack</h6>

              <p class="my-4">
                Kontrack is a solution designed for employers and job seekers to
                eliminate the wait time in filling vacant positions and finding
                opportunities and managing temporary employees or jobs.
              </p>

              <router-link class="link-btn text-sm md:text-lg" to="#">
                View Project
              </router-link>
            </div>
          </div>
        </div>

        <div class="block md:flex justify-between mt-28">
          <div class="w-full md:w-1/2">
            <img
              src="@/assets/images/projects/university_suite.png"
              alt="Kontrack Project"
              class="h-72 w-80 mx-auto"
            />
          </div>

          <div class="w-full md:w-1/2 mt-10 md:mt-0 block md:flex items-center">
            <div>
              <h6 class="text-2xl md:text-2xl">University Suite</h6>

              <p class="my-4">
                The university suite was designed and developed to make academic
                and non academic process better and faster for students and
                staff as well in instituions around the country.
              </p>

              <router-link class="link-btn text-sm md:text-lg" to="#">
                View Project
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Bottom class="pt-20 pb-10" />
  </div>
</template>

<script>
export default {
  name: "Works",

  data() {
    return {};
  },
};
</script>
<style scoped>
h1 {
  font-family: "BebasNeue";
  color: var(--font-big);
}
p {
  @apply text-sm md:text-lg;
  font-weight: 350;
  line-height: 21px;
}
h6 {
  font-weight: 750;
  line-height: 29px;
}
.link-btn {
  font-weight: 750;
}
@media (min-width: 768px) {
  #projects > div:nth-child(even) {
    flex-direction: row-reverse;
  }
  p {
    line-height: 27px;
  }
  img {
    width: 600px;
    height: 492px;
  }
}
</style>
