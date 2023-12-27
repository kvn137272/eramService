<template>
  <div class="headerNavParent flex my-auto">
    <NuxtLink to="#"> مک</NuxtLink>
    <NuxtLink to="#"> آیفون</NuxtLink>
    <NuxtLink to="#"> اپل واچ</NuxtLink>
    <NuxtLink to="#"> ایر پاد</NuxtLink>
    <NuxtLink to="#"> اپل تی وی</NuxtLink>
    <NuxtLink to="#"> اکسسوری</NuxtLink>
    <NuxtLink to="#"> اپل آیدی</NuxtLink>
    <NuxtLink to="#"> شیائومی</NuxtLink>
    <NuxtLink to="#"> سامسونگ</NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.headerNavParent {
  a {
    @apply mx-3 text-center font-bold text-greyColor-200 hover:text-black;
  }
}
</style>
