<script setup lang="ts">
import { Ref, inject } from "vue";

const searchQuery = inject("searchQuery") as Ref<string>;

const handleChange = (e: Event) => {
  searchQuery.value = (e.target as HTMLInputElement).value;
};
</script>

<template>
  <div class="relative duration-200 focus-within:-translate-y-1">
    <input
      @input="handleChange"
      class="w-full rounded-md bg-neutral-100 py-1 pl-8 pr-2 text-lg text-neutral-700 shadow-md"
      type="text"
      placeholder="search"
    />
    <div class="absolute left-1 top-[6px]">
      <img src="../assets/search.svg" alt="" />
    </div>
  </div>
</template>
