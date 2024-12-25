import { Stack, Heading, Text, Spacer, HStack, Spinner, Alert, AlertIcon, Link, AspectRatio, Code } from "@chakra-ui/react";
import FullScreenSection from "../Sections/FullScreenSection";
import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import { useEffect, useState } from "react";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { db } from "../../../firebase-config";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

function BlogOuttakes2024() {
    const [uniqueViews, setUniqueViews] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function updateAndFetchViews() {
            const docRef = doc(db, "Views", "OuttakesExperienceViews");

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
                            {<Text as="b">2024</Text>} Takeaways
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
                        As 2024 begins to unfold, I am taking the time to reflect and document what I’ve learned—not only as a software engineer with three months of experience but also as
                        a son who has witnessed the struggles of his family. As a side note, I hope this habit of writing will not only improve my ability to create clear and effective
                        documentation but also serve as a meaningful way to look back on my journey and growth.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Heading size="lg">
                        {<Text as="b">Lesson 1: The Importance of Planning</Text>}
                    </Heading>
                    <Text noOfLines={[20]} align="justify">
                        {<Text as="b">The last thing that a SWE should do is code. Planning should always be first. ~Winston Lim</Text>}
                    </Text>
                    <Text noOfLines={[25]} align="justify">
                        During my stint at Coinbase, I learned the value of technical design documents (TDDs) in planning implementation efforts within large-scale codebases.In mature products,
                        the sheer size of codebases necessitates processes that minimize the risk of introducing errors. (which is why TDDs are designed to be cumbersome)
                        At my current workplace, where the codebases are much smaller, this level of rigor is often deemed unnecessary even by peers. While my suggestions to adopt such processes
                        were met with resistance, I still believe that juniors like myself can learn a great deal from the TDD approach, even though it can be tedious at times. A major benefit of TDDs
                        is their ability to capture not just the implementation plan but also the trade-offs and rationale behind decisions alongside the process discussion or comments.
                        These small details often allow us to capture edge cases or have more experienced colleagues weigh in with their thoughts.

                        Some companies uses slack threads to document these discussions, but these are not really a thing here and documentation happens only after development. (We use Wiki pages that
                        summarize implementation details) Whether the feature is complex or straightforward, planning in this way consistently yields better results from my own experience.

                        For example, I recently worked on two features: one involving S3 and another for email notifications. The S3 feature, though simpler, was meticulously planned and completed within
                        three days, with an additional two days spent refining the UI. In contrast, the email notification feature, which lacked upfront planning, took nearly 2.5 months to finish.
                        The delays stemmed from frequent redesigns and unforeseen obstacles—a clear consequence of insufficient planning.

                        I am by no means pushing my opinion on anyone (Hey don't listen to a new grad like myself) but planning is particularly crucial in a SWE's development lifecycle.
                        When planning, start from the database schema, here, we can decide on new tables or columns and their purposes. Establishing this foundational direction early ensures smoother
                        implementation. The S3 feature's success underscored the importance of this step, while the challenges with the email notification feature served as a harsh reminder of what happens
                        without proper preparation- Again, I redid this at least 3 times before getting a green light and it is still bugging out in my services.

                        The lesson here is timeless: planning saves time, effort, and frustration. The last thing a software engineer should do is dive into coding without a solid plan. Proper planning
                        does not just prevent wasted effort—it sets the stage for efficient, predictable development and ensures the team can focus on building rather than backtracking.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Heading size="lg">
                        {<Text as="b">Lesson 2: Cope your urge to do micro-optimisation</Text>}
                    </Heading>
                    <Text noOfLines={[20]} align="justify">
                        TL;DR, Don't.
                    </Text>
                    <Text noOfLines={[25]} align="justify">
                        As a new graduate who frequently practices LeetCode and interviews with various tech companies, I noticed significant parallels between the tasks encountered in
                        interviews and those faced at work. In interviews, candidates are often expected to optimize their code, and this mindset tends to carry over into daily work. However,
                        this urge to always chase the "optimal" solution can cloud your judgment—especially when even a brute-force solution is challenging to implement.
                        Unlike interview scenarios, everyday work provides far more context and considerations before moving into the implementation phase. Focusing prematurely on optimization
                        can become a distraction, kind of like a wild goose chase. The solution deemed theoretically optimal may not be the most practical or desirable for the codebase (which
                        is something I should start to think more about). I prefer to prioritize functionality, maintainability, and readability with the broader project goals.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Heading size="lg">
                        {<Text as="b">Lesson 3: Dealing with redtapes in your organisation</Text>}
                    </Heading>
                    <Text noOfLines={[20]} align="justify">
                        Life is a multithreaded system, and concurrency is king.
                    </Text>
                    <Text noOfLines={[25]} align="justify">
                        I have come to see life—and work—as a multithreaded system, where concurrency reigns supreme. Along the way, I have realized that red tape isn’t entirely bad. It often 
                        serves a purpose, such as ensuring risk management and compliance. For instance, rather than giving developers unchecked power to provision resources at will, having 
                        someone from infrastructure review requests can prevent unnecessary provisioning, saving costs and ensuring resources are used effectively.
                        That said, red tape does have its downsides, particularly the long waiting times. In one of my projects, it took an entire month to get a server for Splunk logs. 
                        The process was far from smooth—requests for metrics and log volume proof were demanded as justification, even though accessing the logs was a prerequisite to gathering 
                        that proof. It felt like a classic chicken-and-egg problem. Moving forward, I believe the key lies in embracing concurrency in workflows. 
                        Just as multithreading improves efficiency in systems, multitasking and parallel efforts can make work environments more productive. Balancing structured processes with
                        the ability to execute tasks concurrently is how we can move past bottlenecks while maintaining order and efficiency.
                    </Text>
                </Stack>
                {/* <Stack padding="5">
                    <Heading size="lg">
                        {<Text as="b">Lesson 4: Dealing with redtapes in your organisation</Text>}
                    </Heading>
                    <Text noOfLines={[20]} align="justify">
                        Life is a multi threadded system, and concurrency is king.
                    </Text>
                    <Text noOfLines={[25]} align="justify">
                        I have come to see life—and work—as a multithreaded system, where concurrency reigns supreme. Along the way, I have realized that red tape isn’t entirely bad. It often 
                        serves a purpose, such as ensuring risk management and compliance. For instance, rather than giving developers unchecked power to provision resources at will, having 
                        someone from infrastructure review requests can prevent unnecessary provisioning, saving costs and ensuring resources are used effectively.
                        That said, red tape does have its downsides, particularly the long waiting times. In one of my projects, it took an entire month to get a server for Splunk logs. 
                        The process was far from smooth—requests for metrics and log volume proof were demanded as justification, even though accessing the logs was a prerequisite to gathering 
                        that proof. It felt like a classic chicken-and-egg problem. Moving forward, I believe the key lies in embracing concurrency in workflows. 
                        Just as multithreading improves efficiency in systems, multitasking and parallel efforts can make work environments more productive. Balancing structured processes with
                        the ability to execute tasks concurrently is how we can move past bottlenecks while maintaining order and efficiency.
                    </Text>
                </Stack> */}
            </FullScreenSection>
            <Footer />
        </>
    );
}

export default BlogOuttakes2024;
