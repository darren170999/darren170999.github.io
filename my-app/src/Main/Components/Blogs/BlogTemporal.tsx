import { Stack, Heading, Text, Spacer, HStack, Spinner, Alert, AlertIcon, Link, AspectRatio, Code } from "@chakra-ui/react";
import FullScreenSection from "../Sections/FullScreenSection";
import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import { useEffect, useState } from "react";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { db } from "../../../firebase-config";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

function BlogTemporal() {
    const [uniqueViews, setUniqueViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function updateAndFetchViews() {
            const docRef = doc(db, "Views", "TemporalExperienceViews");

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
                        During a recent event (2024), I learned that Google is partnering with Databricks to create a new Data Intelligence Platform, which aims to simplify  
                        data engineering processes by consolidating analytics applications onto one open cloud platform, enhancing collaboration, scalability, cost efficiency, 
                        and advanced analytics.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">TLDR:</Text>}  Data Lakehouse Architecture is the way of the future. Delta Live Tables conveniently compresses early stages in data 
                        pipelines into a single stage. Databricks makes Machine Learning and Data engineers' jobs alot easier as they allow versionings of datas, thread 
                        management also seems to be integrated into the platform as well. So Data Scientists and Engineers can focus on the data analysis portions, greatly 
                        reducing the need to worry about these issues.
                        However, on a personal note, I should learn how workflows are being orchestrated in the last stage of data pipelines to better provide this summary. 
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b"> Lakehouse's key features include: </Text>}
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        1. Full ACID compliance with scalable data and metadata handling - a previously tedious process for data engineers.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        2. Audit History and Time Travelling - allowing for reproducible experiments and easy roll backs.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        3. Say no to data swamps - happens when too much bad data is ingested. (Bad data in = Bad data out)
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        4. Efficient Data capture with unified streaming and batch processing.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Overview: </Text>}
                        Overview: Databrick's main competive advantage lies in its ability to provide a new architecture known as the Data lakehouse, which is essentially a 
                        Data lake built on top of a Data warehouse. From the developers of Delta Lake, Apache Spark and MlFlow, Lakehouse was made to overcome a few engineering
                        gaps, like giving structure to Data lake and having better runtime. Lakehouse also uses delta lake and photon giving ACID support to database operations.
                        In addition, Delta Live Tables will also value add to data engineering teams as they managed to streamline traditional data pipeline processes, making it 
                        scaling of data and handling of metadata an easy feat. The ability to audit history and "time travel" back to previous versions also exists. This is done 
                        through deleting updates and reversed merging.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">Sample uses: </Text>}
                        First, we will select a compute engine for our jobs. Next we will set the environments we want in a convenient fashion. This setup manages dependencies
                        independently. The difference in approach can be conveniently tweaked. If you prefer to use Delta Live Tables, just use the workflows. Else, the more 
                        traditional approach of using Delta is also available under a separate manual workflow.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        Next, Run the notebooks that you like, ingestions can also be done at this step. Data that is ingested should also be cleaned or managed before any other
                        consumptions are used. Refer to your team's own specific pipelines. There is also a neat feature in Delta Live Tables, some UI of processes' detailings will
                        be spun up to know the state of the workflow. Jobs can also run concurrently across a single workspace. Cells in Databricks notebooks also have thread managements.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        Lastly, (I have nothing else to write for now.)
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        <Link href='https://www.databricks.com/sites/default/files/2020/12/cidr_lakehouse.pdf' isExternal>
                            Read more on the Data Lakehouse Architecture here!<ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                    <AspectRatio >
                    <iframe
                        title='Databricks_demo'
                        src='https://www.youtube.com/embed/02DBOfYrYT0'
                        allowFullScreen
                    />
                    </AspectRatio>
                </Stack>
            </FullScreenSection>
            <Footer />
        </>
    );
}

export default BlogTemporal;
