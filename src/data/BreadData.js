// fetchBreadData.js
import axios from 'axios';
import { MY_IP_ADDRESS } from '../config/config';

const BreadData = async () => {
  try {
    const response = await axios.get(`http://${MY_IP_ADDRESS}:8080/customer/products`);
    const products = response.data;
    
    // stock이 0보다 큰 제품만 필터링
    const filteredProducts = products.filter(item => item.stock > 0);

    const fetchBreadData = filteredProducts.map(item => ({
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl.replace('localhost', MY_IP_ADDRESS),
      // imageUrl은 일단 로컬에서 끌어오기.
      originalPrice: `₩${Math.floor(Number(item.price))}`,
      salePrice: `₩${Math.floor(Number(item.price) * 0.7)}`,
      stock: item.stock,
    }));
  
    return fetchBreadData;
    
  } catch (error) {
    console.error('데이터를 가져오는 데 실패했습니다.', error);
    return [];
  }
};

export default BreadData;
