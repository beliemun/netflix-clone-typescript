import { AxiosResponse } from "axios";
import { movieApi, tvApi } from "Components/Api";

const ApiLoader = async (
  pathname: string,
  page: number
): Promise<AxiosResponse<any | []>> => {
  if (pathname.includes("movie")) {
    if (pathname.includes("now-playing")) {
      return await movieApi.nowPlaying(page);
    } else if (pathname.includes("upcoming")) {
      return await movieApi.upComing(page);
    } else if (pathname.includes("top-rated")) {
      return await movieApi.topRated(page);
    } else {
      return await movieApi.popular(page);
    }
  } else if (pathname.includes("tv")) {
    if (pathname.includes("airing-today")) {
      return await tvApi.airingToday(page);
    } else if (pathname.includes("on-the-air")) {
      return await tvApi.onTv(page);
    } else if (pathname.includes("top-rated")) {
      return await tvApi.topRated(page);
    } else {
      return tvApi.popular(page);
    }
  }
  return [] as any;
};

export default ApiLoader;
