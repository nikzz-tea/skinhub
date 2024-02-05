<script setup lang="ts">
import { onMounted, ref } from "vue";
import fetchSkins from "./utils/fetchSkins";
import Skin from "./models/skin";
import SkinCard from "./components/SkinCard.vue";

const skins = ref<Skin[]>();

onMounted(async () => (skins.value = await fetchSkins()));
</script>

<template>
  <div class="mx-auto max-w-[1400px] py-20">
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
