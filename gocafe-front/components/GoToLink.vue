<template>
  <div class="cursor-pointer bg-green-dark text-white-brand self-center p-2 pl-6 pr-6 rounded-lg drop-shadow text-lg font-light hover:scale-125 duration-300" @click="goTo(anchor)">
    <span class="text-green-light">
      <slot />
    </span>
  </div>
</template>

<script setup>
  const props = defineProps({
    anchor: String,
  });

  function goTo(anchor) {
    let top = document
      .querySelector(`#${anchor}`)
      .getBoundingClientRect()
      .top
    
    top -= 96; // 96 высота хедера + 8 маргин
    
    window.scrollBy({
      top: top,
      behavior: 'smooth'
    });
  }
</script>

st
