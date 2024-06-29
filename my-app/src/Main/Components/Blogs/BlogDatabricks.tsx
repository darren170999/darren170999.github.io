import { Stack, Heading, Text, Spacer, HStack, Spinner, Alert, AlertIcon, Link, AspectRatio, Code } from "@chakra-ui/react";
import FullScreenSection from "../Sections/FullScreenSection";
import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import { useEffect, useState } from "react";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { db } from "../../../firebase-config";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

function BlogDatabricks() {
    const [uniqueViews, setUniqueViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function updateAndFetchViews() {
            const docRef = doc(db, "Views", "DatabricksExperienceViews");

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
                            Why {<Text as="b" color={"#FF3621"}>Databricks</Text>}?
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
                        Recently, I went to an event as a refresher to the use cases of Databricks but found myself learning the good news which is how Google is partnering up
                        with Databricks to deliver a new Data Intelligence Platform. Consolidating the analytics applications onto one open cloud platform. Greatly simplifying 
                        processes that are used in Data engineering's work today.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">TLDR:</Text>} Data Lakehouse Architecture is very powerful. Delta Live Tables conveniently compresses early stages in data pipelines into a
                        single stage. Databricks makes Machine Learning and Data engineers' jobs alot easier. ** Still need to understand more about workflows **
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Overview: </Text>}
                        Overview: Databricks main competive advantage lies in its ability to provide a new architecture known as the Data lakehouse. A Data lake built on top of a 
                        Data warehouse. 
                        In addition, Delta Live Tables will also value add to data engineering teams as they managed to streamline traditional data pipeline processes.

                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Sample uses: </Text>}
                        First, we will select a compute engine for our jobs. Next we will set the environments we want in a convenient fashion in order to 
                    </Text>
                    <Text noOfLines={[20]} align="justify">

                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        <Link href='https://www.databricks.com/sites/default/files/2020/12/cidr_lakehouse.pdf' isExternal>
                            Read more on the Data Lakehouse Architecture here!<ExternalLinkIcon mx='2px' />
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

export default BlogDatabricks;
