import {ChakraProvider} from "@chakra-ui/react";
import './App.css';
import Header from "./components/Header";
import InternshipsSection from "./components/InternshipSection";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />
      <InternshipsSection />
    </ChakraProvider>
  );
}

export default App;
