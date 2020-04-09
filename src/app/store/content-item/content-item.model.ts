export interface ContentItem {
  id: number | string;
  title: string;
  text: string;
  slug: string;
  videoUrl: string;
  videoTime: string;
  imageUrl: string;
  stakeholder: Stakeholder
  provider: Provider
  tags: Tag[]
}
export interface Stakeholder {
  id: number | string;
  title: string;

}
export interface Provider {
  id: number | string;
  title: string;

}
export interface Tag {
  id: number | string;
  title: string;
  description: string
  code: string
  published: boolean
  order: number

}
export interface Faq {
  id: number | string;
  order: number;
  question: string;
  answer: string;
  published: boolean;
  stakeholder: Stakeholder
  provider: Provider

}
export function createContentItem(params: Partial<ContentItem>) {
  return {

  } as ContentItem;
}
