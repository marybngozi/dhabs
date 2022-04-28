<template>
  <div class="body">
    <Top />

    <main class="w-5/6 mx-auto slidesIns">
      <section class="mt-14 md:mt-8 block md:flex justify-between">
        <div class="w-full md:w-4/12 block md:flex items-center">
          <!-- <div class="w-full md:w-2/6 block md:flex items-center"> -->
          <img
            src="@/assets/images/dhabs.png"
            alt="Dhabs Picture"
            class="h-auto w-full m-auto"
          />
        </div>

        <div class="mt-14 md:mt-0 w-full md:w-8/12 pl-0 md:pl-11">
          <h1 class="text-7xl md:text-9xl">About me</h1>

          <article class="text-xs md:text-base mt-5">
            <p>
              My name is Uzoh Daberechi and I'm a Digital Product Designer, I'm
              passionate about improving the lives of others through design.
            </p>
            <br />

            <p>
              I'm a self taught designer and have learnt a lot of the processes,
              concepts and theories of UX/UI and product design through
              workshops, reading blogs and applying them to projects i have
              done. Having an experience in Front-end development coupled with
              UI/UX Design has given me valuable industry exposure to learning
              and working with both designers and engineers. I'm constantly
              learning new things everyday and I love meeting people who are
              motivated and not afraid of sharing their ideas with the world.
            </p>
            <p class="mt-0 md:mt-3">
              Currently, I work with <b>Appmart</b> as the UI/UX designer and
              also as a part-time product designer for <b>Gotahia</b>. I have
              interest in emerging technologies, financial technology, motion
              graphics, photography and animation.
            </p>
            <br />

            <p>
              I am currently based in Abuja, Nigeria, working with people and
              businesses all over the world and I enjoy travelling too!
            </p>
          </article>
        </div>
      </section>

      <section class="mt-16">
        <h3 class="text-center text-2xl md:text-3xl">My Journey</h3>

        <ul class="mt-11 px-0 md:px-10">
          <li class="flex justify-between text-xs md:text-lg mt-4">
            <div>
              <h6>Product Designer</h6>
              <p>Appmart Integrated Ltd</p>
            </div>
            <div class="text-right">
              <h6>Jul. 2021 - Present</h6>
              <p>Abuja, Nigeria</p>
            </div>
          </li>

          <li class="flex justify-between text-xs md:text-lg mt-4">
            <div>
              <h6>Product Designer (Per Time)</h6>
              <p>Gotahia</p>
            </div>
            <div class="text-right">
              <h6>Jan. 2021 - Present</h6>
              <p>Lagos, Nigeria</p>
            </div>
          </li>

          <li class="flex justify-between text-xs md:text-lg mt-4">
            <div>
              <h6>Creative Designer</h6>
              <p>JIggle</p>
            </div>
            <div class="text-right">
              <h6>Jan. 2021 - Apr. 2021</h6>
              <p>Akwa Ibom, Nigeria</p>
            </div>
          </li>

          <li class="flex justify-between text-xs md:text-lg mt-4">
            <div>
              <h6>Creative Designer</h6>
              <p>Innovation Growth Hub</p>
            </div>
            <div class="text-right">
              <h6>Jan. 2017 - Dec. 2020</h6>
              <p>Aba, Nigeria</p>
            </div>
          </li>

          <li class="flex justify-between text-xs md:text-lg mt-4">
            <div>
              <h6>Contract UI/UX Designer</h6>
              <p>Enyimba Football Club, Aba</p>
            </div>
            <div class="text-right">
              <h6>Oct. 2019 - Mar. 2020</h6>
              <p>Aba, Nigeria</p>
            </div>
          </li>

          <li class="flex justify-between text-xs md:text-lg mt-4">
            <div>
              <h6>Graphics Designer</h6>
              <p>Capacity Development Int'l</p>
            </div>
            <div class="text-right">
              <h6>Jan. 2016 - Dec. 2017</h6>
              <p>Umuahia, Nigeria</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="mt-11 flex justify-center">
        <button class="px-12 py-4 text-sm md:text-lg">Download Resume</button>
      </section>
    </main>

    <Bottom class="pt-16 pb-12" />
  </div>
</template>

<script>
export default {
  name: "About",

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
article {
  color: var(--font-main);
  font-weight: 350;
  line-height: 21px;
  text-align: justify;
}
h3,
h6 {
  font-weight: 750;
}
li {
  border-bottom: 0.5px solid #3f3f3e;
}
li p {
  font-weight: 350;
  margin: 10px 0;
  color: var(--font-gray);
}
button {
  border: 0.6px solid var(--font-main);
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 400;
  transition-property: color, background-color;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
button:hover {
  background-color: var(--font-active);
  color: var(--bg-color);
  transition-property: color, background-color;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
@media (min-width: 768px) {
  article {
    line-height: 28px;
  }
  img {
    width: 474px;
    height: 564px;
  }
}
.slidesIns {
  animation: slideInLeft;
  animation-duration: 1s;
}
</style>
