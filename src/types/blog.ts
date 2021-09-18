import { ContentResponse, ListContentsResponse } from "./api";
import { TagResponse } from "./tag";

export type BlogListResponse = ListContentsResponse<BlogResponse>;

export type BlogResponse = ContentResonse<{
  id?: string;
  title?: string;
  image?: string;
  content?: string;
  tags?: TagResponse[];
}>;
