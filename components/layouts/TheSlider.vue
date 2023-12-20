<template>
  <section class="slider container px-12 my-6">
    <div
      class="main-slider h-auto py-3 w-full bg-whiteColor-100 ring-inset shadow-lg rounded-3xl"
    >
      <Carousel :breakpoints="breakpoints">
        <Slide v-for="item in sliderImages" :key="item">
          <div class="carousel__item relative">
            <img :src="item.url" :alt="item.alt" />
            <p class="mx-auto my-2">{{ item.title }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";

import appleId from "../../assets/images/appleId.png";
import appleTv from "../../assets/images/appleTv.svg";
import iPad from "../../assets/images/iPad.svg";
import iPhone from "../../assets/images/iPhone.svg";
import mac from "../../assets/images/mac.svg";
const sliderImages = [
  {
    title: "اپل آیدی",
    url: appleId,
    alt: "اپل آیدی",
  },
  {
    title: "اپل تی وی",
    url: appleTv,
    alt: "اپل تی وی ",
  },
  {
    title: " آیفون",
    url: iPhone,
    alt: " آیفون",
  },
  {
    title: "آی پد",
    url: iPad,
    alt: "آی پد",
  },
  {
    title: "مک",
    url: mac,
    alt: "مک",
  },
  {
    title: "مک",
    url: mac,
    alt: "مک",
  },
  {
    title: "آی پد",
    url: iPad,
    alt: "آی پد",
  },
  {
    title: "اپل آیدی",
    url: appleId,
    alt: "اپل آیدی",
  },
  {
    title: "آی پد",
    url: iPad,
    alt: "آی پد",
  },
];

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 6,
    snapAlign: "start",
  },
  1300: {
    itemsToShow: 8,
    snapAlign: "start",
  },
};
</script>
