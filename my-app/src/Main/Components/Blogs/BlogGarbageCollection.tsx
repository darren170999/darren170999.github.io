import { Stack, Heading, Text, Spacer, HStack, Spinner, Alert, AlertIcon, Link, AspectRatio, Code } from "@chakra-ui/react";
import FullScreenSection from "../Sections/FullScreenSection";
import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import { useEffect, useState } from "react";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { db } from "../../../firebase-config";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

function BlogGarbageCollection() {
    const [uniqueViews, setUniqueViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function updateAndFetchViews() {
            const docRef = doc(db, "Views", "GarbageCollectionExperienceViews");

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
                            Garbage Collection (GC)
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
                    Not too knowledgeable about this, but am currently reading this heavily
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">TLDR:</Text>} At some point in time, the need to tune your garbage collection becomes imperative for performance. Currently,
                        I am working in a team that uses .NET core for its backend services. The GC used for this cross-platform framework is typically just the default.
                        Microsoft's Generational marking algorithm sounds heavily influenced from the conventional tri-color marking algorithm, and as far as I can understand,
                        it is more or less the same thing. 
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Overview: </Text>}
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">How to tune your GC: </Text>}
                        (Reading up on this now)
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        <Link href='https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection' isExternal>
                            Read more on GC here!<ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Stack>
            </FullScreenSection>
            <Footer />
        </>
    );
}

export default BlogGarbageCollection;
