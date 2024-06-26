import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CardInternship from "../Standard/CardInternship";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

interface DataItem {
  id: string;
  description: string;
  title: string;
  imageSrc: string;
  date: number;
}

function InternshipsSection() {
  const [internships, setInternships] = useState<DataItem[]>([]);
  const internshipsRef = collection(db, "Internships");

  useEffect(() => {
    const getInternships = async () => {
      const data = await getDocs(internshipsRef);
      setInternships(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as DataItem))
      );
    };
    getInternships();
  }, []);
  const sortedInternships = internships.sort((a, b) => a.date - b.date);
  return (
    <FullScreenSection
      backgroundColor="#F7B600"
      isDarkBackground
      p={8}
      spacing={8}
      alignItems="flex-start"
    >
      <Heading as="h1" id="internships-section" color="#1a1f71">
        Featured Internships
      </Heading>
      <Box
        overflowX="auto" // Enable horizontal scrolling
        width="100%" // Ensure it doesn't exceed the screen width
        whiteSpace="nowrap" // Prevents wrapping of child elements
        css={css`
          /* Hide scrollbar for all browsers */
          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        `}
      >
        <Flex
          display="inline-flex" // Use inline-flex to allow horizontal alignment
          color={"#1a1f71"}
          gridGap={8}
          flexDirection={["column", "row"]} // Responsive array syntax for direction
        >
          {sortedInternships.map((internship) => (
            <CardInternship
              key={internship.id}
              title={internship.title}
              description={internship.description}
              imageSrc={internship.imageSrc}
              date={internship.date}
            />
          ))}
        </Flex>
      </Box>
    </FullScreenSection>
  );
}

export default InternshipsSection;
