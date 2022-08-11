import axios, { AxiosInstance } from "axios";

export default class HttpClient {
  instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL,
    });
  }
}
