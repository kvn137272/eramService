<template>
  <section
    class="mx-12 px-8 py-12 flex flex-col justify-center gap-14 relative rounded-3xl bg-white"
  >
    <div class="absolute left-0 top-0 w-1/3 invisible md:visible">
      <img src="../../assets/images/test-image.png" />
    </div>
    <div class="flex flex-col items-center md:items-start gap-5 ">
      <div class="w-72 px-8 md:p-0">
        <p class="font-bold text-xl leading-10">
          <span class="text-blue-500">ارم سرویس</span> ,مرجع تخصصی فروش و خدمات
          و محصولات شیائومی
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-3">
        <NuxtLink
          class="border px-1 md:px-3 text-sm py-2 bg-redColor-200 rounded-md text-whiteColor-100 ml-5"
        >
          مشاهده محصولات
          <Icon name="iconamoon:arrow-left-2-thin" />
        </NuxtLink>
        <p class="inline-block font-bold self-center">
          09398769854
          <Icon
            name="eva:phone-call-outline"
            class="text-redColor-200 text-lg mr-1"
          />
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-14">
      <div class="flex justify-start gap-2 w-60">
        <!-- ICON PART -->
        <div>
          <Icon
            name="ph:seal-check-light"
            class="text-redColor-200 mt-4"
            width="25"
            height="25"
          />
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-bold">ضمانت اصالت کالا</p>
          <p class="text-sm text-greyColor-200">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
          </p>
        </div>
      </div>
      <div class="flex justify-start gap-2 w-60">
        <!-- ICON PART -->
        <div>
          <Icon
            name="mdi:package-variant-closed-delivered"
            class="text-redColor-200 mt-4"
            width="25"
            height="25"
          />
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-bold">ضمانت اصالت کالا</p>
          <p class="text-sm text-greyColor-200">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
          </p>
        </div>
      </div>
      <div class="flex justify-start gap-2 w-60">
        <!-- ICON PART -->
        <div>
          <Icon
            name="iconoir:delivery-truck"
            class="text-redColor-200 mt-4"
            width="25"
            height="25"
          />
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-bold">ضمانت اصالت کالا</p>
          <p class="text-sm text-greyColor-200">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
