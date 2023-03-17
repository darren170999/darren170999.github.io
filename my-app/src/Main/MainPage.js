import {ChakraProvider} from "@chakra-ui/react";
import './MainPage.css';
import CertSection from "./components/CertSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InternshipsSection from "./components/InternshipSection";
import LandingSection from "./components/LandingSection";
 
function MainPage() {
  return (
    <>
    <Header />
    <LandingSection />
    <InternshipsSection />
    <CertSection/>
    <Footer />
    </>
  );
}

export default MainPage;
