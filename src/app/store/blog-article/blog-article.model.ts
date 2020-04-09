export interface BlogArticle {
  id: number | string;
  title: string;
  author: string;
  images: string[];
  text: string;
  slug: string;
  published: boolean;
}

export function createBlogArticle(params: Partial<BlogArticle>) {
  return {

  } as BlogArticle;
}
