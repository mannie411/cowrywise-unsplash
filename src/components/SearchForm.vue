<template>
  <div>
    <input v-model="search" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    search: String,
  },
})
export default class SearchForm extends Vue {
  search!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
