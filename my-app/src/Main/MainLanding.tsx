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

interface DataItem {
  id: string;
  // Add other properties here if needed
}

function MainPage() {
  const [t, setT] = useState<DataItem[]>([])
  const collectionRef = collection(db, "testing");

  useEffect(()=> {
    const getTest = async () => {
      const data = await getDocs(collectionRef);
      setT(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as DataItem)));
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
