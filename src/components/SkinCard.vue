<script setup lang="ts">
import Skin from "../models/skin";

defineProps<Skin>();
</script>

<template>
  <a :href="url">
    <div
      class="w-[420px] rounded-md bg-neutral-100 shadow-md duration-200 hover:-translate-y-1"
    >
      <img class="w-[420px] rounded-t-md" :src="image" :alt="name" />
      <h2 class="p-1 text-[26px] text-neutral-700">{{ name }}</h2>
    </div>
  </a>
</template>
