import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardInternship from "./CardInternship";

const certs = [
  {
    title: "Meta Frontend",
    description:
    "This certificate was designed by the software engineering experts at Meta—the creators of Facebook and Instagram to prepare aspiring software engineers for a career in frontend development.",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/MetaFrontend.jpg?alt=media&token=36f6dcab-5a79-45a9-a362-ea1b942085d5",
  },
  {
    title: "Meta Backend",
    description:
    "This certificate was designed by the software engineering experts at Meta—the creators of Facebook and Instagram to prepare aspiring software engineers for a career in backend development.",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/MetaBackend.jpg?alt=media&token=978f0252-1b9c-4956-91f6-0bd508fd7b12",
  },
  {
    title: "CS50",
    description:
      "Hosted by Harvard University, Introduction to computer science by David J Malan.",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/CS50.jpg?alt=media&token=dc841d85-a000-4b2d-8950-39e94ab4d50d",
  },
  {
    title: "gRPC",
    description:
      "Build modern Application Programming Interface and Microservices by Clement Jean",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/grpc.jpg?alt=media&token=72c01efb-3931-4047-a814-462ff1b513ee",
  },
  {
    title: "GraphQL",
    description:
      "Learn and master GraphQL by building real web apps with React and Node by Stephen Grider",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/GraphQL.jpg?alt=media&token=f066fe90-4193-4029-bad2-48d70ab5e2d0",
  },
  {
    title: "ASP.Net Core",
    description:
      "Build real world application using ASP.NET Core MVC, Entity Framework Core and ASP.NET Core Identity by Bhrugen Patel",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/ASPDotNetCoreMVC.jpg?alt=media&token=b46203fc-0ed1-40cf-9dc1-7eb73fa3fb62",
  },
  {
    title: "GoLang",
    description:
      "GoLang",
    imageSrc: "https://firebasestorage.googleapis.com/v0/b/dsohjh.appspot.com/o/GoLang.jpg?alt=media&token=a1147d84-2925-4b3e-875f-b8c3ce1f1f3f",
  },
];
//Responsive 
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}
interface certs{
  id: string;

}

function CertSection() {
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
            imageSrc={cert.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CertSection;
