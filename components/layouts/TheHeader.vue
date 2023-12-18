<template>
  <div>
    <header class="flex flex-row-reverse my-5 justify-around">
      <div class="flex flex-row-reverse gap-4">
        <logo />
        <header-hamberger-icon />
      </div>
      <hedaer-nav class="lg:block xs:hidden" />
      <div class="flex flex-row-reverse gap-2">
        <header-search-button />
        <header-basket-button />
      </div>
    </header>
  </div>
</template>

<script>
import Logo from "../abstracts/HeaderLogo.vue";
import HedaerNav from "../abstracts/HeaderNav.vue";

export default {
  components: { Logo, HedaerNav }
};
</script>
