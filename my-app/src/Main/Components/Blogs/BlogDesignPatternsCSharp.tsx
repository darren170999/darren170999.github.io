import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import AbstractFactory from "./DesignPatterns/AbstractFactory";
import Singleton from "./DesignPatterns/Singleton";

function BlogDesignPatternsCSharp() {    

  return (
    <>
        <Header />
        <AbstractFactory/>
        <Singleton/>
        <Footer />
      
    </>
  );
}

export default BlogDesignPatternsCSharp;
