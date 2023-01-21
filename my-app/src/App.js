import {ChakraProvider} from "@chakra-ui/react";
import './App.css';
import CertSection from "./components/CertSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InternshipsSection from "./components/InternshipSection";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />
      <InternshipsSection />
      <CertSection/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
