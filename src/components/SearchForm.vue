<template>
  <div class="form-box">
    <form @submit.prevent="searchPhoto" class="white flex shadow">
      <div class="flex prefix-icon">
        <img src="@/assets/icons8-search.svg" alt="" class="icon" />
      </div>
      <input v-model="search" ref="input" placeholder="Search photos" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchForm",

  data() {
    return { search: "" };
  },
  emits: ["searchPhoto"],
  methods: {
    searchPhoto() {
      this.$emit("searchPhoto", this.search);
      this.$router.push({ path: "search", query: { query: this.search } });
    },
  },
});
</script>
