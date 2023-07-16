<template>
  <div class="text-black-brand">
    <img :src=photo class="max-h-72 rounded-lg hover:scale-125 duration-300">
    <div class="grid grid-cols-2 items-end">
      <h2 class="xl:text-lg lg:text-base font-bold mt-2">{{ name }}</h2>
      <div class="font-light">
        <span>&#x20bd;{{ price }} </span> / <span>{{ weight }} гр.</span>
      </div>
    </div>
    <p>{{ description }}</p>
    <div class="grid grid-cols-4 mt-2">
      <NutritionFact name="ккал"      :value=kcal />
      <NutritionFact name="белков"    :value=protein  unit="гр." />
      <NutritionFact name="жиров"     :value=fat      unit="гр." />
      <NutritionFact name="углев." :value=carb     unit="гр." />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    description: String,
    photo: String,
    price: Number,
    weight: Number,
    kcal: Number,
    protein: Number,
    fat: Number,
    carb: Number,
  });
</script>
