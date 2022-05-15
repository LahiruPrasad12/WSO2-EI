import api from "../axios";
const resource = '/api/owner';

export default {
    listPrduct: () => api.get(`${resource}`),
    createProduct: (payload) => api.post(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),
}