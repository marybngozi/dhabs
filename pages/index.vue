<template>
  <div id="body" class="body">
    <div class="flex justify-center mt-16">
      <Logo class="" />
    </div>

    <div class="flex items-center justify-center">
      <p class="text-sm md:text-xl">
        Hi, my name is Dhabs, I'm a Ui/Ux designer
      </p>
    </div>

    <nav class="flex flex-col justify-center">
      <div>
        <router-link class="link-big text-4xl md:text-5xl" to="/about"
          >About me</router-link
        >
      </div>
      <div>
        <router-link class="link-big text-4xl md:text-5xl" to="/"
          >Works</router-link
        >
      </div>
      <div>
        <router-link class="link-big text-4xl md:text-5xl" to="/"
          >Contact</router-link
        >
      </div>
    </nav>

    <div class="mx-auto">
      <SwitchBtn />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style scoped>
.body {
  /* margin-top: 70px; */
  display: grid;
  height: 100vh;
  overflow-y: hidden;
  grid-template-rows: 20vh 10vh 50vh 10vh;
  justify-content: center;
  text-align: center;
}
p {
  font-family: "SFGothican";
  font-style: normal;
  font-weight: 700;
  color: #3f3f3e;
}
nav div {
  height: calc(40vh / 3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-big {
  font-family: "BebasNeue";
  text-transform: uppercase;
}
</style>
