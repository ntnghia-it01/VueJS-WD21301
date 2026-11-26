<script setup>
import axios from 'axios';
import {reactive} from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter();

const state = reactive({
    form: {
        name: '',
        price: 10000,
        quantity: 1,
        image: ''
    }
});

const addProduct = async () =>{
    try{
        const data = state.form;
        // Với API EndPoint thêm
        // - Gọi Endpoint http://localhost:3000/products POST

        // JSON.stringify(data) => Chuyển đổi đối tượng data 
        // => Thành "Chuỗi JSON"

        // {
        //     name: '',
        //     price: 10000,
        //     quantity: 1,
        //     image: ''
        // } => Đối tượng (Object)

        // `{
        //     "name": '',
        //     "price": 10000,
        //     "quantity": 1,
        //     "image": ''
        // }` => Chuỗi JSON (JSON String)

        const responseData = await axios({
            method: 'POST',
            url: 'http://localhost:3000/products',
            headers: {
                "Content-Type": 'application/json'
            },
            data: JSON.stringify(data)
        });
        // Đối với API thêm status sẽ trả về 201 (CREATED)
        if(responseData.status == 201){
            alert("Thêm sản phẩm thành công");
            router.push("/admin/products");
        }else{
            alert("Thêm sản phẩm thất bại. Vui lòng thực hiện lại");
        }
    }catch(e){
        console.error(e);
    }
}
</script>

<template>
    <div class="container">
        <div class="offset-3 col-6">
            <h1 class="mt-3 mb-3">Thêm sản phẩm</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Tên</label>
                <input v-model="state.form.name" type="text" class="form-control">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Giá</label>
                <input v-model.number="state.form.price" type="number" class="form-control">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Số lượng</label>
                <input v-model.number="state.form.quantity" type="number" class="form-control">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Url Ảnh</label>
                <input v-model="state.form.image" type="text" class="form-control">
            </div>

            <button @click="addProduct" class="btn btn-primary">Thêm</button>
        </div>
    </div>
</template>

<style scoped></style>