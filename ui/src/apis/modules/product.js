import api from "../axios";
const resource = '/api/products';

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    createProduct: (payload) => api.post(`${resource}`,payload),
}