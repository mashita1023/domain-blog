import { GetContentQuery } from "../../../../types/api";
import { TagResponse } from "../../../../types/tag";

export type Methods = {
  get: {
    query?: GetContentQuery;
    resBody: TagResponse;
  };
};
