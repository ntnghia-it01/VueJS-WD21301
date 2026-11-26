<script setup>
import {RouterLink, useRouter} from 'vue-router';
// Chuyển trang bằng lệnh của Script
const router = useRouter();

// Cung cấp một vài hàm để chuyển trang
// router.push("/login")
// - Chuyển trang login và có lưu lại lịch sử trang hiện tại
// - Khi chuyển qua login ấn back quay về trang hiện tại
// Ví dụ: Home => Product => Login (Dùng push)
// Khi ở Login (back) => Product

// router.replace("/login")
// - Chuyển trang login nhưng sẽ không lưu lịch sử trang hiện tại
// - Lấy trang login thay thế cho trang hiện tại
// Ví dụ: Home => Product (replace) => Login
// // Khi ở Login (back) => Home

// router.back();
// - Tương ứng nút back của browser 

const openLoginPage = () => {
  router.push("/login");
}

</script>

<template>
  <h1>Trang chủ</h1>

  <!-- Đối với html muốn chuyển trang thì dùng thẻ a -->
  <!-- Trong vue sẽ dùng RouterLink để chuyển trang -->
  <!-- <a class="btn btn-danger" href="/login">Đăng nhập</a> => Không dùng -->
  <button class="btn btn-primary" @click="openLoginPage">Đăng nhập</button>
</template>

<style scoped></style>
