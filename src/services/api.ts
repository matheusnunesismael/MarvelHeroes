import axios from "axios";

interface APIparams {
  search?: string;
  orderBy?: string;
  page?: number;
  limit?: number;
}

interface RequestParams {
  path: string;
  params?: APIparams;
}

export function API(parameters: RequestParams) {
  let url = `${process.env.REACT_APP_API_URL}/${parameters.path}?apikey=${process.env.REACT_APP_API_KEY}`;
  if (parameters.params) {
    url += "&";
    if (parameters.params.search) {
      url += `nameStartsWith=${parameters.params.search}`;
    }
    if (parameters.params.orderBy) {
      url += `&orderBy=${parameters.params.orderBy}`;
    }
    if (parameters.params.page) {
      url += `&offset=${parameters.params.page}`;
    }
    if (parameters.params.limit) {
      url += `&limit=${parameters.params.limit}`;
    }
  }
  return axios.get(url);
}
