<template>
  <div id="nav">
    <SearchForm />
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SearchForm from "@/components/SearchForm.vue";

@Options({
  components: {
    SearchForm,
  },
})
export default class App extends Vue {}
</script>

<style></style>
