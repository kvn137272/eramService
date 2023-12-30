<template>
  <section class="px-12  mt-36 ">
    <div class="theBrands-title">
      <h2 class="text-2xl font-extralight text-center">
        خرید بر اساس <span class="text-blueColor-500">برترین برند ها</span> 
      </h2>
    </div>

    <div
      class="theBrands-items-wrapper   mx-auto mt-14 flex md:flex-row-reverse xs:flex-col xs:items-center gap-10  lg:justify-around md:justify-between lg:w-5/12 md:w-7/12 relative"
    >
      <NuxtLink to="#" >
        <div class="theBrands-items  relative group">
          <div
            class="theBrands-items-bg w-28 h-28 absolute -z-10 top-0 left-0 rounded-full bg-greyColor-300 group-hover:bg-black"
          >
          </div>
          <img
            src="../../assets/images/appleBrand.png"
            class="w-28 mb-4"
            alt="apple brand"
          />
          <p class="text-center">اپل</p>
        </div>
      </NuxtLink>

      <NuxtLink to="#">
        <div class="theBrands-items relative group">
           <div
            class="theBrands-items-bg w-28 h-28 absolute -z-10 top-0 left-0 rounded-full bg-greyColor-300 group-hover:bg-black"
          >
          </div>
          <img
            src="../../assets/images/samsungBrand.png"
            class="w-28 mb-4"
            alt="samsung brand"
          />
          <p class="text-center">سامسونگ</p>
        </div>
      </NuxtLink>
      <NuxtLink to="#">
        <div class="theBrands-items relative group">
           <div
            class="theBrands-items-bg w-28 h-28 absolute -z-10 top-0 left-0 rounded-full bg-greyColor-300 group-hover:bg-black"
          >
          </div>
          <img
            src="../../assets/images/shiaomiBrand.png"
            class="w-28 mb-4"
            alt="apple brand"
          />
          <p class="text-center">شیائومی</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script></script>

<style></style>
