import { ContentResponse, ListContentsResponse } from "./api";

export type TagListResponse = ListContentsResponse<TagResponse>;

export type TagResponse = ContentResponse<{
  id?: string;
  tag?: string;
}>;
