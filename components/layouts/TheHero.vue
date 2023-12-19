<template>
  <div class="hero-container xs:px-11">
    <div class="hero-child">
      <div class="hero-right-part">
        <div class="hero-introduction w-auto">
          <p>
            <span>ارم سرویس</span>,مرجع تخصصی فروش <br />و خدمات محصولات اپل
          </p>
        </div>
        <div class="hero-right-part-bottom">
          <div class="showProductsBtn">
            <button class="button">
              <Icon name="ep:arrow-left" class="text-white" />
              مشاهده محصولات
            </button>
          </div>
          <div class="phone-number my-auto">
            <Icon
              name="gg:phone"
              class="text-blueColor-500 mx-2 -mt-1"
              width="20"
              height="20"
            />
            <p class="inline-block p-0">۰۹۳۸۰۷۲۳۵۸۷</p>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="../../assets/images/hero-image.svg" />
      </div>
      <div class="hero-left-part">
        <div class="hero-left-part-items">
          <div class="left-parts-icon">
            <img src="../../assets/images/truck.svg" alt="" />
          </div>
          <div class="left-parts-content">
            <h5 class="-mt-3 mb-1">ارسال فوری</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
        <div class="hero-left-part-items">
          <div class="left-parts-icon">
            <img src="../../assets/images/box-check.svg" alt="" />
          </div>
          <div class="left-parts-content">
            <h5 class="-mt-3 mb-1">بسنه بندی ایمن</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
        <div class="hero-left-part-items">
          <div class="left-parts-icon">
            <Icon
              name="heroicons:check-badge-20-solid"
              class="text-[#6D7CAA]"
              width="35"
              height="35"
            />
          </div>
          <div class="left-parts-content">
            <h5 class="-mt-3 mb-1">ضمانت اصالت کالا</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero-container {
  .hero-child {
    @apply rounded-3xl flex py-20 bg-whiteColor-100 ring-inset shadow-md  xs:flex-col xs:text-center xs:gap-20 lg:flex-row-reverse  ;
    .hero-right-part {
      @apply flex flex-col my-auto gap-12 xl:w-7/12 lg:w-full;
      .hero-introduction {
        @apply lg:w-full;
        p {
          @apply text-2xl font-bold leading-relaxed xl:text-center lg:text-center ;
          span {
            @apply text-blueColor-500;
          }
        }
      }
      .hero-right-part-bottom {
        @apply flex flex-row-reverse gap-6 py-0 my-0 xs:justify-center xs:gap-7 lg:gap-3;
        .showProductsBtn {
          @apply flex;
          .button {
            @apply bg-primaryColor text-white px-5 py-2 rounded-md lg:justify-center;
          }
        }
      }
    }
    .hero-image {
      @apply  lg:object-cover w-7/12 xs:mx-auto;
    }
    .hero-left-part {
      @apply flex flex-col justify-center text-center  gap-8 ;
      .hero-left-part-items {
        @apply flex flex-row-reverse gap-3 xs:px-10 xs:w-11/12 md:w-8/12 lg:w-96  xs:mx-auto ;
        .left-parts-content {
          @apply text-right  xs:w-full ;
          p {
            @apply text-sm font-light text-greyText-100;
          }
        }
      }
    }
  }
}
</style>
