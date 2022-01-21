<template>
  <div v-if="loading">
    <div class="grid">
      <div v-for="p in 9" :key="p" class="card shadow gray-light">
        <card :loading="loading" />
      </div>
    </div>
  </div>

  <div class="grid" v-else>
    <div
      class="card shadow gray-light"
      v-for="(photo, idx) in photos"
      :key="idx"
      @click="showPhotoModal(photo)"
      :style="{
        backgroundImage: `url(${photo.urls.regular})`,
      }"
    >
      <card>
        <template v-slot:photo>
          <img
            :src="photo?.urls?.thumb"
            alt="photo?.user.name"
            class="gray-light"
          />
        </template>
        <template v-slot:name>
          {{ photo?.user?.name }}
        </template>

        <template v-slot:location>
          {{ photo?.user.location }}
        </template>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { apiService, baseUrl } from "@/services/api";
import Card from "@/components/Card.vue";
import Photo from "@/model/photo";

export default defineComponent({
  name: "Home",

  components: {
    Card,
  },

  computed: {
    routeName() {
      return this.$route.name?.toString();
    },
  },

  created() {
    switch (this.routeName) {
      case "Search":
        this.searchPhotos();
        break;

      default:
        this.getPhotos();
        break;
    }
  },

  data() {
    return {
      photos: [],
      loading: true,
    };
  },

  emits: ["modalEvent"],

  methods: {
    ...mapMutations(["TOOGLE_PHOTOMODAL"]),

    async getPhotos() {
      try {
        const { results } = await apiService<never>(
          `${baseUrl}/search/photos?page=1&per_page=9&query=African`
        );
        this.photos = results;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async searchPhotos() {
      const { query } = this.$route.query;
      try {
        const { results } = await apiService<never>(
          `${baseUrl}/search/photos?page=1&per_page=9&query=${
            query?.toString() ?? "African"
          }`
        );
        this.photos = results;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    showPhotoModal(photo: Photo) {
      this.$emit("modalEvent", photo);
      this.TOOGLE_PHOTOMODAL();
    },
  },
});
</script>
