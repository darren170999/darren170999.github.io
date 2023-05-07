import CertSection from "./Components/CertSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InternshipsSection from "./Components/InternshipSection";
import LandingSection from "./Components/LandingSection";
import StacksSection from "./Components/StacksSection";
import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
function MainPage() {
  const [t, setT] = useState<string[]>([])
  const collectionRef = collection(db, "testing");

  useEffect(()=> {
    const getTest = async () => {
      const data = await getDocs(collectionRef);
      console.log(data);
      setT(data.docs.map((doc)=>doc.id));
    };

    getTest();
  }, []);
  
  return (
    <>
    <Header />
    <LandingSection />
    <StacksSection />
    <InternshipsSection />
    <CertSection/>
    <Footer />
    </>
  );
}

export default MainPage;
