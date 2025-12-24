<template>
  <div>
    <h1>create-liff-app</h1>
    <p v-if="message">{{ message }}</p>
    <p v-if="error">
      <code>{{ error }}</code>
    </p>
    <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
      LIFF Documentation
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import liff from "@line/liff";

const message = ref("");
const error = ref("");

onMounted(() => {
  liff
    .init({
      liffId: "2008763114-mG22THtj"
    })
    .then(() => {
      message.value = "LIFF init succeeded.";
    })
    .catch((e: Error) => {
      message.value = "LIFF init failed.";
      error.value = `${e}`;
    });
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
