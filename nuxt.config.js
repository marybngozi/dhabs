export default {
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dhabs || UI/UX Designer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Dhabs Uzoh",
        content:
          "Dhabs, Daberechi Uzoh, UI/UX Designer, Product Developer, Brand Developer",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    //Global JS
    script: [
      {
        src: "https://kit.fontawesome.com/90259c5e03.js",
        crossorigin: "anonymous",
      },
    ],
  },

  loading: "~/components/loading.vue",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "animate.css/animate.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vuex-persist", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // postcss: {
    //   plugins: {
    //     "postcss-custom-properties": false,
    //   },
    // },
  },
};
