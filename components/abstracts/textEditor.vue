<template>
  <section class="mx-12 h-96 text-right">
    <ClientOnly>
      <QuillEditor theme="snow" :toolbar="options" />
    </ClientOnly>
  </section>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
let options = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  [{ direction: "rtl" }],
  [{ align: [] }],
  [{ color: [] }, { background: [] }],
];
</script>

<style></style>
