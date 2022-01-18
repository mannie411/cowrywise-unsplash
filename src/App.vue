<template>
  <div class="nav">
    <SearchForm />
  </div>
  <div v-show="photoModal">
    <PhotoModal :photo="photo" />
  </div>
  <div>
    <router-view @photo-event="photoModalEvent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import SearchForm from "@/components/SearchForm.vue";
import PhotoModal from "@/components/PhotoModal.vue";
import Photo from "./model/photo";

export default defineComponent({
  name: "App",
  components: {
    SearchForm,
    PhotoModal,
  },
  data() {
    return {
      photo: {},
    };
  },
  methods: {
    photoModalEvent(photo: Photo) {
      this.photo = photo;
    },
  },

  computed: {
    ...mapState(["photoModal"]),
  },
});
</script>

<style>
.nav {
  background-color: #dde2e9;
}
</style>
