<template>
  <span :style="{ height, width }" class="skeletonBox" />
</template>

<script lang="ts">
export default {
  name: `SkeletonBox`,
  props: {
    height: {
      default: `1em`,
      type: String,
    },
    width: {
      default: "100%",
      type: String,
    },
  },
};
</script>
