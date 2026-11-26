<script setup>
import {RouterLink, useRouter} from 'vue-router';
const router = useRouter();

const openRegisterPage = () => {
  router.replace("/register");
}
</script>

<template>
  <h1>Đăng nhập</h1>
  <button class="btn btn-warning" @click="openRegisterPage">Đăng ký</button>
</template>

<style scoped></style>
