import React from "react";

import {
  NextPage,
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticProps,
} from "next";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { BlogResponse } from "../../../types/blog";
import { client } from "../../../utils/api";
import { toStringId } from "../../../utils/toStringId";

type StaticProps = {
 blog: BlogResponse;
 draftKey?: string;
};

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blog, draftKey } = props;
  const router = useRouter();
   if (router.isFallback) {
     return <div>Loading...</div>;
  }

  return (
    <>
      {draftKey && (
        <div>
          現在プレビューモードで閲覧中です。
          <Link href={`/api/exit-preview?id=${blog.id}`}>
            <a>プレビューを解除</a>
          </Link>
        </div>
      )}
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main>
        <header>
          <h1>{blog.title}</h1>
          <ul>
            <li>publishedAt: { blog.publishedAt }</li>
            {blog.tags.length > 0 && (
              <li>
                tag:
                <ul>
                  {blog.tags.map(({tag}: {tag: any}) => (
                    <li key={tag.id}>
                      <Link href={`/tags/${tag.id}`}>{tag.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </header>
        {blog.content && (
          <article dangerouslySetInnerHTML={{ __html: blog.content }}  />
        )}
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps = async (context) => {
  const { params, previewData } = context;

  if (!params?.id) {
    throw new Error("Error: ID not found.");
  }

  const id = toStringId(params.id);
  const draftKey = previewData?.draftKey
    ? <any>{ draftKey: previewData.draftKey }
    : <any>{};

  try {
    const blog = await client.v1.blog._id(id).$get({
      query: {
        fields: "id,title,content,publishedAt,tags",
        ...draftKey,
      },
    });

    return {
      props: { blog, ...draftKey },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true};
  }
};

export default Page;
