import { blogPosts } from "@data/site";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content?: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  status: "validado_publicamente" | "placeholder";
};

type WordPressPost = {
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
};

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(value: string) {
  return value
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export async function getBlogPostsForBuild(): Promise<BlogPost[]> {
  const endpoint = import.meta.env.PUBLIC_WORDPRESS_API_URL;

  if (!endpoint) {
    return blogPosts;
  }

  try {
    const url = new URL(endpoint.replace(/\/$/, "") + "/posts");
    url.searchParams.set("per_page", "100");
    url.searchParams.set("_fields", "slug,date,modified,title,excerpt,content");

    const response = await fetch(url);
    if (!response.ok) throw new Error(`WordPress returned ${response.status}`);

    const posts = (await response.json()) as WordPressPost[];
    if (!posts.length) return blogPosts;

    return posts.map((post) => ({
      slug: post.slug,
      title: decodeHtml(stripHtml(post.title.rendered)),
      description: decodeHtml(stripHtml(post.excerpt.rendered)).slice(0, 155),
      content: post.content.rendered,
      author: "[AUTOR A CONFIRMAR]",
      publishedAt: post.date,
      updatedAt: post.modified,
      category: "Artigo",
      status: "validado_publicamente"
    }));
  } catch {
    return blogPosts;
  }
}
