<template>
  <div>
    <form @submit.prevent="searchPhoto">
      <input v-model="search" ref="input" />
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

  methods: {
    searchPhoto() {
      this.$router.push({ path: "search", query: { query: this.search } });
    },
  },

  computed: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
