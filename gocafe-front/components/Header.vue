<template>
  <div class="sticky z-50 top-0 h-24 bg-green-light">
    <div class="container mx-auto pt-2">
      <div class="flex">
        <div class="flex-[0.2]">
          <img src="/logo-extended.png" class="max-h-20" />
        </div>
        <div class="flex-[0.6] flex gap-10 self-center items-center justify-center">
          <GoToLink anchor="block02">Для кого</GoToLink>
          <GoToLink anchor="block03">Подписка</GoToLink>
          <GoToLink anchor="block04">Рационы</GoToLink>
          <GoToLink anchor="block05">Меню</GoToLink>
        </div>
        <div class="flex-[0.2]">
          <div class="bg-green-dark text-white-brand self-center p-2 pl-4 pr-4 rounded-lg drop-shadow text-lg font-light hover:scale-125 duration-300">
            <p>Закажите рацион</p>
            <p><UIcon name="i-heroicons-phone" /> +7 895 898 88 88</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
