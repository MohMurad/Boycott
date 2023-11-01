import axios from'axios';

export const getProducts= async (page) => {
    const url="http://127.0.0.1:8000/api/product-list/";
    try {

        const response=axios.get(url);
        return response; 
    }catch(error ){
        return error.response;
    }
}
