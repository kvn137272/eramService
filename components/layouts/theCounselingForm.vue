<template>
  <section class="mx-12 px-8 py-8 mt-16 lg:h-44 flex flex-col justify-center space-y-6 rounded-3xl bg-white">
    <h3 class="text-lg font-extrabold tracking-wider">
      دریافت مشاوره <span class="text-blueColor-500"> رایگان</span>
    </h3>

    <div>
      <form class="flex lg:flex-row flex-col lg:space-y-0 space-y-6">
        <input type="text" placeholder="نام و نام خانوادگی" class="border ml-3 py-3 pr-3 text-sm  placeholder-greyColor-200 rounded-sm"/>
        <input type="email" placeholder="ایمیل" class="border ml-3 py-3 pr-3 text-sm rounded-sm placeholder-greyColor-200"/>
        <input type="number" placeholder="شماره تماس" class="border ml-3 py-3 pr-3 text-sm rounded-sm placeholder-greyColor-200"/>
        <button class="bg-primaryColor py-3 w-24 text-white text-sm">ارسال</button>
      </form>
    </div>
  </section>
</template>
