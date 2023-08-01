import callAPI from "@/configs/api";
import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getBlogs() {
  const url = `${ROOT_API}/${API_VERSION}/cms/blogs`;
  const data = {};

  return callAPI({
    url,
    method: "GET",
    data,
  });
}

export async function getGaleries() {
  const url = `${ROOT_API}/${API_VERSION}/cms/galeries`;
  const data = {};

  return callAPI({
    url,
    method: "GET",
    data,
  });
}

export async function getDetailBlogs(id: string) {
  const API = process.env.NEXT_PUBLIC_API;
  const GET_API_URL = `api/v1/cms/blogs/${id}`;

  const response = await axios.get(`${API}/${GET_API_URL}`);

  const axiosResponse = response.data;
  return {
    responseData: axiosResponse.data,
  };
}
