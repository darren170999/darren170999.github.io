import CertSection from "./Components/CertSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InternshipsSection from "./Components/InternshipSection";
import LandingSection from "./Components/LandingSection";
import StacksSection from "./Components/StacksSection";
 
function MainPage() {
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
