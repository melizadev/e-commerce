import axios from 'axios';

const productsApi = axios.create({
    baseURL: '/api/products',