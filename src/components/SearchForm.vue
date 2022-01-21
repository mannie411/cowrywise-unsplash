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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-box {
  padding: 0 30px;
}
form {
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  padding-left: 10px;
}

input {
  padding-left: 10px;
  border: none;
  height: 50px;
  width: 100%;
}

input:focus {
  outline: none;
}

.prefix-icon {
  justify-content: center;
  align-items: center;
  padding-left: 5px;
}
.icon {
  width: 22px;
  height: 22px;
}
</style>
