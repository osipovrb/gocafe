<template>
  <div class="text-black-brand border border-green-dark bg-white rounded drop-shadow-lg">
    <div class="p-5">
      <img :src=photo class="max-h-80 rounded-lg hover:scale-125 duration-300">
      <div class="grid grid-cols-2 items-end">
        <h2 class="xl:text-lg lg:text-base font-bold mt-2">{{ name }}</h2>
        <div class="font-light">
          <span>&#x20bd;{{ price }} </span> / <span>{{ weight }} гр.</span>
        </div>
      </div>
      <p>{{ description }}</p>
    </div>
    <div class="bg-green-light pl-5 pr-5 pt-2 pb-2 rounded-b">
      <div class="grid grid-cols-4">
        <NutritionFact name="ккал"      :title=hint.kcal   :value=kcal />
        <NutritionFact name="белков"    :title=hint.prot   :value=protein  unit="гр." />
        <NutritionFact name="жиров"     :title=hint.fat    :value=fat      unit="гр." />
        <NutritionFact name="углев."    :title=hint.carb   :value=carb     unit="гр." />
      </div>
    </div>
  </div>
</template>

<script setup>
  const hint = {
    kcal: 'У взрослых мужчин ежедневная потребность в энергии варьируется от 2100 до 4200 ккал, а у женщин — от 1800 до 3050 ккал. Эти вариации зависят от индивидуальных физических нагрузок, роста и веса',
    prot: 'Поскольку в организме не могут синтезироваться все незаменимые аминокислоты, то часть должна поступать с белковой пищей. В процессе пищеварения ферменты разрушают белки до аминокислот, которые используются для биосинтеза собственных белков организма или подвергаются дальнейшему распаду для получения энергии',
    fat: 'Жиры выполняют структурную и энергетическую функции: они являются основным компонентом клеточной мембраны, а в жировых клетках сохраняется энергетический запас организма. Так же они играют большую роль в гормональной регуляции организма',
    carb: 'В основном потребленные углеводы используются организмом для выработки энергии. Небольшая часть углеводов (полисахаридов) выполняют различные функциональные роли в организме (клетчатка, пектины, и др.)'
  }
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
