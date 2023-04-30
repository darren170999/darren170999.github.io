import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardInternship from "./CardInternship";

const certs = [
  {
    title: "Meta Frontend",
    description:
    "This certificate was designed by the software engineering experts at Meta—the creators of Facebook and Instagram to prepare aspiring software engineers for a career in frontend development.",
    getImageSrc: () => require("../../images/cert_Meta_Frontend.jpg"),
  },
  {
    title: "Meta Backend",
    description:
    "This certificate was designed by the software engineering experts at Meta—the creators of Facebook and Instagram to prepare aspiring software engineers for a career in backend development.",
    getImageSrc: () => require("../../images/cert_Meta_Backend.jpg"),
  },
  {
    title: "CS50",
    description:
      "Hosted by Harvard University, Introduction to computer science by David J Malan.",
    getImageSrc: () => require("../../images/cert_cs50.jpg"),
  },
  {
    title: "gRPC",
    description:
      "Build modern Application Programming Interface and Microservices by Clement Jean",
    getImageSrc: () => require("../../images/cert_grpc.jpg"),
  },
  {
    title: "GraphQL",
    description:
      "Learn and master GraphQL by building real web apps with React and Node by Stephen Grider",
    getImageSrc: () => require("../../images/cert_GraphQL.jpg"),
  },
  {
    title: "ASP.Net Core",
    description:
      "Build real world application using ASP.NET Core MVC, Entity Framework Core and ASP.NET Core Identity by Bhrugen Patel",
    getImageSrc: () => require("../../images/cert_AspNetCore.jpg"),
  },
];
//Responsive 
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}

const CertSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1a1f71"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="certs-section">
        Featured Certificates
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        gridGap={8}
      >
        {certs.map((cert) => (
          <CardInternship
            key={cert.title}
            title={cert.title}
            description={cert.description}
            imageSrc={cert.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CertSection;
