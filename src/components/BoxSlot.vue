<script setup>
</script>

<template>
    <div class="mt-3 mb-3 p-3 border border-primary rounded">
        <!-- Dùng thẻ slot để nhận html từ component cha gửi qua -->
        <!-- Để phân biệt từng slot -->
        <!-- Và để slot hiển thị đúng nội dung -->
        <!-- Ở vue cung cấp một thuộc tính name="<Tên slot>" -->
        <!-- Tên slot nên viết thường hoàn toàn -->
        <!-- Và không chứa ký tự đặc biệt -->
        <!-- Slot 1 nhận thông tin là tiêu đề của box -->
        <slot name="header"></slot>
        <!-- Slot 2 nhận thông tin là nội dung của box -->
        <slot name="content"></slot>
        <!-- Slot 3 nhận thông tin là thông báo của box -->
        <slot name="notify"></slot>
    </div>
</template>

<style scoped>

</style>