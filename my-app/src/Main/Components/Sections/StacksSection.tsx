import FullScreenSection from "./FullScreenSection";
import { Wrap, Heading } from "@chakra-ui/react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useEffect, useState } from "react";
import StacksMiniSection from "./StacksMiniSection";
  
interface DataItem {
    id: string;
    name: string;
    imageSrc: string;
}

function StacksSection() {
    const[stacks, setStacks] = useState<DataItem[]>([]);
    const stacksRef = collection(db,"Stacks");
    const[unstacks, setUnstacks] = useState<DataItem[]>([]);
    const unstacksRef = collection(db, "Unstacks")

    useEffect(()=> {
        const getStacks = async () => {
        const data = await getDocs(stacksRef);
        setStacks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as DataItem)));
        };

        const getUnstacks = async() =>{
            const datas = await getDocs(unstacksRef);
            setUnstacks(datas.docs.map((doc)=>({...doc.data(), id: doc.id} as DataItem)));
        };

        getStacks();
        getUnstacks();
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
            Stacks that I use
            </Heading>
            <Wrap>
                {stacks.map((stack)=>(
                    <StacksMiniSection
                    key={stack.name}
                    name={stack.name}
                    imageSrc={stack.imageSrc}/>
                ))} 

            </Wrap>
            <Heading as="h1" id="certs-section">
                Stacks that I am currently learning
            </Heading>
            <Wrap>
            {unstacks.map((unstack)=>(
                    <StacksMiniSection
                    key={unstack.name}
                    name={unstack.name}
                    imageSrc={unstack.imageSrc}/>
                ))} 
            </Wrap>
        </FullScreenSection>
        </>
    );
};

export default StacksSection;
