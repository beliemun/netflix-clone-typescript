import { AxiosResponse } from "axios";
import { movieApi, tvApi, peopleApi } from "Components/Api";
import { MediaType } from "types";

const ApiSearchParser = async (
  mediaType: MediaType,
  page: number,
  term: string
): Promise<AxiosResponse<any | []>> => {
  if (mediaType === "movie") {
    return await movieApi.search(term, page);
  } else if (mediaType === "tv") {
    return await tvApi.search(term, page);
  } else if (mediaType === "person") {
    return await peopleApi.search(term, page);
  }
  return [] as any;
};

export default ApiSearchParser;
