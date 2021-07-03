import http from "../http-common";

class VertragService {
    getAllVertraege() {
        return http.get("/vertrag");
    }

    getVertragById(id) {
        return http.get(`/vertrag/${id}`);
    }

    create(data) {
        return http.post("/vertrag", data);
    }

    update(id, data) {
        return http.put(`/vertrag/${id}`, data);
    }

    delete(id) {
        return http.delete(`/vertrag/${id}`);
    }
}

export default new VertragService();
