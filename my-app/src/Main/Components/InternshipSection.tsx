import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardInternship from "./CardInternship";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
interface DataItem{
  id: string;
  description: string;
  title: string;
  imageSrc: string;
}

function InternshipsSection () {
  const [internships, setInternships] = useState<DataItem[]>([]);
  const internshipsRef = collection(db, "Internships");
  useEffect(()=>{
    const getInternships = async () => {
      const data = await getDocs(internshipsRef);
      setInternships(data.docs.map((doc) => ({...doc.data(), id:doc.id} as DataItem)))
    };
    getInternships();
  }, []);
  return (
    <>
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
            imageSrc={internship.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
    </>
  );
};

export default InternshipsSection;
