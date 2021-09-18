import { GetListContentsQuery } from "../../../types/api";
import { BlogLResponse } from "../../../types/blog";

export type Methods = {
  get: {
    query?: GetListContentsQueryQuery;
    resBody: BlogListResponse;
  };
};
