import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardInternship from "../Standard/CardInternship";
import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useEffect, useState } from "react";
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}
interface DataItem{
  id: string;
  description: string;
  imageSrc: string;
  title: string;

}

function CertSection() {
  const [certs, setCerts] = useState<DataItem[]>([]);
  const certificatesRef = collection(db, "Certificates");
  useEffect(()=>{
    const getCerts = async () => {
      const data = await getDocs(certificatesRef);
      setCerts(data.docs.map((doc) => ({...doc.data(), id:doc.id} as DataItem)))
    };
    getCerts();
  }, []);
  return (
    <>
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
    </>
  );
};

export default CertSection;
