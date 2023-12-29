<template>
  <footer class="px-12 py-24 flex flex-col lg:flex-row gap-10 text-right">
    <div class="flex flex-col flex-1 items-center lg:items-start lg:text-right text-center gap-10 flex-wrap ">
      <NuxtLink to="#" class="flex">
        <span class="inline-block">
          <header-logo />
        </span>

        <h2 class="inline-block mr-4 mt-3 font-bold">ارم سرویس</h2>
      </NuxtLink>
      <div class="font-thin text-greyColor-200 w-full">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است .
      </div>
      <div class="flex gap-3">
        <NuxtLink to="#">
          <div
            class="bg-[#181929] rounded-md p-1 hover:rounded-none transition-all"
          >
            <img
              src="../../assets/images/instagram.png"
              alt="instagram"
              class="w-7"
            />
          </div>
        </NuxtLink>
        <NuxtLink to="#">
          <div
            class="bg-[#181929] rounded-md p-1 hover:rounded-none transition-all"
          >
            <img
              src="../../assets/images/telegram.png"
              alt="telegram"
              class="w-7"
            />
          </div>
        </NuxtLink>
        <NuxtLink to="#">
          <div
            class="bg-[#181929] rounded-md p-1 hover:rounded-none transition-all"
          >
            <img
              src="../../assets/images/whatsapp.png"
              alt="whatsapp"
              class="w-7"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class=" flex flex-col flex-1 gap-8">
      <h2 class="mt-3 lg:text-right text-center ">دسترسی سریع</h2>
      <div class="flex lg:justify-start lg:text-right justify-center text-center gap-10">
        <div class="flex flex-col gap-4">
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >قیمت روز گوشی</NuxtLink
          >
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >گوشی آیفون</NuxtLink
          >
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >گوشی سامسونگ</NuxtLink
          >
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >آیفون 15</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >گوشی شیائومی</NuxtLink
          >
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >مک بوک</NuxtLink
          >
          <NuxtLink to="#" class="font-thin text-greyColor-200"
            >ایرپاد</NuxtLink
          >
          <NuxtLink to="#" class="font-thin text-greyColor-200">آی پد</NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 gap-8">
      <h2 class="mt-3 lg:text-right text-center">پرفروش ترین محصولات</h2>

      <div class="flex flex-col lg:items-start items-center gap-4">
        <NuxtLink to="#" class="font-thin text-greyColor-200"
          >قیمت روز گوشی</NuxtLink
        >
        <NuxtLink to="#" class="font-thin text-greyColor-200"
          >گوشی آیفون</NuxtLink
        >
        <NuxtLink to="#" class="font-thin text-greyColor-200"
          >گوشی سامسونگ</NuxtLink
        >
        <NuxtLink to="#" class="font-thin text-greyColor-200"
          >آیفون 15</NuxtLink
        >
      </div>
    </div>
    <div class="flex flex-col flex-1 gap-8">
      <h2 class="mt-3 lg:text-right text-center">ارتباط با ما</h2>
      <div class="flex flex-col lg:items-start items-center gap-4">
        <NuxtLink to="#" class="font-thin text-greyColor-200"
          >قیمت روز گوشی</NuxtLink
        >
        <NuxtLink to="#" class="font-thin text-greyColor-200"
          >گوشی آیفون</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>