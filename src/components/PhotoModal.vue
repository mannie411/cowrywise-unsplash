<template>
  <div class="overlay gray-dark2"></div>
  <div class="modal-content">
    <div class="close" @click="closeModal">
      <img src="@/assets/close-x.svg" alt="" srcset="" />
    </div>
    <div class="modal-card shadow white">
      <img :src="photo?.urls?.regular" :alt="photo?.user?.name" />
      <div class="info">
        <p>{{ photo?.user?.name }}</p>
        <p>{{ photo?.user?.location }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Photo from "@/model/photo";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "PhotoModal",

  props: {
    photo: { type: Object as PropType<Photo>, required: true },
  },

  methods: {
    ...mapMutations(["TOOGLE_PHOTOMODAL"]),
    closeModal() {
      this.TOOGLE_PHOTOMODAL();
    },
  },
});
</script>
