<script setup lang="ts">
import Skin from "../models/skin";

defineProps<Skin>();
</script>

<template>
  <a :href="url">
    <div class="w-[420px]">
      <img class="w-[420px]" :src="image" :alt="name" />
      <h2>{{ name }}</h2>
    </div>
  </a>
</template>
