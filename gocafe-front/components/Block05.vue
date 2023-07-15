<template>
  <div class="pt-10 pb-6">
    <div class="container mx-auto">
      <div class="text-center"><h1 class="text-4xl font-bold text-black-brand">Меню</h1></div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
        <Meal
          name="Имя блюда"
          description="Описание блюда, состав, особенности приготовления"
          photo="/img1.png"
          :price=500 
          :weight=320 
          :kcal=204
          :protein=13
          :fat=9
          :carb=29
        />

        <Meal
          name="Имя блюда"
          description="Описание блюда, состав, особенности приготовления"
          photo="/img2.png"
          :price=1500 
          :weight=240 
          :kcal=301
          :protein=19
          :fat=20
          :carb=29
        />

        <Meal
          name="Имя блюда"
          description="Описание блюда, состав, особенности приготовления"
          photo="/img3.png"
          :price=900 
          :weight=190 
          :kcal=159
          :protein=19
          :fat=5
          :carb=13
        />

        <Meal
          name="Имя блюда"
          description="Описание блюда, состав, особенности приготовления"
          photo="/img1.png"
          :price=500 
          :weight=320 
          :kcal=204
          :protein=13
          :fat=9
          :carb=29
        />

        <Meal
          name="Имя блюда"
          description="Описание блюда, состав, особенности приготовления"
          photo="/img2.png"
          :price=1500 
          :weight=240 
          :kcal=301
          :protein=19
          :fat=20
          :carb=29
        />

        <Meal
          name="Имя блюда"
          description="Описание блюда, состав, особенности приготовления"
          photo="/img3.png"
          :price=900 
          :weight=190 
          :kcal=159
          :protein=19
          :fat=5
          :carb=13
        />
      </div>
    </div>
  </div>
</template>