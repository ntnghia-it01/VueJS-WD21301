import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
// Đối với dynamic router sẽ thường dùng với các trang có truyền id lên url 
// id là giá trị ngẫu nhiên không cố định 
import ProductDetail from './pages/ProductDetail.vue';
import AdminProduct from './pages/AdminProduct.vue';
import AdminProductForm from './pages/AdminProductForm.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/login', component: LoginPage},
    {path: '/register', component: RegisterPage},
    {path: '/product-detail/:id', component: ProductDetail},
    {path: '/admin/products', component: AdminProduct},
    {path: '/admin/products/form', component: AdminProductForm},
];

// :id này là giá trị sẽ nhận ở url khi user mở
// :id => Số, chuỗi, JSON Object, JSON Array,....
// /product-detail/1
// /product-detail/abc

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;
