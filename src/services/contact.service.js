import createApiClient from "./api.service";

class ContactService {
	constructor(baseUrl = "/api/contacts") {
		this.api = createApiClient(baseUrl);
	}

	async getAll() {
		return (await this.api.get("/")).data;
	}
	async getAllFavorite() {
		return (await this.api.get("/favorite")).data;
	}
	async create(data) {
		return (await this.api.post("/", data)).data;
	}

	async deleteAll() {
		return (await this.api.delete("/")).data;
	}

	async get(id) {
		return (await this.api.get(`/${id}`)).data;
	}

	async update(id, data) {
		return (await this.api.post(`/${id}`, data)).data;
	}

	async delete(id) {
		return (await this.api.delete(`/${id}`)).data;
	}
}
export default new ContactService();
