import CertSection from "./Components/Sections/CertSection";
import Footer from "./Components/Standard/Footer";
import Header from "./Components/Standard/Header";
import InternshipsSection from "./Components/Sections/InternshipSection";
import LandingSection from "./Components/Sections/LandingSection";
import StacksSection from "./Components/Sections/StacksSection";
function MainPage() {
  return (
    <>
    <Header />
    <LandingSection />
    <StacksSection />
    <InternshipsSection />
    {/* <CertSection/> */}
    <Footer />
    </>
  );
}

export default MainPage;
