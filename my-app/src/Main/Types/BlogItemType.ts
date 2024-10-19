import { Timestamp } from "firebase/firestore";

export type BlogItemType = {
  date: Date;
  id: string;
  heading: string;
  link: string;
  tags: string[];
  text: string;
};