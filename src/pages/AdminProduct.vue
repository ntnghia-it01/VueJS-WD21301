<!-- Danh sách sản phẩm ở phía admin -->
<!-- Dùng giao diện dạng bảng để thể hiện thông tin -->
<script setup>
import {reactive, onMounted} from 'vue';
import axios from 'axios';

const state = reactive({
    data: []
});

// Khai báo hàm gọi API để lấy danh sách
const getData = async () => {
    // CV 1
    // CV 2 bất đồng bộ
    // CV 3

    // => Không dùng async và await
    // - CV1 (Hoàn thành) => CV 2 (Kích hoạt) => CV 3 (Hoàn thành) => CV 2(Hoàn tành)

    // nếu dùng => CV1 (Hoàn thành) => CV 2(Hoàn tành) => CV 3 (Hoàn thành) => 

    // Gọi API luôn có khả năng lỗi ở server xảy ra
    // Bắt buộc phải sử dụng try catch
    try{
        // Để lấy danh sách sản phẩm ở json-server
        // Gọi API Endpoint http://localhost:3000/products với phương thức GET

        // Khi gọi API sẽ có 2 khái niệm dữ liệu
        // - Request là nội dung sẽ gửi lên API
        // {
        //     method: 'GET',
        //     url: 'http://localhost:3000/products'
        // }
        // - Response là nội dung mà API trả về
        //      + headers => Lưu trữ những gì mà request gửi lên
        //      + status => Cho biết gọi API thành công hay thất bại
        //          * Nằm trong khoản từ 200 -> 299 Thành công
        //          * Nằm ngoài khoản trên là lỗi => axios tự kiểm tra giúp 
        //              => Khi có lỗi sẽ quăng ra ngoại lệ => catch sẽ kích hoạt
        //      + data => Dữ liệu API trả về cho phía client sử dụng 
        const responseData = await axios({
            method: 'GET',
            url: 'http://localhost:3000/products'
        });
        console.log(responseData.data);
        // Nếu responseData.data == null => state.data = []
        // Nếu responseData.data != null => state.data = responseData.data
        state.data = responseData.data ?? [];
    }catch(e){
        console.error(e);
    }
}

// Đây là event sẽ được kích hoạt khi components render lần đầu thành công
onMounted(()=>{
    getData();
});

const deleteProduct = async (id) => {
    const deleteConfirm = confirm("Bạn có muốn xoá sản phẩm không?");
    // TH chọn không sẽ không làm gì tiếp theo
    if(!deleteConfirm) return;

    try{
        // Để xoá một đối tượng sẽ sử dụng API Endpoint
        // url http://localhost:3000/products/:id method DELETE
        const responseData = await axios({
            method: 'DELETE',
            url: `http://localhost:3000/products/${id}`
        });

        // Xoá status trả về 204
        console.log(responseData.status)
        if(responseData.status == 200){
            alert("Xoá sản phẩm thành công");
            getData();
        }else{
            alert("Xoá sản phẩm thất bại. Vui lòng thực hiện lại!");
        }
    }catch(e){
        console.error(e);
    }
}
</script>

<template>
    <div class="container">
        <h1 class="mt-3 mb-3">Danh sách sản phẩm</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in state.data" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>
                        <img :src="item.image" :style="{width: '100px', height: '100px'}"/>
                    </td>
                    <td>
                        <button @click="deleteProduct(item.id)" class="btn btn-danger">Xoá</button>
                    </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<style scoped>
</style>