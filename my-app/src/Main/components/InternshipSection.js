import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardInternship from "./CardInternship";

const internships = [
  {
    title: "JP Morgan Chase",
    description:
      "Software Engineer Intern (Global Payments Team)",
    getImageSrc: () => require("../../images/image_jpmorgan.jpg"),
  },
  {
    title: "VISA",
    description:
      "Software Engineer Intern (Value Added Services Team)",
    getImageSrc: () => require("../../images/image_visa.jpg"),
  },
  {
    title: "DSTA",
    description:
      "Software Engineer Intern (Digital Hub - AI and Autonomy Team)",
    getImageSrc: () => require("../../images/image_dsta.jpg"),
  },
  {
    title: "Discover Market Asia",
    description:
      "Software Engineer Intern (Innovation Team)",
    getImageSrc: () => require("../../images/image_discovermarket.jpg"),
  },
];

const InternshipsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#F7B600"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="internships-section" color="#1a1f71">
        Featured Internships
      </Heading>
      <Box
        color={"#1a1f71"}
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        gridGap={8}
      >
        {internships.map((internship) => (
          <CardInternship
            key={internship.title}
            title={internship.title}
            description={internship.description}
            imageSrc={internship.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default InternshipsSection;
