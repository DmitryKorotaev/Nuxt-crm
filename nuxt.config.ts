// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  pages: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
      },
    ],
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
          "Crimson Pro": {
            wght: "200..900",
            ital: "200..700",
          },
        },
      },
    ],
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "Ui",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
});
