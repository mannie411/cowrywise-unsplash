<template>
  <div>
    <img :src="photo?.urls?.regular" :alt="photo?.user?.name" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Photo from "@/model/photo";

export default defineComponent({
  name: "PhotoModal",

  props: {
    photo: { type: Object as PropType<Photo>, required: true },
  },
});
</script>

<style></style>
