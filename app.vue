<template>
  <div>
    <The-header />
    <the-hero />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import TheHero from "./components/layouts/TheHero.vue";
export default {
  components: {
    TheHeader,
    TheHero
  },
};
</script>
