<script setup>
// Muốn lấy giá trị động trên dynamic router
import {reactive} from 'vue';
import {useRoute} from 'vue-router';
const route = useRoute();

const state = reactive({
    id: route.params.id
})
</script>

<template>
  <h1>Chi tiết sản phẩm</h1>
  <h1>{{ state.id }}</h1>
</template>

<style scoped></style>
