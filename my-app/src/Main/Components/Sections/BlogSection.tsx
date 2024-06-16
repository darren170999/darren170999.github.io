import { Heading, Stack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { BlogItemType } from "../../Types/BlogItemType";
import CardBlog from "../Standard/CardBlog";
//TODO: Need Fix

function BlogSection() {
  let startDate = new Date('2022-01-01');
  let todaysDate = new Date();
  let differenceInYears = todaysDate.getFullYear() - startDate.getFullYear();
  const [blogs, setBlogs] = useState<BlogItemType[]>([]);
  const blogsRef = collection(db, "Blogs");
  useEffect(()=>{
    const getBlogs = async () => {
      const data = await getDocs(blogsRef);
      setBlogs(data.docs.map((doc) => ({...doc.data(), id:doc.id} as BlogItemType)))
    };
    getBlogs();
  }, []);
  return(
    <>
      <FullScreenSection
        justifyContent="top"
        alignItems="left"
        padding="10"
        isDarkBackground
        backgroundColor="#1a1f71">
          <Stack padding={"8"}>
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
