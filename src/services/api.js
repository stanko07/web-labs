import axios from 'axios';

const API_URL = 'http://localhost:5000/api/flowerData';

export const fetchFlowers = async (searchTerm = '', sort = 'default', color = 'all') => {
    const response = await axios.get(API_URL, {
        params: {
            search: searchTerm,
            sort: sort,
            color: color,
        },
    }); 
    return response.data;
};

export const fetchFlowerById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
