<template>
    <AMISRenderer :schema ="schema" />
  </template>
  
  <script setup lang="ts" name="Product">
  import AMISRenderer from '@/components/Amis/AMISRenderer.vue'
  import schema from './product.json';
  
  
  </script>
  