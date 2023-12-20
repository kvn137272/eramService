<template>
  <div>
    <header
      class="flex flex-row-reverse my-5  mx-16  xs:justify-between xs:mx-10"
    >
      <div class="flex flex-row-reverse gap-4">
        <header-logo />
        <header-hamberger-icon class="xl:hidden" />
      </div>
      <header-nav class="xl:block xs:hidden" />
      <div class="flex flex-row-reverse gap-2">
        <header-search-button />
        <header-basket-button />
      </div>
    </header>
  </div>
</template>

