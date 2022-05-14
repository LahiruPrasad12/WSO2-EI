import api from "../axios";
const resource = '/api/owner';

export default {
    listPrduct: () => api.get(`${resource}`),
    createPrduct: (payload) => api.post(`${resource}`, payload),
}