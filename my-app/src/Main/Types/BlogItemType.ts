import { Timestamp } from "firebase/firestore";

export type BlogItemType = {
  date: Timestamp;
  id: string;
  heading: string;
  link: string;
  tags: string[];
  text: string;
};