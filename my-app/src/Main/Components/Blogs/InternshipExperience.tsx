import { Stack, Heading, Text } from "@chakra-ui/react";
import FullScreenSection from "../Sections/FullScreenSection";
import Footer from "../Standard/Footer";
import Header from "../Standard/Header";

function BlogInternshipExperience() {
    //Add images 
    return (
        <>
        <Header />
        <FullScreenSection
            justifyContent="top"
            alignItems="left"
            padding="10"
            isDarkBackground
            backgroundColor="#000000">
            <Stack padding={"5"}>
                <Heading size={"xl"}>
                Internship Experience
                </Heading>
            </Stack>
            <Stack padding={"5"} as="i">
                <Text noOfLines={[20]} align={"justify"}>
                Disclaimer: This is an opinionated reflection on the Software Engineering(SWE) Internships that I have done over 
                the past 2 years. At the time of writing this, I am a graduating college senior and I just wanted to jot
                some of the most memorable learnings I've taken away from each of them. Hopefully, these insights will add value 
                to those who read this and help guide them a bit better in navigating the SWE space.
                </Text>
            </Stack>
            <Stack padding={"5"}>
                {/* <Image></Image> */}
                <Text noOfLines={[20]} align={"justify"}>
                My first summer internship was at a startup founded by a Swiss billionaire. Their main line of business involved specialized insurance for niche customers.
                We built three Minimum Viable Products (two technical and one non-technical), which served as Proofs of Concept for future features. During this internship,
                I gained exposure to agile team workflows and interesting interactive web technologies.
                </Text>
                <Text noOfLines={[20]} align={"justify"}>
                Lesson: Quickly understanding the business can help align your interests with theirs, increasing your chances of controlling the work you do. Manage your 
                expectations but be sure to vocalize them, such as requesting more SWE-related tasks. The worst they can say is no. Build strong relationships with your team 
                and make lasting friendships. Although I felt my technical skills didn't improve significantly, I learned how to read documentation effectively—a skill that 
                proved to be extremely important in hindsight.
                </Text>
                
            </Stack>
            <Stack padding={"5"}>
                <Text noOfLines={[20]} align={"justify"}>
                Following this, I completed my college's mandatory internship at a Statutory Board that focuses on Defence Tech. Here, I encountered a completely different 
                working culture. The team I was assigned to felt familiar and welcoming, and I thoroughly enjoyed my time there. Collaborating with professors from overseas 
                universities was a rare and enriching experience. However, I regret not fully appreciating the technical work assigned to me at the time. By my own standards, 
                I felt I didn't contribute enough to be considered useful and wished I had been brave enough to ask more questions. Despite this, I was exposed to many fascinating 
                and confidential projects and made many friends in the process. Being able to work on confidential projects made it more patriotic.
                </Text>
                <Text noOfLines={[20]} align={"justify"}>
                Lesson: Be bold and ask senior engineers many questions—there are no bad questions. Complete demo projects diligently, as they simulate future complex problems. 
                Some people in such environments may prefer a laid-back career, which is perfectly fine as long as you are clear about your own priorities. 
                The term "comfortably numb" aptly describes the situation.
                </Text>
            </Stack>
            <Stack padding={"5"}>
                <Text noOfLines={[20]} align={"justify"}>
                I was fortunate enough to intern at a bank after winning their hackathon, a tech competition. As the largest financial institution in the world, they operate in 
                hundreds of countries, making it the largest organization I have ever been a part of. The firm-wide orientation placed a heavy emphasis on business acumen. 
                To broaden our exposure, side projects were also assigned to give us a well-rounded understanding of the various lines of business. The work I did there involved 
                maintaining systems and finding new ways to automate old processes.
                </Text>
                <Text noOfLines={[20]} align={"justify"}>
                Lesson: Always be nice and work on your communication skills. Often, it is more important to be personable than to be highly technical in a bank. Many tips focused on 
                networking and holding conversations well. 
                </Text>
            </Stack>
            <Stack padding={"5"}>
                <Text noOfLines={[25]} align={"justify"}>
                Perhaps the most notable internships for software engineers are those at tech companies. Interning at a large cryptocurrency exchange and the largest payments 
                provider gave me valuable insights into the fintech industry. Tech companies are where engineering truly comes alive; their codebases and practices are just marvelous. 
                Even more impressive are the people who were hired before you, possessing a vast treasure trove of knowledge that is accessible if they are not gatekeepers.
                One time, I brought a custom keyboard to work, which I had soldered and assembled with a friend. I was proud of it. A senior engineering manager, who previously worked 
                at Google, took an interest in it and showed me his own "customized keyboard." He had 3D-printed and made the entire thing from scratch, including the software and 
                firmwares that powers it.
                </Text>
                <Text noOfLines={[20]} align={"justify"}>
                Lesson: Learn fast and work faster. Failure is not an option here, as people are results-driven and often remark how easy a task was once it’s completed. Spend more 
                time thinking than writing code. The worst thing you can do is set your team back with every step you take.
                </Text>
                
            </Stack>
        </FullScreenSection>
        <Footer />
        </>
    );
}
export default BlogInternshipExperience;
