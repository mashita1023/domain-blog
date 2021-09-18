import { ContentResponse, ListContentsResponse } from "./api";
import { TagResponse } from "./tag";

export type BlogListResponse = ListContentsResponse<BlogResponse>;

export type BlogResponse = ContentResonse<{
  title?: string;
  image?: string;
  content?: string;
  tag?: TagResponse[];
}>;
