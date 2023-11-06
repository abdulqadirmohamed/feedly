import { type } from "os";

export type TPosts = {
  id: string;
  title: string;
  content: string;
  categoryName?: string;
  featureImage?: string;
  author?: string;
  createdAt: string
};

export type TCategory = {
  id: string;
  categoryName: string;
};
