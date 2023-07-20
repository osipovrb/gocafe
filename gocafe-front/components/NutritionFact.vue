<template>
  <div class="w-full" :title="title">
    <div class="w-full text-sm text-center" :class="{ 'text-red-brand text-bold': !unit, 'text-green-dark font-light': !!unit }">
      {{ value }} {{ unit }}
    </div>
    <div class="text-sm font-light text-center" :class="{ 'text-red-brand text-bold': !unit, 'text-green-dark font-light': !!unit }">
      {{ name }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    value: Number,
    unit: String | null,
    title: String | null,
  });
</script>
