<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";
import fetchSkins from "./utils/fetchSkins";
import Skin from "./models/skin";
import SkinCard from "./components/SkinCard.vue";
import SearchBar from "./components/SearchBar.vue";

const skins = ref<Skin[]>();

const searchQuery = ref("");

onMounted(async () => (skins.value = await fetchSkins()));

watch(
  searchQuery,
  async () => (skins.value = await fetchSkins(searchQuery.value)),
);

provide("searchQuery", searchQuery);
</script>

<template>
  <div class="mx-auto max-w-[1400px] py-14">
    <div class="flex justify-center pb-10">
      <SearchBar />
    </div>
    <div v-auto-animate class="flex w-full flex-wrap justify-center gap-7">
      <SkinCard
        v-if="skins"
        v-for="skin in skins"
        :key="skin.id"
        v-bind="skin"
      />
    </div>
  </div>
</template>
