import api from "../axios";
const resource = '/api/products';

export default  {
    createPrduct: (payload) => api.post(`${resource}`,payload),
}