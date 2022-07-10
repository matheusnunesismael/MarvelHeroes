import axios from "axios";

interface APIparams {
  search?: string;
  order?: boolean;
  page?: number;
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
    if (parameters.params.order) {
      url += `&orderBy=name`;
    }
    if (parameters.params.page) {
      url += `&offset=${parameters.params.page}&limit=20`;
    }
  }
  return axios.get(url);
}
