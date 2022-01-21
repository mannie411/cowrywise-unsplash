<template>
  <div class="nav bg-blue">
    <div class="container flex flex-column">
      <template v-if="isSearch">
        <h3 :style="{ fontSize: '30px' }" class="blue-dark">
          Searching for "<span class="blue-light2">{{ keyword }}</span
          >"
        </h3>
      </template>
      <template v-else>
        <SearchForm @searchPhoto="searchPhoto" />
      </template>
    </div>
  </div>
  <div class="modal" v-show="photoModal">
    <PhotoModal :photo="photo" />
  </div>
  <div class="container overlap">
    <router-view :key="$route.path" @modalEvent="photoModalEvent" />
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

  computed: {
    ...mapState(["photoModal"]),
    routeName() {
      return this.$route.name?.toString();
    },
  },

  mounted() {
    if (this.routeName === "Search") this.searchPhoto;
  },

  data() {
    return {
      photo: {},
      isSearch: false,
      keyword: "",
    };
  },

  methods: {
    photoModalEvent(photo: Photo) {
      this.photo = photo;
    },

    searchPhoto(word: string) {
      this.isSearch = true;
      this.keyword = word;
    },
  },

  watch: {
    "$route.name"(route) {
      route === "Search" ? (this.isSearch = true) : (this.isSearch = false);
    },
  },
});
</script>
