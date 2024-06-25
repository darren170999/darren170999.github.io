import { Stack, Heading, Text, Spacer, HStack, Spinner, Alert, AlertIcon, Link, AspectRatio, Code } from "@chakra-ui/react";
import FullScreenSection from "../Sections/FullScreenSection";
import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import { useEffect, useState } from "react";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { db } from "../../../firebase-config";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

function BlogSourcegraphCody() {
    const [uniqueViews, setUniqueViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function updateAndFetchViews() {
            const docRef = doc(db, "Views", "CodySourceGraphExperienceViews");

            try {
                if (!sessionStorage.getItem("viewIncremented")) {
                    await updateDoc(docRef, {
                        count: increment(1)
                    });
                    sessionStorage.setItem("viewIncremented", "true");
                }

                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUniqueViews(docSnap.data().count);
                } else {
                    await setDoc(docRef, { count: 1 });
                    setUniqueViews(1);
                }
            } catch (error) {
                console.error("Error updating document:", error);
            } finally {
                setLoading(false);
            }
        };
        updateAndFetchViews();

    }, []);

    return (
        <>
            <Header />
            <FullScreenSection
                justifyContent="top"
                alignItems="left"
                padding="10"
                isDarkBackground
                backgroundColor="#000000">
                <Stack padding="5" alignContent="baseline">
                    <HStack>
                        <Heading size="xl">
                            Why {<Text as="b" color={"#00cbec"}>Sou</Text>}{<Text as="b" color={"#a112ff"}>rceg</Text>}{<Text as="b" color={"#ff5543"}>raph</Text>}?
                        </Heading>
                        <Spacer />
                        <ViewIcon />
                        {loading ? <Spinner size="sm" /> : <Text>{uniqueViews}</Text>}
                    </HStack>
                    {error && (
                        <Alert status="error">
                            <AlertIcon />
                            {error}
                        </Alert>
                    )}
                </Stack>
                <Stack padding="5" as="i">
                    <Text noOfLines={[20]} align="justify">
                        Just another insignificant dev's opinion (Chua Hock Chuan's Joke)
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">TLDR:</Text>} Learn codebases faster, maintain standards across subteams, search through commits, messages and code.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Overview: </Text>}
                        Overview: Sourcegraph is an essential tool for tracking and understanding codebases quickly. With the new Cody extension,
                        teams can onboard and navigate codebases more efficiently. You can think of Cody as a smart IDE or code editor
                        with search and AI capabilities.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Sample uses: </Text>}
                        Command + L or Ctrl + L allows you to open a ChatGPT related LLM that answers your questions about the codebase.
                        As codebases grow, the complexity for new engineers to onboard also increases linearly. With Sg and Cody, new
                        developers can learn and adapt faster. (The alternative would be to hold Command or Ctrl and clicking into it
                        repatedly but that is wonky). In addition, Engineers can also maintain code standards across subteams or learn 
                        from one another by seeing how certain implementations were made. 
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Eg: </Text>}
                        Perhaps we want to learn how a React Hook like {<Code background={"#fff2cf"}>useMemo</Code>}, is used across different subteams or learn how another our 
                        data engineers are publishing an event of interest, sg makes it much easier to do that.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        <Link href='https://ritza.co/showcase/opinionated-guide-to-setting-up-a-sourcegraph-server-for-more-productive-advanced-code-search.html' isExternal>
                            Unlock your team's expertise with sg enterprise<ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                    <AspectRatio maxW='1080px' ratio={1}>
                    <iframe
                        title='sourcegraph_demo'
                        src='https://www.youtube.com/embed/D2x037j3BZ4'
                        allowFullScreen
                    />
                    </AspectRatio>
                </Stack>
            </FullScreenSection>
            <Footer />
        </>
    );
}

export default BlogSourcegraphCody;
