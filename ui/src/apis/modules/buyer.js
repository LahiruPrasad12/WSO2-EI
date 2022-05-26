import api from "../axios";
const resource = '/api/user';

const resource1 = '/api/orders';

export default {
    listPrduct: () => api.get(`${resource}`),
    placeOrder: () => api.post(`${resource1}`),
    getMyeOrder: () => api.get(`${resource1}`)
}