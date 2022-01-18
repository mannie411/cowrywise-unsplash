<template>
  <div>
    <div v-for="(photo, idx) in photos" :key="idx">
      <Card :photo="photo" @click="showPhotoModal(photo)" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { apiService, baseUrl } from "@/services/api";
import Card from "@/components/Card.vue";
import { mapMutations } from "vuex";
import Photo from "@/model/photo";

export default defineComponent({
  name: "Search",

  components: {
    Card,
  },

  data() {
    return { photos: [] };
  },

  emits: ["photo-event"],

  created() {
    this.searchPhoto();
  },

  methods: {
    ...mapMutations(["TOOGLE_PHOTOMODAL"]),

    searchPhoto() {
      const { query } = this.$route.query;
      apiService<never>(
        `${baseUrl}/search/photos?page=1&query=${query ?? "African"}`
      )
        .then((data) => {
          const { results } = data;
          this.photos = results;
        })
        .catch((e: Error) => {
          /* show error message */
          console.log(e);
        });
    },

    showPhotoModal(photo: Photo) {
      this.$emit("photo-event", photo);
      this.TOOGLE_PHOTOMODAL();
    },
  },
});
</script>
<style scoped></style>
