import HttpClient from "./httpClient";

var API_URL = process.env.API_URL;

export default class Request extends HttpClient {
  constructor() {
    super(API_URL);
  }

  async getAgents() {
    try {
      return await this.instance.get("/agents", {
        method: "GET",
        params: { language: "pt-BR" },
      });
    } catch (error) {
      throw error;
    }
  }
}
