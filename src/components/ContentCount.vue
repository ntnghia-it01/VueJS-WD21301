<script setup>
const props = defineProps({
    msg: String,
    classcss: String,
    onIncrement: Function,
    onDecrement: Function
});
// Để Components con nhận được giá trị
// Sẽ dùng inject ở vue
import {inject} from 'vue';
// inject("<Tên thuộc tính cần lấy giá trị>", <Giá trị mặc định>);
// <Tên thuộc tính cần lấy giá trị>
// - Khai báo đúng hoàn toàn với tên cần lấy 
// <Giá trị mặc định>
// - Sẽ được gán vào biến khi inject không tìm thấy thuộc tính ở provider
const count = inject("count", 10);
</script>

<template>
    <button @click="onDecrement" class="btn btn-danger mb-3">Giảm số lượng</button>
    <h1 :class="classcss || 'text-primary' ">
        {{ msg || 'Nội dung mặc định:' }} {{ count ?? 0 }}
    </h1>
    <button @click="onIncrement" class="btn btn-primary mt-3">Tăng số lượng</button>
</template>
    
<style scoped></style>