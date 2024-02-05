<script setup lang="ts">
import { onMounted, ref } from "vue";
import fetchSkins from "./utils/fetchSkins";

const skins = ref<any[]>();

onMounted(async () => (skins.value = await fetchSkins()));
</script>

<template>
  <p v-if="skins" v-for="item in skins">{{ item.name }}</p>
</template>
