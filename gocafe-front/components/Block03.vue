<template>
  <div class="mt-10 bg-[url('/texture.png')]">
    <div class="backdrop-blur-sm pb-5 bg-white-brand/50">
      <div class="container mx-auto">
        <div class="pt-5">
          <h1 class="text-3xl text-black-brand">
            Как подписаться на сбалансированные рационы
          </h1>
        </div>
        <div class="grid grid-cols-4 gap-6 mt-4 text-black-brand">
          <div>
            <div class="flex">
              <div class="bg-black-brand text-white h-8 w-8 text-center rounded-full pt-1">1</div>
              <div class="grow flex items-center">
                <hr>
                <div class="font-bold -translate-x-px">→</div>
              </div>
            </div>
            <div class="mt-4">
              <div class="font-bold">Шаг 1. Выбор рациона</div>
              <div>Текст с описанием шага. Например: в нашем меню такие-то блюда с такими-то особенностями.</div>
            </div>
          </div>
          <div>
            <div class="flex">
              <div class="bg-black-brand text-white h-8 w-8 text-center rounded-full pt-1">2</div>
              <div class="grow flex items-center">
                <hr>
                <div class="font-bold -translate-x-px">→</div>
              </div>
            </div>
            <div class="mt-4">
              <div class="font-bold">Шаг 2. Оплата подписки</div>
              <div>Текст с описанием шага. Например: курьер принимает оплату наличными или банковской картой через терминал.</div>
            </div>
          </div>
          <div>
            <div class="flex">
              <div class="bg-black-brand text-white h-8 w-8 text-center rounded-full pt-1">3</div>
              <div class="grow flex items-center">
                <hr>
                <div class="font-bold -translate-x-px">→</div>
              </div>
            </div>
            <div class="mt-4">
              <div class="font-bold">Шаг 3. Получайте блюда дома или в офисе</div>
              <div>Текст с описанием шага. Например: курьер каждый день будет доставлять блюда из выбранного вами рациона к вам домой или в офис.</div>
            </div>
          </div>
          <div>
            <div class="flex">
              <div class="bg-black-brand text-white h-8 w-8 text-center rounded-full pt-1">&check;</div>
            </div>
            <div class="mt-4">
              <div class="font-bold">Питайтесь сбалансированно!</div>
              <div>Мотивационный текст, описывающий преимущества подписки для пользователя.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
hr {
  display: block;
  unicode-bidi: isolate;
  width: 100%;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  border-color: #444444;
}
</style>