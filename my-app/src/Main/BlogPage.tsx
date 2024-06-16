import Header from "./Components/Standard/Header";
import Footer from "./Components/Standard/Footer";
import BlogSection from "./Components/Sections/BlogSection";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
interface BlogItems{
  id: string;
  heading: string;
  link: string;
  tags: string[];
  text: string;
}
function BlogPage() {
  return (
    <>
    <Header />
    <BlogSection/>
    <Footer />
    </>
  );
}

export default BlogPage;
