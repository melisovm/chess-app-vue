<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'white',
    validator(value) {
      return ['white', 'black'].includes(value as string)
    },
  },
  size: {
    type: String,
    default: '72px',
  },
})
</script>

<template>
  <div class="cell" :class="color">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.cell {
  width: v-bind(size);
  height: v-bind(size);

  &.black {
    background: #B7C0D8;
  }

  &.white {
    background: #E8EDF9;
  }
}
</style>
