<template>
  <div class="w-full">
    <div class="w-full text-red text-sm font-light">
      {{ value }} {{ unit }}
    </div>
    <div class="text-sm font-light">
      {{ name }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    value: Number,
    unit: String | null,
  });
</script>
