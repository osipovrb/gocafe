<template>
  <div class="cursor-pointer text-underline font-bold text-xl hover:scale-125 duration-300" @click="goTo(anchor)">
    <span class="text-green-brand">[&nbsp;</span>
    <span class="text-green-dark">
      <slot />
    </span>
    <span class="text-green-brand">&nbsp;]</span>
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
