import { Heading, Stack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { BlogItemType } from "../../Types/BlogItemType";
import CardBlog from "../Standard/CardBlog";
import { Timestamp } from 'firebase/firestore';

function BlogSection() {
  let startDate = new Date('2022-01-01');
  let todaysDate = new Date();
  let differenceInYears = todaysDate.getFullYear() - startDate.getFullYear();
  const [blogs, setBlogs] = useState<BlogItemType[]>([]);
  const blogsRef = collection(db, "Blogs");
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);
      
      // Map data and sort by date, most recent first
      const sortedBlogs = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date: (doc.data().date as Timestamp).toDate(), // Convert Timestamp to Date
        } as BlogItemType))
        .sort((a, b) => {
          return b.date.getTime() - a.date.getTime(); // Compare dates
        });

      console.log(sortedBlogs); // Log the sorted blogs
      setBlogs(sortedBlogs);
    };

    getBlogs();
  }, [blogsRef]);
  return(
    <>
      <FullScreenSection
        justifyContent="top"
        alignItems="left"
        padding="10"
        isDarkBackground
        backgroundColor="#1a1f71">
          <Stack>
            <Heading size={"2xl"}>
              Engineering Blog
            </Heading>
            <Text noOfLines={[2, 3, 4]}>
              "My documentation for everything I have learnt over the past {differenceInYears} years".
            </Text>
          </Stack>
          {blogs.map((blog) => (
            <CardBlog
              id={blog.id}
              heading={blog.heading}
              text={blog.text}
              tags={blog.tags}
              link={blog.link}
              date={blog.date}
            />
          ))}
          
      </FullScreenSection>
    </>
  )

};

export default BlogSection;
