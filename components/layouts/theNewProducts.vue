<template>
  <section class="newProducts  px-12  ">
    <div class="newProducts-title">
      <div>
        <p><span>جدید ترین</span> محصولات اپل</p>
      </div>
      <div>
        <NuxtLink to="#">
          <Icon name="line-md:chevron-left" />مشاهده همه
        </NuxtLink>
      </div>
    </div>
    <div class="newProducts-main">
      <div
        class="p-5 bg-white rounded-3xl flex-col shadow-lg xl:col-span-2 xl:row-span-6 lg:col-span-5 lg:row-span-2 md:col-span-5 sm:col-span-10 sm:row-span-1 "
      >
        <div>
          <h4 class="text-sm text-right text-greyColor-100 mb-3">آیفون</h4>
          <p class="font-bold text-right mb-3">آیفون 15 پرومکس (نات اکتیو)</p>
          <div class="flex flex-row-reverse justify-between">
            <p class="text-greyColor-100 inline text-right text-sm">
              فروش تمامی سری های آیفون 15 با ریجیستر
            </p>
            <NuxtLink to="#" class="text-sm">
              <Icon name="line-md:chevron-left" />
              مشاهده
            </NuxtLink>
          </div>
          <img
            src="../../assets/images/iphone15.svg"
            class="object-fill lg:w-64  sm:h-64 sm:w-32 xs:h-52 mx-auto mt-9"
          />
        </div>
        <div></div>
      </div>
      <div
        class="text-right shadow-lg p-5 xl:col-span-2 xl:row-span-2 lg:col-span-4 lg:row-span-1 md:col-span-5 md:row-span-1 sm:col-span-10 sm:row-span-1 sm:h-auto xs:h-[300px]  rounded-3xl relative overflow-y-hidden bg-black"
      >
        <img
          src="../../assets/images/appleWatchMain.svg"
          class="absolute xl:left-0 xl:-bottom-8 lg:-bottom-11 lg:left-0 md:bottom-0 md:left-0 md:translate-x-0 md:w-full md:rounded-3xl sm:w-44 sm:translate-x-[-50%] sm:bottom-6 sm:left-[50%]  xs:left-0 xs:bottom-0"
          alt=""
        />
        <h4 class="mb-3 text-sm text-greyColor-100">اپل واچ</h4>
        <p class="mb-3 relative z-1 text-white">اپل واچ اولترا</p>
        <div class="flex flex-row-reverse justify-between relative">
          <p
            class="text-whiteColor-50 font-thin inline text-right text-sm absolute"
          >
            فروش تمامی سری های آیفون 15 با ریجیستر
          </p>
          <NuxtLink to="#" class="text-whiteColor-50 text-sm absolute left-0">
            <Icon name="line-md:chevron-left" />
            مشاهده
          </NuxtLink>
        </div>
      </div>
      <div
        class="bg-white text-white shadow-lg p-5 xl:col-span-2 xl:row-span-4 lg:col-span-4 lg:row-span-1 md:col-span-5 sm:col-span-10 sm:row-span-1 sm:h-auto xs:h-[300px]  rounded-3xl"
      >
        <h4 class="mb-3 text-sm text-right text-greyColor-100">اپل واچ</h4>
        <p class="mb-3 text-right text-black font-bold">اپل واچ اولترا</p>
        <div class="flex flex-row-reverse justify-between">
          <p class="text-greyColor-100 text-sm">
            فروش تمامی سری های آیفون 15 با ریجیستر
          </p>
          <NuxtLink to="#" class="text-black text-sm">
            <Icon name="line-md:chevron-left" />
            مشاهده
          </NuxtLink>
        </div>
      </div>
      <div
        class="bg-white shadow-lg p-5 text-black xl:col-span-2 xl:row-span-4 lg:col-span-5 lg:row-span-1 md:col-span-5 sm:col-span-10 sm:row-span-1 sm:h-auto xs:h-[300px]  rounded-3xl relative"
      >
        <img
          src="../../assets/images/macBookAir.png"
          class="rounded-3xl absolute  xl:bottom-[-10px]  lg:bottom-3  z-10 xl:w-64 xl:h-56 lg:w-36 lg:h-28  md:w-52 sm:w-48 xs:w-48  xs:left-[50%] xs:translate-x-[-50%] sm:bottom-0 xs:bottom-0"
          alt="mac book air"
        />
        <h4 class="mb-3 text-sm text-right text-greyColor-100">مک بوک</h4>
        <p class="mb-3 text-right text-black font-bold">مک بوک ایر</p>
        <div class="flex flex-row-reverse  justify-between">
          <p class="text-greyColor-100 inline text-sm" dir="rtl">
            فروش تمامی سری های M2 با گارانتی شرکتی
          </p>
          <NuxtLink to="#" class="text-black text-sm">
            <Icon name="line-md:chevron-left" />
            مشاهده
          </NuxtLink>
        </div>
      </div>
      <div
        class="bg-black shadow-lg p-5 text-white xl:col-span-2 xl:row-span-2 lg:col-span-4 lg:row-span-0 md:col-span-10 md:row-span-0 sm:col-span-10 sm:row-span-1 sm:h-auto xs:h-[300px]  rounded-3xl relative"
      >
        <img
          src="../../assets/images/iPadPro.png"
          class="rounded-3xl absolute left-3 z-10 xl:h-36 xl:w-36 lg:h-28 lg:w-32 md:w-52 md:h-48 sm:h-40 xs:h-32  xl:left-20 lg:bottom-3  md:bottom-3 xs:left-[50%] xs:translate-x-[-50%] sm:bottom-10 xs:bottom-0"
          alt="mac book air"
        />

        <h4 class="mb-3 text-sm text-right text-greyColor-100">مک بوک</h4>
        <p class="mb-3 text-right text-white font-bold">مک بوک ایر</p>
        <div
          class="flex xl:flex-col flex-row-reverse  xl:items-end lg:flex-row-reverse  xs:justify-between shadow-lg"
        >
          <p class="text-whiteColor-50 font-extralight text-sm mb-3 ">
            فروش تمامی سری های M2 با گارانتی شرکتی
          </p>
          <NuxtLink to="#" class="text-whiteColor-50 text-sm mb-3">
            <Icon name="line-md:chevron-left" />
            مشاهده
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.newProducts-title {
  @apply flex flex-row-reverse justify-between h-16 mt-20;
  p {
    @apply text-2xl font-extralight;
    span {
      @apply text-blueColor-500;
    }
  }
  a {
    @apply text-sm hover:opacity-70;
  }
}

.newProducts-main {
  @apply grid xl:grid-cols-6 xl:grid-rows-6 gap-3 lg:grid-cols-9  md:grid-cols-10 md:grid-rows-2 sm:grid-cols-10 sm:grid-rows-4 xs:grid-rows-none xs:grid-cols-none;
}
</style>
