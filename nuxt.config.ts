// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { dir: "rtl", lang: "fa" },
    },
  },
  modules: ["nuxt-icon", "vue3-carousel-nuxt"],
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      "postcss-import": true,
      tailwindcss: {},
      "tailwindcss/nesting": {},
      autoprefixer: {},
    },
  },
});
