<script setup lang="ts">
import { onMounted, provide, ref, watch } from "vue";
import fetchSkins from "./utils/fetchSkins";
import Skin from "./models/skin";
import SkinCard from "./components/SkinCard.vue";
import SearchBar from "./components/SearchBar.vue";
import ShuffleButton from "./components/ShuffleButton.vue";
import shuffleArray from "./utils/shuffleArray";

const skins = ref<Skin[]>();

const searchQuery = ref<string>();

const setItems = async () => {
  skins.value = await fetchSkins(searchQuery.value);
};

const handleRefresh = () => {
  if (!skins.value) return;
  skins.value = shuffleArray(skins.value);
};

onMounted(setItems);

watch(searchQuery, setItems);

provide("searchQuery", searchQuery);
</script>

<template>
  <div class="mx-auto max-w-[1400px] py-14">
    <div class="flex justify-center gap-5 pb-10">
      <SearchBar />
      <div @click="handleRefresh"><ShuffleButton /></div>
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
