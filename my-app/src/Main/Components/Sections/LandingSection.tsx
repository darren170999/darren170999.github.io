import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useEffect, useState } from "react";
interface DataItem {
  id: string;
  greeting: string;
  bio1: string;
  bio2: string;
}
function LandingSection () {
  const[greetings, setGreetings] = useState<DataItem[]>([]);
  const greetingsRef = collection(db, "Greetings");
  useEffect(()=>{
    const getGreetings = async () => {
      const data = await getDocs(greetingsRef);
      setGreetings(data.docs.map((doc) => ({...doc.data(), id:doc.id} as DataItem)))
    };
    getGreetings();
  }, []);
  return(
    <>
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1a1f71"
  >
    {greetings.map((greet)=>{
      return(
        <VStack>
          {" "}
          <Avatar size='2xl' src='/avatar.png'>
            {" "}{" "}
          </Avatar>
          <h1 style={{color: "#F7B600"}}>{greet.greeting}</h1>
          <Heading>
            {" "}
            <h1 style={{textAlign: "center"}}>{greet.bio1}</h1>
            <h1 style={{color: "#F7B600"}}>{greet.bio2}</h1>
            {" "}
          </Heading>{" "}
        </VStack>
      );
    })};
    
  </FullScreenSection>
  </>
  )

};

export default LandingSection;
