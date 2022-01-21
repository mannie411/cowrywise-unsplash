<template>
  <skeleton-box
    v-if="loading"
    height="300px"
    :style="{ borderRadius: '10px 10px 0 0' }"
    class="gray-light"
  />
  <slot v-else name="photo" />

  <div class="info shadow-overlay">
    <skeleton-box v-if="loading" width="70%" :style="{ marginBottom: '5px' }" />
    <p v-else>
      <slot name="name" />
    </p>
    <skeleton-box v-if="loading" width="50%" />
    <p v-else>
      <slot name="location" />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkeletonBox from "@/components/Skeleton.vue";

export default defineComponent({
  name: "Card",

  components: {
    SkeletonBox,
  },

  props: {
    loading: {
      default: false,
      type: Boolean,
    },
  },
});
</script>
