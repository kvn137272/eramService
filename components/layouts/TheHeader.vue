<template>
  <div>
    <header
      class="flex flex-row-reverse my-5  mx-16  xs:justify-between xs:mx-10"
    >
      <div class="flex flex-row-reverse gap-4">
        <logo />
        <header-hamberger-icon class="xl:hidden" />
      </div>
      <hedaer-nav class="xl:block xs:hidden" />
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
  components: { Logo, HedaerNav },
};
</script>
